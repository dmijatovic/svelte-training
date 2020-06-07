<script>
  import {onMount} from 'svelte'
  export let id

  onMount(()=>{
    console.group("ProductEdit.onMount()")
    console.log("params...id...", id)
    console.log("window.location...", window.location)
    console.groupEnd()
  })

</script>
<h3>Edit product {id}</h3>