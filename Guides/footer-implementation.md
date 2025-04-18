# Reusable Footer Implementation Guide

This guide explains how to implement the reusable footer across all pages of your website using the JavaScript include method.

## Implementation Steps

### 1. Add the Script to Your HTML Pages

Add the following script tag just before the closing `</body>` tag in each of your HTML files:

```html
<script src="footer.js"></script>
```

Example implementation:

```html
    </main>
    <script src="footer.js"></script>
</body>
</html>
```

### 2. Remove Existing Footer HTML

Once you've added the script to a page, you should remove the existing footer HTML code from that page. The JavaScript will automatically insert the footer for you.

Remove this section from each page:

```html
<footer>
    <div class="footer-content">
        <!-- Footer content here -->
    </div>
    
    <div class="footer-bottom">
        <!-- Copyright info here -->
    </div>
</footer>
```

## Customizing the Footer

To customize the footer content, simply edit the `footer.js` file. All changes made to this file will be reflected across all pages that include it.

### Common Customizations:

1. **Update Contact Information**:
   - Edit the email, phone, and location in the contact-info section

2. **Change Social Media Links**:
   - Update the href attributes in the social-links section

3. **Modify Navigation Links**:
   - Add, remove, or update links in the quick-links section

4. **Update Copyright Year**:
   - The year is automatically set to the current year using JavaScript

## Troubleshooting

### Footer Not Appearing

- Make sure the script tag is placed just before the closing `</body>` tag
- Verify that your page has a `<main class="container">` element
- Check the browser console for any JavaScript errors

### Styling Issues

- The footer uses the existing styles from your style.css file
- If you notice any styling issues, check that the class names in footer.js match those in your CSS
- For mobile responsiveness, your existing media queries in style.css will apply to the dynamically inserted footer

### Multiple Footers Appearing

- The script checks for existing footers to prevent duplicates
- If you see multiple footers, make sure you've removed the static footer HTML from your pages

## Benefits of This Approach

- **Single Source of Truth**: Update the footer in one place and changes apply everywhere
- **Automatic Year Updates**: Copyright year updates automatically
- **Consistent Layout**: Ensures footer is identical across all pages
- **Browser Compatibility**: Works in all modern browsers