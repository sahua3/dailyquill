<script>
  import Router from 'svelte-spa-router';
  import routes from './routes.js';
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    padding: 20px;
  }
</style>