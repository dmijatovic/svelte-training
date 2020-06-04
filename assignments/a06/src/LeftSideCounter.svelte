<script>
	import Button from "./Button.svelte";
	import leftSideStore from "./leftSideStore";
	const { action, dispatch } = leftSideStore;

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
	function asyncChange() {
	  dispatch({
	    type: action.ASYNC,
	    payload: {
	      delay: 1000,
	      value: 3
	    }
	  });
	}
</script>

<section class={$leftSideStore.className}>
	<h2>Left side counter {$leftSideStore.value}</h2>
	<button class="warn" on:click={incrementCount}>Increment</button>
	<button on:click={decrementCount}>Decrement</button>
	<button on:click={asyncChange} class={$leftSideStore.className}>
		Async change
	</button>
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
	.increment {
	  background-color: green;
	}
	.decrement {
	  background-color: red;
	}
	.wait {
	  cursor: wait;
	}
</style>
