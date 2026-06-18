const puppeteer = require('puppeteer-core');
const http = require('http');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

async function getWsUrl() {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:9222/json/version', res => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                try { resolve(JSON.parse(data).webSocketDebuggerUrl); }
                catch(e) { reject(e); }
            });
        }).on('error', reject);
    });
}

async function solveSlider(page) {
    // Wait for slider iframe to load
    await new Promise(r => setTimeout(r, 2000));
    
    const frames = await page.frames();
    console.log(`Total frames: ${frames.length}`);
    
    let sliderFrame = null;
    for (const frame of frames) {
        try {
            const html = await frame.content();
            if (html.includes('nc_iconfont') || html.includes('slider') || html.includes('slide')) {
                sliderFrame = frame;
                console.log('Found slider frame');
                break;
            }
        } catch(e) {}
    }
    
    // If no slider frame found, try to screenshot and use OpenCV
    console.log('Taking slider screenshot...');
    
    // Take screenshot of the slider area
    const sliderEl = await page.$('[id*="nc"], [class*="nc"], [id*="captcha"], [class*="captcha"]');
    if (sliderEl) {
        await sliderEl.screenshot({ path: 'D:/projects/somni-sleep/tasks/slider.png' });
        console.log('Slider screenshot saved');
        
        // Use Python OpenCV to find gap
        try {
            const result = execSync(
                `python -c "
import cv2, numpy as np
img = cv2.imread('D:/projects/somni-sleep/tasks/slider.png', cv2.IMREAD_GRAYSCALE)
if img is not None:
    # Try to find the gap by edge detection
    edges = cv2.Canny(img, 50, 150)
    # Look for the notch/gap pattern
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    print(f'Found {len(contours)} contours, image size: {img.shape}')
else:
    print('Failed to load image')
"`, { encoding: 'utf8', timeout: 10000 }
            );
            console.log('OpenCV:', result.trim());
        } catch(e) {
            console.log('OpenCV error:', e.message);
        }
    }
    
    // Try direct slider drag simulation
    try {
        const slider = await page.$('[class*="btn_slide"], [class*="slider-btn"], .nc_iconfont');
        if (slider) {
            const box = await slider.boundingBox();
            if (box) {
                console.log('Slider found at:', JSON.stringify(box));
                
                const startX = box.x + box.width / 2;
                const startY = box.y + box.height / 2;
                
                await page.mouse.move(startX, startY);
                await page.mouse.down();
                
                // Drag 260px (typical 1688 slider width)
                const steps = 30;
                for (let i = 1; i <= steps; i++) {
                    const progress = i / steps;
                    const x = startX + 260 * progress + (Math.random() * 2 - 1);
                    const y = startY + (Math.random() * 4 - 2);
                    await page.mouse.move(x, y);
                    await new Promise(r => setTimeout(r, 15 + Math.random() * 25));
                }
                
                await page.mouse.up();
                console.log('Slider drag complete');
                await new Promise(r => setTimeout(r, 2000));
            }
        }
    } catch(e) {
        console.log('Slider drag error:', e.message);
    }
    
    return page.url().includes('offer');
}

async function main() {
    const wsUrl = await getWsUrl();
    const browser = await puppeteer.connect({ browserWSEndpoint: wsUrl });
    const pages = await browser.pages();
    const page = pages[0] || await browser.newPage();
    
    // Go directly to login page
    await page.goto('https://detail.1688.com/offer/999618672422.html', { 
        waitUntil: 'domcontentloaded', timeout: 30000 
    });
    await new Promise(r => setTimeout(r, 3000));
    
    console.log('URL:', page.url().substring(0, 80));
    
    // Fill credentials
    const userInput = await page.$('input[type="text"]:not([readonly])') || 
                       await page.$('#fm-login-id');
    const passInput = await page.$('input[type="password"]') ||
                       await page.$('#fm-login-password');
    
    if (userInput && passInput) {
        await userInput.click({clickCount:3});
        await userInput.type('18211786144');
        await passInput.click({clickCount:3});
        await passInput.type('lx13041030750');
        console.log('Credentials filled');
    }
    
    // Try slider
    await solveSlider(page);
    await new Promise(r => setTimeout(r, 2000));
    
    // Click login
    const loginBtn = await page.$('button[type="submit"], .password-login-btn, #login-form button');
    if (loginBtn) {
        try {
            await loginBtn.click();
            console.log('Login clicked');
            await new Promise(r => setTimeout(r, 5000));
        } catch(e) {
            console.log('Click error:', e.message);
        }
    }
    
    console.log('Final URL:', page.url().substring(0, 80));
    
    if (page.url().includes('offer/999618672422')) {
        console.log('✓ SUCCESS! On product page');
        const html = await page.content();
        fs.writeFileSync('D:/projects/somni-sleep/tasks/1688-spray.html', html);
    }
    
    await browser.disconnect();
}

main().catch(e => console.error('FATAL:', e.message));
