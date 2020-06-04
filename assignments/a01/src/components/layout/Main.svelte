<script>
  export let children
</script>
<main>
  {#if children}
    <section>
      These are passed children
      {children}
    </section>
  {/if}
  <slot>
    Here comes slotted component
  </slot>
</main>