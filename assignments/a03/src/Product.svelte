<script>
  import {createEventDispatcher} from 'svelte'
  export let title
  export let subtitle
  export let desc

  const dispatch = createEventDispatcher()

  function addToCart(){
    dispatch('add-to-cart',{
      title,
      subtitle
    })
  }

  function dispatchEvent(key){
    dispatch(key,{
      title,
      subtitle
    })
  }

</script>
<section>
  <h2>{title}</h2>
  <h3>{subtitle}</h3>
  <p>{desc}</p>
</section>
<nav>
  <button on:click={()=>dispatchEvent('add-to-cart')}>Buy</button>
  <button on:click={()=>dispatchEvent('for-selling')}>Sell</button>
</nav>

