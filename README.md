# DBCA Global Website

Static website for DBCA Global, LLC - a procurement and logistics consultancy.

## Features

- Clean URLs (no `.html` extensions)
- Modern, responsive design using HTML5 UP Aerial theme
- SEO optimized with meta tags
- Multi-page structure with navigation

## Pages

- **Home** (`/`) - Landing page with tagline
- **About** (`/about`) - Company background and founder information
- **Services** (`/services`) - Detailed service offerings for vendors, customers, and logistics partners
- **Why DBCA** (`/why-dbca`) - Value proposition and competitive advantages
- **Contact** (`/contact`) - Contact information and methods

## Development

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

This will start a local server at `http://localhost:3010` with clean URLs enabled.

### Project Structure

```
/
├── index.html           # Homepage
├── about/
│   └── index.html      # About page (accessible at /about)
├── services/
│   └── index.html      # Services page (accessible at /services)
├── why-dbca/
│   └── index.html      # Why DBCA page (accessible at /why-dbca)
├── contact/
│   └── index.html      # Contact page (accessible at /contact)
└── assets/
    └── css/            # Stylesheets
```

## Deployment

This is a static site and can be deployed to:
- **Netlify** - Simply drag and drop or connect to GitHub
- **GitHub Pages** - Enable in repository settings
- **Vercel** - Connect repository
- **Any static host** - Upload files via FTP/SFTP

The clean URL structure (directories with `index.html` files) works on all static hosting platforms without additional configuration.

## Content

Site content is based on DBCA Global's mission to provide:
- Procurement and logistics services
- U.S. market entry for international vendors
- Transparent supply chain management
- Built on 20 years of industry experience

## License

Copyright © DBCA Global LLC

