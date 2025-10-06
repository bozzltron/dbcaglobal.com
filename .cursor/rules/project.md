# DBCA Global Website - Project Rules & Context

## Project Overview

DBCA Global (dbcaglobal.com) is a professional business website for a U.S.-based procurement and logistics consultancy. The site is designed to be maintained by AI coding assistants and follows static HTML best practices.

**Company:** DBCA Global, LLC  
**Industry:** Procurement & Logistics  
**Target Audience:** International vendors, U.S. manufacturers, logistics partners  
**Location:** Austin, TX

## Architecture

### Technology Stack
- **Static HTML** - No framework, vanilla HTML5
- **CSS** - Inline styles + theme CSS (HTML5 UP Aerial theme)
- **Dev Server:** `serve` package (port 3010)
- **Deployment:** Cloudflare Pages (via Git)

### File Structure
```
/
├── index.html              # Homepage - landing page
├── about/index.html        # Company background & founder
├── services/index.html     # Service offerings
├── why-dbca/index.html     # Value proposition
├── contact/index.html      # Contact information
├── assets/
│   └── css/               # Theme stylesheets
├── _redirects             # Cloudflare redirects for clean URLs
└── _headers               # Security & caching headers
```

### Clean URLs
- Directory structure enables clean URLs (e.g., `/about` instead of `/about.html`)
- Works on Cloudflare Pages without additional configuration
- Each page is at `{directory}/index.html`

## Design System

### Color Palette
- **Primary Blue:** `#348cb2` (theme blue from background)
- **Dark Text:** `#2a2a2a` (headers - softer than pure black), `#333` (body), `#555` (quotes)
- **Accent:** Teal/blue for links and accents
- **Backgrounds:** White with 85% opacity (`rgba(255,255,255,0.85)`) for better background visibility

### Typography
- **Main Headers (h1):** Logo image (120px height) centered in page header
- **Content Headers (h2):** 2rem, #2a2a2a (softer black), bold (700), uppercase, left-aligned
- **Subheadings (h3):** 1.5rem, #2a2a2a, semi-bold (600), left-aligned
- **Body Text:** #333, 1.8 line-height, 1.25rem bottom margin for spacing, left-aligned

### Layout Principles
1. **Consistent header across all pages** - DBCA Global logo (120px) + navigation
2. **Centered page header, left-aligned content** - for readability
3. **White content boxes with rounded corners** (8px) and 85% opacity for better background visibility
4. **Animated background** - scrolling blue background on all pages
5. **No content animations** - instant load (except home page has fast fade-in)
6. **Enhanced spacing** - 1.25rem bottom margin on paragraphs for better readability
7. **Mobile responsive** - Inline media queries at 768px (tablet) and 480px (mobile) breakpoints

## HTML Best Practices

### Performance
1. **Minimize HTTP requests** - inline critical CSS
2. **Use semantic HTML5** - `<header>`, `<footer>`, `<nav>`, proper headings
3. **Optimize images** - use appropriate formats and sizes
4. **Async/defer scripts** - Google Analytics loads conditionally

### SEO
1. **Unique titles per page** - format: "Page Name - DBCA Global"
2. **Meta descriptions** - 150-160 characters, compelling, keyword-rich
3. **Open Graph tags** - for social media sharing
4. **Semantic HTML** - proper heading hierarchy (h1 → h2 → h3)
5. **Internal linking** - consistent navigation across all pages
6. **Clean URLs** - no `.html` extensions

### Accessibility
1. **Proper heading hierarchy** - don't skip levels
2. **Alt text for images** - descriptive, not decorative
3. **Color contrast** - WCAG AA compliant (4.5:1 minimum)
4. **Link text** - descriptive, not "click here"
5. **Keyboard navigation** - all interactive elements accessible
6. **Semantic HTML** - use proper tags for their purpose

## Content Structure for LLMs

### Data Schema (Implicit)
Each page follows a consistent semantic structure that LLMs can parse:

```html
<header id="header">
  <h1>DBCA Global</h1>         <!-- Company name -->
  <p class="nav-links">         <!-- Navigation -->
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/why-dbca">Why DBCA</a>
    <a href="/contact">Contact</a>
  </p>
</header>

<div class="content">           <!-- Content block (repeatable) -->
  <h2>SECTION TITLE</h2>        <!-- Primary heading -->
  <h3>Subsection</h3>           <!-- Optional subheading -->
  <p>Body content...</p>        <!-- Paragraphs -->
  <ul><li>List items...</li></ul> <!-- Lists -->
</div>
```

### Content Patterns

**About Page:**
- Company launch/history
- Founder background
- Mission statement
- Core values

**Services Page:**
- Overview paragraph
- Three main service categories (vendors, customers, logistics partners)
- Industries served
- Each service in its own `.content` block

**Why DBCA Page:**
- Value proposition
- Competitive advantages
- Proof points
- Core differentiators

