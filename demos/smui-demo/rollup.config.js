import svelte from 'rollup-plugin-svelte';
import resolveOld from 'rollup-plugin-node-resolve';
import resolve from '@rollup/plugin-node-resolve';
import commonjsOld from 'rollup-plugin-commonjs';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'app'
  },
  plugins: [
    copy({
      copyOnce: true,
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        // { src: ['src/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
        { src: 'src/static/**/*', dest: 'dist' }
      ]
    }),
    svelte({
      emitCss: true
    }),
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),
    postcss({
      extract: true,
      // minimize: true,
      sourceMap: true,
      use: [
        ['sass', {
          includePaths: [
            './theme',
            './node_modules'
          ]
        }]
      ]
    }),
    // Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),
		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
