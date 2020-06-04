<script>
  export let goal=""
  // dynamic expression using $:
  $:shouldHighlight = goal.includes('!')
</script>

<h1 class="your-goal"
  class:warning={shouldHighlight}>
    Your goal is: {goal}
</h1>

<style>
.your-goal{
  font-weight:400;
}
.warning{
  color:red;
}
</style>