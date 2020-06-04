<script>
  import Layout from './components/layout/Layout.svelte'
  import Goal from './components/Goal.svelte'
  let goal=""
</script>
<Layout>
  <slot id="header"></slot>
  <h1>Assignment</h1>
  <section>
    <p>Solve these tasks.</p>
    <ol>
      <li>Add an input field that allows users to enter a course goal.</li>
      <li>Output the user input in a h1 tag.</li>
      <li>
        Color the output red (e.g. by adding a class) if it contains at least one exclamation mark.
      </li>
      <li>
        Put the h1 tag + output into a separate component to which you pass the user input
      </li>
    </ol>
  </section>
  <h2>Solutions</h2>
  <section>
  <div>
    <Goal goal={goal} />
    <input type="text" bind:value={goal}>
  </div>
  </section>
</Layout>



