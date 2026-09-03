# Odin Showcase

A showcase website for projects built while following [The Odin Project](https://www.theodinproject.com) curriculum. Built with React, TypeScript, and Vite.

## Getting Started

```bash
npm install
npm run dev
```

Run the dev server and open the printed local URL.

## Scripts

- `npm run dev` – start the development server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build locally
- `npm run lint` – run the linter
- `npm run deploy` – build and push `dist` to the `gh-pages` branch

## Assets

Place assets in the `public/assets` folder:

```
public/assets/logo.png           Site logo
public/assets/profile.jpg         Hero avatar
public/assets/projects/*.png      Project screenshots
```

The exact paths are defined as invariants in `src/constants.ts` and referenced throughout components. Add new projects by appending entries to the `PROJECTS` array there (also update `Project` interface if adding fields).

## Deployment

The site is deployed to GitHub Pages from a `gh-pages` branch that contains
the production build output (the `dist` folder). Run:

```bash
npm run deploy
```

This runs the build (`npm run build`) and pushes `dist` to the `gh-pages`
branch, which GitHub Pages serves. The live site is served at:

```
https://Sid2169.github.io/odin-showcase/
```