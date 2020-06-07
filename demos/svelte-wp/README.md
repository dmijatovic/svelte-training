# Svelte webpack basic setup

This is basic svelte setup with webpack

## Install

```bash
# 1. basic svelte and webpack
npm i -D svelte webpack webpack-cli webpack-dev-server svelte-loader
# 2. install webpack util plugins (file-loader is required by url-loader)
npm i -D html-webpack-plugin copy-webpack-plugin url-loader file-loader
# 3. css and scss webpack support (do not use node-sass it has bug)
npm i -D sass sass-loader css-loader mini-css-extract-plugin postcss-loader
# webpack production plugins (minimizers)
npm i -D clean-webpack-plugin uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin webpack-bundle-analyzer

```

## Material components for web

These are simply JS/CSS material components. [The start guide is here](https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md).

[Demo website is here](https://material-components.github.io/material-components-web-catalog/#/).

I think this is easiest way to include material design with Svelte or Sapper. I think similair can be done with NextJS?!?
