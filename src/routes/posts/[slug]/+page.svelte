<script>
    export let data;
  </script>
  
<div class="container">
  <article>
    <h1>{ data.title }</h1>
    <p>Published: {data.published}</p>
    <svelte:component this={data.content} />
  </article>
</div>

<style>
  div.container {
    width: 100%;
    display: grid;
    place-items: center;
  }
  article {
    width: 60%;
    padding: 2rem;
    border: 2px solid white;
  }
</style>