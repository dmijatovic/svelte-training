<script>
  import {onMount, afterUpdate} from 'svelte'
  //SMUI
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  // import H6 from '@smui/common/H6.svelte';
  import {createEventDispatcher} from 'svelte'
  // STORES
  import routesStore from '../store/routes.js'
  // PROPS
  export let open = false;
  export let appTitle="App title"
  export let appSubtitle="This is subtitle"
  export let routes=[]
  // INTERNAL
  const dispatch = createEventDispatcher()
  // for active route
  let pathname = "/";
  // dispatch navigation action
  function navigateTo(value) {
    dispatch('navigateTo',{
      path: value
    })
  }
  onMount(()=>{
    //update pathname
    pathname = window.location.pathname
    // console.group("Drawer.onMount()")
    // console.log("routes...", routes)
    // console.log("pathname...", pathname)
    // console.log("window.location...", window.location)
    // console.groupEnd()
  })
  afterUpdate(()=>{
    //update pathname
    pathname = window.location.pathname
    // console.group("Drawer.afterUpdate()")
    // console.log("routes...", routes)
    // console.log("pathname...", pathname)
    // console.log("window.location...", window.location)
    // console.groupEnd()
  })
</script>
<Drawer variant="dismissible" bind:open={open}>
  <Header>
    <Title>{appTitle}</Title>
    <Subtitle>{appSubtitle}</Subtitle>
  </Header>
  <Content>
    <List>
      {#each routes as route (route.path)}
        {#if route.drawer}
          <Item
            href="javascript:void(0)"
            on:click={() => navigateTo(route.path)}
            activated={pathname===route.path}
            >
            <Text>{route.label}</Text>
          </Item>
        {/if}
      {/each}
    </List>
  </Content>
</Drawer>
