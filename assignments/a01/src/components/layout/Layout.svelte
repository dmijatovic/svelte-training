<script>
  import Header from './Header.svelte'
  import MainBody from './Main.svelte'
  import Footer from './Footer.svelte'
</script>


<Header></Header>

<MainBody>
  <slot></slot>
</MainBody>

<Footer></Footer>