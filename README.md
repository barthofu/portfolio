# Personal Portfolio

This is my personal portfolio website, built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/), and deployed as a fully static site. It showcases my projects, skills, and contact information.

## Features

- ⚡ Blazing-fast static site generation (SSG)
- 📦 Built with TypeScript & modern web stack
- 🎨 Fully responsive and accessible design
- 🧩 Modular and clean component-based architecture
- 🌍 SEO-friendly and optimized for performance

## Technologies Used

- [Next.js](https://nextjs.org/) – React Framework with Static Generation
- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript
- [Chakra UI](https://chakra-ui.com/) – UI Component Library
- [React Icons](https://react-icons.github.io/react-icons/) – Icons
- [Framer Motion](https://www.framer.com/motion/) – Smooth animations

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later)
- pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/barthofu/portfolio.git
cd portfolio

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev

# Open your browser and navigate to http://localhost:3000
```

### Build

```bash
pnpm build
pnpm export

# The static files will be generated in the `./out` directory
```

## Deployment

The production deployment is handled by [Cloudflare Pages](https://pages.cloudflare.com/), which automatically builds and deploys the site whenever changes are pushed to the `main` branch. The static files are served from the `./out` directory.

## License

[MIT License](./LICENSE)

Copyright (c) barthofu
