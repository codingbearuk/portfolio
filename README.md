# Kamil Pieczyk Portfolio page 👱🏻‍♂️

### An opinionated starter library for creating React applications with Gatsby and TypeScript.

### [View Demo](https://gatsby-starter-typescript-deluxe.netlify.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/741aaab2-8497-431c-8b59-7f675856de77/deploy-status)](https://app.netlify.com/sites/gatsby-starter-typescript-deluxe/deploys)

Used technologies:

- **TypeScript**
- **React**
- **Redux** to menage global state.
- **Styled-Components** for all the styles.
- **GSAP** for awesome animations.
- **gatsby-image and gatsby-transformer-sharp** for optimized images.
- **gatsby-plugin-manifest / SEO component** for an SEO-friendly PWA.
- **ESLint with an emphasis on functional patterns (with Prettier and TypeScript integration)** to make my code look its best.

## Installation

You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally.

The `npx` way:

```sh
npx gatsby new my-site https://github.com/gojutin/gatsby-starter-typescript-deluxe
```

or the global way:

```sh
npm i -g gatsby-cli
gatsby new my-site https://github.com/gojutin/gatsby-starter-typescript-deluxe
```

## Usage

To start the development servers:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

1. [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

2. [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

### Available Scripts

| Script            | Description                                                                         |
| ----------------- | :---------------------------------------------------------------------------------- |
| `develop`         | Start the development server with hot module reloading.                             |
| `dev`             | Alias for `develop`.                                                                |
| `format`          | Format your code with Prettier.                                                     |
| `clean`           | Delete the `.cache` and `public` directories.                                       |
| `test`            | Run your Jest tests once.                                                           |
| `test:watch`      | Run your Jest tests in watch mode.                                                  |
| `lint`            | Lint your code with ESLint.                                                         |
| `lint:watch`      | Lint your code with ESLint in watch mode.                                           |
| `lint:fix`        | Lint your code with ESLint and attempt to fix linting issues.                       |
| `serve`           | Serve the production build of your site for testing.                                |
| `build`           | Compile your application and make it ready for deployment                           |
| `storybook`       | Starts Storybook.                                                                   |
| `build-storybook` | Compiles your stories and makes them ready for deployment.                          |
| `update`          | Updates the package.json to the latest dependency versions using npm-check-updates. |

## Styling

This library is pre-configured with [styled-components](https://www.styled-components.com/).

#### Global Styles

Global styles are defined in the `src/styles/global-styles.tsx` file using the `createGlobalStyle` function provided by styled-components. The global styles are injected in the `Layout` component via the component that is provided from the `createGlobalStyle` function.

The global style also includes the styles from [css-modern-reset](https://github.com/hankchizljaw/modern-css-reset), which aims to provide a sensible reset of browser styles.

#### Theme

You can define your theme styles in the `/src/styles/theme` file. The theme will be available in any styled-component via `props.theme` and to any other component via the `useTheme` hook.

## Deployment

Lint your files and fix all linting issues.

```sh
npm run lint
```

Run your test suite and fix any broken tests.

```sh
npm run test
```

Compile a production build to the `/public` directory.

```sh
npm run build
```
