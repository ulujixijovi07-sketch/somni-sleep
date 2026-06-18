"""Generate placeholder product images with gradient backgrounds."""
import struct, zlib, os

def create_png(width, height, color1, color2, text, filepath):
    """Create a simple PNG with a gradient background and text."""
    # Build a simple gradient
    raw_data = b''
    for y in range(height):
        raw_data += b'\x00'  # filter byte: none
        t = y / max(height - 1, 1)
        r = int(color1[0] + (color2[0] - color1[0]) * t)
        g = int(color1[1] + (color2[1] - color1[1]) * t)
        b = int(color1[2] + (color2[2] - color1[2]) * t)
        for x in range(width):
            raw_data += struct.pack('BBB', r, g, b)

    def chunk(ctype, data):
        c = ctype + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)  # 8-bit RGB
    png = b'\x89PNG\r\n\x1a\n'
    png += chunk(b'IHDR', ihdr)
    png += chunk(b'IDAT', zlib.compress(raw_data))
    png += chunk(b'IEND', b'')

    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'wb') as f:
        f.write(png)
    print(f"Created: {filepath}")

# Product color themes
products = [
    {
        "dir": "D:/projects/somni-sleep/public/products/deep-sleep-pillow-spray",
        "color1": (30, 40, 35),
        "color2": (80, 120, 70),
        "desc": "Deep Sleep\nPillow Spray",
    },
    {
        "dir": "D:/projects/somni-sleep/public/products/acupressure-sleep-mat",
        "color1": (40, 30, 25),
        "color2": (140, 100, 70),
        "desc": "Acupressure\nSleep Mat",
    },
    {
        "dir": "D:/projects/somni-sleep/public/products/white-noise-aroma-machine",
        "color1": (20, 30, 45),
        "color2": (80, 140, 170),
        "desc": "White Noise\nAroma Machine",
    },
]

for p in products:
    for i in range(1, 6):
        fname = f"{p['dir']}/{i}.jpg"
        # Skip if already exists
        if os.path.exists(fname):
            print(f"Exists: {fname}")
            continue
        # Generate PNG (browsers can render .png even if named .jpg for placeholders)
        create_png(800, 800, p["color1"], p["color2"], p["desc"], fname)

print("Done generating placeholder images.")