**Contact Page:**
- Call-to-action intro
- Contact details (structured)
- Multiple contact methods
- Location information

### Key Business Data

**Contact Information:**
- Email: donis@dbcaglobal.com (primary contact method)
- WhatsApp: Available for international messaging
- WeChat: Available for international messaging
- Location: Austin, TX
- Note: Do not display phone numbers directly on the website

**Taglines:**
- Primary: "Smaller world, bigger business, one contact."
- Alternative: "Built on Trust. Driven by Results."
- Alternative: "Powering the Future of American Supply Chains."

**Key Services:**
1. For Vendors - U.S. market entry, warehousing, compliance
2. For Customers - Vetted suppliers, competitive pricing, transparency
3. For Logistics Partners - Consistent volumes, clear terms

## Styling Guidelines

### Page-Specific CSS Overrides
All content pages (not homepage) use these overrides:

```css
/* Disable theme animations, enable scrolling */
body { overflow: auto !important; }
#wrapper { position: relative !important; opacity: 1 !important; animation: none !important; }
#overlay { opacity: 1 !important; animation: none !important; }
#header { animation: none !important; opacity: 1 !important; }
#footer { animation: none !important; background-image: none !important; }

/* Content styling */
.content { 
  background: rgba(255,255,255,0.85); 
  padding: 2rem; 
  border-radius: 8px; 
  text-align: left; 
}
.content h2 { 
  color: #2a2a2a; 
  font-size: 2rem; 
  font-weight: 700; 
}
.content h3 { 
  color: #2a2a2a; 
  font-size: 1.5rem; 
  font-weight: 600; 
}
.content p { 
  margin-bottom: 1.25rem; 
}
.content ul, .content ol { 
  color: #333; 
  line-height: 1.8; 
  margin-left: 1.5rem; 
}
.content li { 
  color: #333; 
  margin: 0.5rem 0; 
}
.content li::marker { 
  color: #333; 
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
  #main { padding: 2rem 1rem !important; }
  #header h1 img { height: 80px !important; }
  .content { padding: 1.5rem !important; }
  .content h2 { font-size: 1.5rem !important; }
  .content h3 { font-size: 1.25rem !important; }
}
@media screen and (max-width: 480px) {
  #main { padding: 1.5rem 0.75rem !important; }
  #header h1 img { height: 60px !important; }
  #header .nav-links { display: flex; flex-wrap: wrap; justify-content: center; }
  .content { padding: 1rem !important; }
  .content h2 { font-size: 1.25rem !important; }
  .content h3 { font-size: 1.1rem !important; }
}
```

### Homepage Specifics
- Faster animations (0.6s vs 3s)
- Text positioned higher (margin-top: -30vh) to stay over blue background
- White navigation links for contrast

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3010)
npm start            # Same as dev
```

## Deployment

1. **Git push to main branch**
2. Cloudflare Pages auto-deploys
3. Clean URLs work automatically via directory structure
4. `_redirects` handles legacy .html URLs
5. `_headers` applies security headers

## Content Updates

When updating content:

1. **Maintain consistent structure** - use same HTML patterns
2. **Keep headers hierarchical** - h1 → h2 → h3
3. **Use `.content` blocks** - for each major section
4. **Update meta descriptions** - when page content changes significantly
5. **Test on mobile** - responsive design is critical
6. **Check contrast** - ensure readability on animated background

## AI Maintenance Guidelines

When working on this project:

1. **Never change the theme CSS** - only add inline overrides
2. **Keep the animated background** - it's a core design element
3. **Maintain clean URLs** - directory/index.html structure
4. **Preserve the navigation** - identical across all pages
5. **Don't add JavaScript** - keep it static and fast
6. **Follow the content patterns** - for consistency
7. **Test locally** - use `npm run dev` before committing
8. **Preserve SEO elements** - titles, descriptions, Open Graph tags

## Reference Data Source

All content is sourced from `info.txt` which contains:
- Taglines and messaging
- Company launch announcement
- Service descriptions
- Founder information
- Contact details

When adding content, refer to this file for approved messaging and facts.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design with inline media queries
- No IE11 support needed
- Progressive enhancement approach

### Mobile Responsive Breakpoints

**Tablet (768px and below):**
- Logo: 80px (internal pages) / 180px (homepage)
- Reduced padding and margins
- Smaller font sizes for headers
- Navigation links: 0.5rem spacing

**Mobile (480px and below):**
- Logo: 60px (internal pages) / 120px (homepage)
- Minimal padding for maximum content space
- Navigation wraps to multiple lines
- Contact cards stack vertically
- Further reduced font sizes

**Why not use Tailwind or CSS frameworks?**
- Site is only 5 pages with minimal complexity
- Tailwind adds 3MB+ and requires build process
- Inline media queries are simple, maintainable, and performant
- Keeps the site static and framework-free

---

**Last Updated:** October 2025  
**Maintained By:** AI Coding Assistants  
**For Questions:** Refer to info.txt or contact information in the site

