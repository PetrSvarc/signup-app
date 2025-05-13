# Signup App

A modern web application built with Nuxt 3, Vue 3, and TailwindCSS. This application provides a user-friendly interface for signup functionality with a clean and responsive design.

## Features

- Modern Vue 3 + Nuxt 3 stack
- TailwindCSS for styling
- ESLint for code quality
- TypeScript support
- Vue Router for navigation
- VueUse for composable utilities
- [ProVet Cloud Design System](https://provetcloud.design/) integration for consistent UI components and design tokens

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- Yarn or npm package manager

## Setup

1. Clone the repository:
```bash
git clone [your-repository-url]
cd signup-app
```

2. Install dependencies:
```bash
# Using yarn (recommended)
yarn install

# Using npm
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
# Using yarn
yarn dev

# Using npm
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

Build the application for production:

```bash
# Using yarn
yarn build

# Using npm
npm run build
```

Preview the production build locally:

```bash
# Using yarn
yarn preview

# Using npm
npm run preview
```

## Code Quality

The project uses ESLint for code quality. You can run the following commands:

```bash
# Lint code
yarn lint

# Fix linting issues automatically
yarn lint:fix
```

## Project Structure

```
├── components/     # Vue components
├── composables/    # Vue composables
├── layouts/        # Page layouts
├── pages/         # Application pages
├── plugins/       # Nuxt plugins
├── public/        # Static assets
├── server/        # Server-side code
└── nuxt.config.ts # Nuxt configuration
```

## Dependencies

### Main Dependencies
- Nuxt 3
- Vue 3
- Vue Router
- TailwindCSS
- VueUse
- [ProVet Cloud Design System](https://provetcloud.design/) - A comprehensive design system providing UI components, design tokens, and CSS utilities

### Development Dependencies
- ESLint
- TypeScript
- Nuxt DevTools

## License

This project is licensed under the terms of the license included in the repository.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
