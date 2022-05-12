# NextJS integration with git18n

## Setup

Add `react-intl` and the babel plugin that allows using various functions and components without the manually set id: `yarn add react-intl babel-plugin-formatjs`. Add `.babelrc` to use the new `babel-plugin-formatjs`:

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "formatjs",
      {
        "idInterpolationPattern": "[sha512:contenthash:base64:6]"
      }
    ]
  ]
}
```

Add `git18n` package that extracts and manages all your translations: `yarn add -D git18n`. Get the `GIT18N_SECRET_PROJECT_KEY` key from https://git18n.com site and add it to the `.env` file.

Add `"translate": "git18n --files '(pages|components)/**/*.{js,jsx,ts,tsx}'"` the `scripts` section in `package.json` file and run `yarn translate` to add text that requires translation.

## Additional niceties

Omit the `.locales` folder from git by adding it to `.gitignore`:

```
# Omit .locales folder
.locales
```
