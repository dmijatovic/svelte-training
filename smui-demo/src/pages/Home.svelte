<svelte:head>
  <title>Home page</title>
</svelte:head>
<script>
  import Button, {Label, Icon} from '@smui/button';

  let clicked = 0;
</script>

<h1>Home svelte app</h1>

<section>
  <Button on:click={() => clicked++}>
  <Icon class="material-icons">thumb_up</Icon>
  <Label>Click Me</Label>
  </Button>
  <p class="mdc-typography--body1">
    {#if clicked}
      You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}.
    {:else}
      <span class="grayed">You haven't clicked the button. Changes</span>
    {/if}
  </p>
</section>

<style>
  section{
    padding: 1rem 0rem;
  }
  .grayed {
    opacity: .6;
  }
</style>