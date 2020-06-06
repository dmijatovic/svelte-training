# Svelte material ui (SMUI)

This repo uses svelte material libray. The setup is custom but is [based on this repo](https://github.com/hperrin/smui-example-webpack)

## Dependencies

```bash
# 1. basic svelte and webpack
npm i -D svelte webpack webpack-cli webpack-dev-server svelte-loader

# 2. install webpack util plugins (file-loader is required by url-loader)
npm i -D html-webpack-plugin copy-webpack-plugin url-loader file-loader

# 3. css and scss webpack support (do not use node-sass it has bug)
npm i -D sass sass-loader css-loader mini-css-extract-plugin postcss-loader

# webpack production plugins (minimizers)
npm i -D clean-webpack-plugin uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin webpack-bundle-analyzer

# 6a. ESLint?!?
npm i -D eslint eslint-loader

# material ui SMUI
npm i -D svelte-material-ui @material/typography

```

```json
{
  "devDependencies": {
    "@material/typography": "^3.1.0",
    "@smui/button": "^1.0.0-beta.20",
    "css-loader": "^3.4.2",
    "mini-css-extract-plugin": "^0.8.2",
    "node-sass": "^4.13.1",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^8.0.2",
    "serve": "^11.3.0",
    "style-loader": "^1.1.3",
    "svelte": "^3.18.1",
    "svelte-loader": "^2.13.6",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
}
```

## Webpack config

For svelte we import svelte loader. By default css is added to header as a tag. We can emit it to a css file by adjusting definitions.

```js
//...rest of webpack
{
  test: /\.(html|svelte)$/,
  use: {
    loader: 'svelte-loader',
    options: {
      emitCss: true,
    },
  },
}
//...
```

### SASS loaders and material scss

I have not managed to have this setup working. First error appeared when importing typograhy and material theme scss files. There are errors in the paths. I did adjusted webpack config and used sass instead of node-sass. This solved first @import errors. However after using the components from SMUI new error appeared.
