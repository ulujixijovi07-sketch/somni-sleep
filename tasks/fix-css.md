Edit src/app/products/[slug]/page.tsx. The CSS styles from product.html are only loaded for the sleep mask page. Other products use the same CSS class names (modes-grid, mode-card, feature-split, specs-grid, spec-card, etc.) but the styles aren't applied because the <style> tag isn't injected.

FIX: Always load the product.html CSS for ALL product pages, not just the sleep mask.

CHANGES:
1. In the useEffect, always fetch product.html CSS (remove the `if (!isMask) return;`)
2. Extract the <style> content regardless of slug
3. Render the <style dangerouslySetInnerHTML> for ALL product pages, not just the mask

The key change in useEffect:
- Change: `if (!isMask) return;` → remove this line
- Keep the HTML body extraction only when isMask (for the rich HTML sections)
- Always extract and save the style content

The key change in render:
- Move `<style dangerouslySetInnerHTML={{ __html: htmlContent.style }} />` to render for ALL paths
- Keep the sleep mask body rendering conditional on isMask

Also, the loading state should only show for the mask (which needs the HTML body). For non-mask products, render immediately with the GenericSections but wait for the style to load. OR simpler: just load the style synchronously by embedding it directly.

SIMPLEST APPROACH: Just inline the CSS from product.html as a <style jsx global> or regular <style> tag that's always present, without needing fetch.

Actually the SIMPLEST approach: add a useEffect that loads the style for ALL products, but only block rendering for the mask (which needs the body HTML).

Make the useEffect:
```
useEffect(() => {
  fetch("/product.html")
    .then(r => r.text())
    .then(html => {
      const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
      const style = styleMatch ? styleMatch[1].trim() : "";
      setProductStyle(style);
      
      if (isMask) {
        // Extract body for mask rendering
        ...
        setHtmlContent({ style, body });
      }
    });
}, [isMask]);
```

Then in the render, ALWAYS include the style and remove the style from htmlContent:
- `<style dangerouslySetInnerHTML={{ __html: productStyle }} />`
- For mask: render body dangerouslySetInnerHTML (but no duplicate style)
- For others: render GenericSections

State: add `const [productStyle, setProductStyle] = useState<string>("");`

For the mask: remove style from htmlContent since we render it separately.
For others: just render GenericSections with the style already injected.

Run: cd D:/projects/somni-sleep && npx next build --webpack
