# Material UI Svelte demo

This demo test MUI components lib [svelte-material-ui](https://github.com/hperrin/svelte-material-ui).

`This version does not work correctly in an monorepo with lerna hositing. The problem seem to be with rollup and material scss imports (as far as I can trace). I tried installing the latest packages which seem to worsten the problem?!? I decided to setup webpack version based on example repo (see smui folder).`

## Installation

```bash
# create project folder with svelte basic scaffold
npx degit sveltejs/template <projectname>
# add svelte material ui lib
# complete install did not worked
npm install --save-dev @smui/button
# add material dependecies
npm i -D node-sass rollup-plugin-postcss @material/typography
# install latest
npm i -D @material/typography@latest @rollup/plugin-commonjs@latest\
  @rollup/plugin-node-resolve@latest node-sass@latest rollup@latest\
  rollup-plugin-livereload@latest rollup-plugin-postcss@latest\
  rollup-plugin-svelte@latest rollup-plugin-terser@latest svelte@latest\
  svelte-material-ui@latest

```

In addition scss pre-processor needs to be setup and fonts need to be included in the header of the file. There is a [rollup demo setup](https://github.com/hperrin/smui-example-rollup).

`NOTE! There were some problems with lerna hoisting the node_modules. The exports of SCSS file would not work?!?`

On the [SMUI github](https://github.com/hperrin/svelte-material-ui) there is also link to demo with webpack.

## Official documentation

_Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)_

---

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
