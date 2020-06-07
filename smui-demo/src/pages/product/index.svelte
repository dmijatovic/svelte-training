<script>
  import {Router, Route, link} from 'svelte-routing'
  import routerStore from '../../store/productRoutes.js'
</script>

<h1>Products overview svelte app</h1>

<Router url="/product" basepath="/product">
{#each $routerStore as route,pos}
  {#if route.params}
    <a href="{route.path.replace(":id","7")}" use:link>{route.label}</a>
    <Route path={route.path} let:params component={route.component}/>
  {:else}
    <a href="{route.path}" use:link>{route.label}</a>
    <Route path={route.path} component={route.component}/>
  {/if}
{/each}
</Router>