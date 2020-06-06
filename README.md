# Svelte Udemy training

This repo contains assignments and demos based on [Svelte Udemy training from Maximilian](https://www.udemy.com/course/sveltejs-the-complete-guide/).

I addition I made some experimentation with sapper, routify and SMUI. These are in the demos folder.

This repo uses lerna for hoising node_modules and dependency packages. There were problems with SMUI when packages are hoisted. The problem seem to come from rollup and use of (relative paths in) scss in material components.
