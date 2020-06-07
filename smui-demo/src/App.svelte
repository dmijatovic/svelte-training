
<script>
  import {onDestroy} from 'svelte'
  import { Router, Route, navigate } from "svelte-routing";

  // STORES
  import headerStore from './store/header.js'
  import routerStore from './store/routes.js'
  // COMPONENTS
  import Header from './layout/Header.svelte'
  import Drawer from './layout/Drawer.svelte'
  import MainBody from './layout/Main.svelte'
  // VARIABLES
  let openDrawer=false
  let appTitle=""
  let appSubtitle=""
  let appRoutes=[]
  // FUNCTIONS
  function onToggleMenu(action){
    // debugger
    const {type,detail} = action
    // console.log("handleDispatch...", type)
    openDrawer = !openDrawer
  }
  function navigateTo(action){
    const {detail} = action
    // console.log("navigateTo...", detail.path)
    navigate(detail.path)
    openDrawer = false
  }
  // STORE SUBSRIPTIONS
  const hSub = headerStore.subscribe((data)=>{
    console.log("Header data...", data)
    appTitle = data.title
    appSubtitle = data.subtitle
  })
  const rSub = routerStore.subscribe((routes)=>{
    console.log("App routes...", routes)
    appRoutes = routes
  })
  onDestroy(()=>{
    hSub.unsubscribe()
    rSub.unsubscribe()
  })
</script>

<Header
  {appTitle}
  on:toggleMenu={onToggleMenu}
/>

<Drawer
  {appTitle}
  {appSubtitle}
  routes={appRoutes}
  open={openDrawer}
  on:navigateTo={navigateTo}
  />
<MainBody>
  <Router url="/">
    {#each appRoutes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </Router>
</MainBody>

<style>

</style>