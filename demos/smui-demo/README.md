# SMUI Rollup Example

This SMUI demo is based on the original example from [Hunter Perin](https://github.com/hperrin/svelte-material-ui).

`NOTE! This repo does not work with LERNA hoisting the dependencies.`

## Changes

The following changes were made during experiementation.

```bash
# extend rollup plugins
npm i -D rollup-plugin-livereload rollup-plugin-terser sirv-cli  npm-run-all rollup-plugin-copy rollup-plugin-serve
# eslint plugin
npm eslint eslint-plugin-svelte3
```

### Upgrade to rollup 2

```bash
# upgraded based on npm advice
npm i -D @rollup/plugin-commonjs @rollup/plugin-node-resolve

```

An example project implementing [Svelte Material UI](https://github.com/hperrin/svelte-material-ui) with [Rollup](https://github.com/rollup/rollup).

## License

Copyright 2019 Hunter Perrin

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
