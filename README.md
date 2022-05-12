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

Add `git18n` package that extracts and manages all your translations: `yarn add -D git18n`. Get the API key from https://git18n.com site and add it to your `.env` file.

## Additional nicities

Omit the `.locales` folder from git by adding it to `.gitignore`:

```
# Omit .locales folder
.locales
```
