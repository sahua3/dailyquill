<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./components/main.svelte";
  import About from "./components/login.svelte";
  import Blog from "./components/error.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
  <div>
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} />
    <Route path="/"><Home /></Route>
  </div>
</Router>
