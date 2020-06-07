<script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  // import H6 from '@smui/common/H6.svelte';
  import {createEventDispatcher} from 'svelte'

  export let open = false;
  export let appTitle="App title"
  export let appSubtitle="This is subtitle"
  // export let routes=[]

  const dispatch = createEventDispatcher()

  let clicked = 'nothing yet';
  // let myDrawer;
  let active = 'Gray Kittens';

  function setActive(value) {
    active = value;
    // open = false;
    dispatch('navigateTo',{
      href:"/" + value
    })
  }
</script>
<Drawer variant="dismissible" bind:open={open}>
  <Header>
    <Title>{appTitle}</Title>
    <Subtitle>{appSubtitle}</Subtitle>
  </Header>
  <Content>
    <List>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive('Gray Kittens')}
        activated={active === 'Gray Kittens'}>
        <Text>Gray Kittens</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive('A Space Rocket')}
        activated={active === 'A Space Rocket'}>
        <Text>A Space Rocket</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive('100 Pounds of Gravel')}
        activated={active === '100 Pounds of Gravel'}>
        <Text>100 Pounds of Gravel</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive('All of the Shrimp')}
        activated={active === 'All of the Shrimp'}>
        <Text>All of the Shrimp</Text>
      </Item>
      <Item
        href="javascript:void(0)"
        on:click={() => setActive('A Planet with a Mall')}
        activated={active === 'A Planet with a Mall'}>
        <Text>A Planet with a Mall</Text>
      </Item>
    </List>
  </Content>
</Drawer>

<!-- <AppContent class="app-content">
  <main class="main-content">
    <Button on:click={() => myDrawerOpen = !myDrawerOpen}><Label>Toggle Drawer</Label></Button>
    <br />
    <pre class="status">Active: {active}</pre>
  </main>
</AppContent> -->