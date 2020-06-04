<script>
  import Button from "./Button.svelte";
  import LeftSideCounter from "./LeftSideCounter.svelte";
  import RightSideCounter from "./RightSideCounter.svelte";
</script>

<main>
	<h1>Hello CodeSandbox</h1>
	<h2>Start editing to see some magic happen</h2>
	<Button />

  <p>
  The counter examples below use svelte store which is adapted for redux users.
  There is a reducer function that does all mutations in the store. There is also
  a async way of increment that works.
  </p>

  <article>
    <LeftSideCounter />
    <RightSideCounter />
  </article>
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin: 1rem;
  }
  p {
    text-align: left;
    padding: 1rem;
  }
</style>
