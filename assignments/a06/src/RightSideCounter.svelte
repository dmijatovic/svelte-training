<script>
	import Button from "./Button.svelte";
	import rightSideStore from "./rightSideStore";
	const { action, dispatch } = rightSideStore;

	function incrementCount() {
	  dispatch({
	    type: action.INCREMENT,
	    payload: 1
	  });
	}
	function decrementCount() {
	  dispatch({
	    type: action.DECREMENT,
	    payload: 2
	  });
	}
</script>

<section>
	<h2>Right side counter {$rightSideStore}</h2>
	<button class="warn" on:click={incrementCount}>Increment</button>
	<button on:click={decrementCount}>Decrement</button>
</section>

<style>
	button {
	  padding: 0.75rem;
	  border: none;
	  border-radius: 0.25rem;
	  overflow: hidden;
	}
	button.warn {
	  padding: 0.75rem;
	  background: orange;
	  border: none;
	  border-radius: 0.25rem;
	  overflow: hidden;
	}
	section {
	  flex: 1;
	  padding: 1rem;
	  border: 1px solid lightgrey;
	  border-radius: 0.25rem;
	}
</style>
