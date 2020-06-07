<svelte:head>
  <title>Svelte app with webpack</title>
  <link rel="shortcut icon" href="img/favicon.png" type="image/png">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
  <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
  <script src="/js/dv4loaders.cjs.js"></script>

</svelte:head>
<script>
  import {onMount} from 'svelte'
  console.log("It works")

  let count=0

</script>
<section>
  <h1>Svelte app with webpack and material for web!</h1>
</section>
<section>
  <div class="counter">{count}</div>
  <button class="mdc-button foo-button" on:click={()=>count++}>
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">Increase</span>
  </button>
  <button class="mdc-button foo-button" on:click={()=>count--}>
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">Decrese</span>
  </button>
</section>

<section>
  <button class="mdc-icon-button"
    aria-label="Add to favorites"
    aria-pressed="false"
    data-mdc-auto-init="MDCIconButtonToggle"
    on:click={()=>alert('I love you too :-)')}>
    <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
    <i class="material-icons mdc-icon-button__icon">favorite_border</i>
  </button>
</section>

{#if count < 5}
<section>
  <dv4-loader-square-jelly></dv4-loader-square-jelly>
</section>
{/if}

<style>
  h1{
    color: blueviolet;
  }
  .counter{
    padding: 1.5rem;
    font-size: 4rem;
  }
  section{
    padding: 2rem;
    text-align:center;
  }
</style>
