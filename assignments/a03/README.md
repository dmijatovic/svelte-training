# Demo 3

Communication between components.

## Event forwarding

Events don't propagate by default to the parent component.

To propagate register listen

```html
<!--Child component propagate click event ONE LEVEL UP!!! -->
<button on:click>Buy</button>

<!-- Parent component--->
<script>
  import Child from "./Child";
</script>

<Child on:click={()=>console.log("clicked on child")} />
```

## Forwarding custom events

This is possible using createEventDispatcher from svelte.

```html
<script>
  import { createEventDispatcher } from "svelte";

  function dispatchEvent(key) {
    dispatch(key, {
      title,
      subtitle,
    });
  }
</script>

<button on:click="{()=>dispatchEvent('add-to-cart')}">Buy</button>
```

## Slots

The slots are analogue to web components standard. These are also used in Vue templating. See Modal component for slotting.

`Slot without name is treated as default slot!`

## Passing value from slot back to parent

It is possible to pass the data out of the slot to parent. Beside custom events we can use `let` directive.

See training for more info.
