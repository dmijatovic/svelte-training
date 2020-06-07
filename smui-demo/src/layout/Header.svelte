<script>
  import {createEventDispatcher} from 'svelte';
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  export let appTitle=""

  let prominent = false;
  let dense = false;
  let secondaryColor = false;

  const dispatch = createEventDispatcher()

  function dispatchMenu(){
    dispatch("toggleMenu",{
      data:"This is test data"
    })
  }
</script>

<TopAppBar
  variant="fixed"
  {prominent}
  {dense}
  color={secondaryColor ? 'secondary' : 'primary'}
  >
  <Row>
    <Section>
      <IconButton class="material-icons"
        on:click={dispatchMenu}>menu</IconButton>
      <Title>{appTitle}</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons"
        aria-label="Download">file_download</IconButton>
      <IconButton class="material-icons"
        aria-label="Print this page">print</IconButton>
      <IconButton class="material-icons"
        aria-label="Bookmark this page">bookmark</IconButton>
    </Section>
  </Row>
</TopAppBar>

<style>

</style>