
<script>
  import Button, {Label, Icon} from '@smui/button';
  import Header from './layout/Header.svelte'
  import Drawer from './layout/Drawer.svelte'
  import MainBody from './layout/Main.svelte'

  import headerStore from './store/header.js'

  let clicked = 0;
  let openDrawer=false
  let appTitle=""
  let appSubtitle=""

  function handleDispatch(action){
    const {type,detail} = action
    console.log("handleDispatch...", type)
    // debugger
    openDrawer = !openDrawer
  }

  function navigateTo(action){
    const {type,detail} = action
    console.log("navigateTo...", detail)
    openDrawer = false
  }

  headerStore.subscribe((data)=>{
    console.log("Header data...", data)
    appTitle = data.title
    appSubtitle = data.subtitle
  })

</script>

<Header
  {appTitle}
  on:toggleMenu={handleDispatch}
/>

<Drawer
  {appTitle}
  {appSubtitle}
  open={openDrawer}
  on:navigateTo={navigateTo}/>
<MainBody>
  <Button on:click={() => clicked++}>
    <Icon class="material-icons">thumb_up</Icon>
    <Label>Click Me</Label>
  </Button>
  <p class="mdc-typography--body1">
    {#if clicked}
      You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}.
    {:else}
      <span class="grayed">You haven't clicked the button. Changes</span>
    {/if}
  </p>
</MainBody>

<style>
  .grayed {
    opacity: .6;
  }
</style>