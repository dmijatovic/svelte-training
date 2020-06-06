<svelte:head>
  <title>Svelte app test</title>
  <link rel="shortcut icon" href="img/favicon.png" type="image/png">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
</svelte:head>

<script>
  console.log("We init svelte")
  import './assets/about-bg.jpg'
</script>


<h1>It works!!!</h1>

<img src="img/about-bg.jpg" alt="about" />

<style>
  h1{
    background-color: rebeccapurple;
  }
  img{
    width:10rem;
  }
</style>