# Aivio Digital

A modern, fast, and fully bilingual (English & Chinese) website built with:

- **Astro** - The modern static site builder
- **TailwindCSS** - Utility-first CSS framework
- **i18n Support** - English and Chinese language support

## Features

✨ **Lightning Fast** - Built with Astro for optimal performance
🌐 **Multi-Language** - Full support for English (en) and Chinese (zh)
🎨 **Modern Design** - Styled with TailwindCSS
📱 **Responsive** - Mobile-first design approach
⚙️ **Easy to Customize** - Well-structured and organized code

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── Header.astro
│   └── Footer.astro
├── layouts/          # Layout components
│   └── Layout.astro
├── pages/            # Page routes
│   ├── index.astro   # English homepage
│   └── zh.astro      # Chinese homepage
├── i18n/             # Internationalization
│   ├── en.ts         # English translations
│   ├── zh.ts         # Chinese translations
│   └── index.ts      # i18n utilities
└── styles/           # Global styles
    └── globals.css
```

## Language Switching

Language preference is stored in `localStorage` and persists across sessions. Users can switch between English and Chinese using the language selector in the header.

- English: `/`
- Chinese: `/zh`

## Customization

### Add New Pages

Create new `.astro` files in `src/pages/`:

```astro
---
import Layout from '../layouts/Layout.astro';

const title = 'Page Title';
---

<Layout title={title}>
  {/* Your content */}
</Layout>
```

### Add Translations

1. Update `src/i18n/en.ts` for English
2. Update `src/i18n/zh.ts` for Chinese
3. Import and use translations in your components

### Customize TailwindCSS

Edit `tailwind.config.mjs` to customize colors, fonts, and other design tokens.

## License

MIT