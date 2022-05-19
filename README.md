# NextJS integration with git18n

## Dependencies

Install localization library:

```js
yarn add react-intl babel-plugin-formatjs // or npm install react-intl babel-plugin-formatjs
```

Install the package for managing translations:

```js
yarn add -D git18n // or npm install git18n
```

## Config

To be able to use `react-intl` without having to add `ids`, add to `.babelrc`:

```json
{
  "presets": ["next/babel"],
  "plugins": ["formatjs"]
}
```

## Usage

Add `GIT18N_SECRET_PROJECT_KEY` as enviromental variable or in `.env` with the repository key you get on https://git18n.com.

Add translation script to `package.json`:

```json
"scripts": {
  "translate": "git18n --files '(pages|components)/**/*.{js,jsx,ts,tsx}'"
}
```

When you run `yarn translate`, you retrieve all translations from server and send any new translations from your code to server. `yarn translate` should be run before building for production and after whenever need to add new strings to be translated.

Example, the build command could look like:

```json
"scripts": {
  "build": "yarn translate && next build && next export",
}
```

## Additional niceties

Omit the `.locales` folder from git by adding it to `.gitignore`:

```
# Omit .locales folder
.locales
```

## Deployment

Pulls latest translations and build:

Vercel deployment: https://next-app-git18n.vercel.app/
Render deployment: https://next-app-git18n.onrender.com/
