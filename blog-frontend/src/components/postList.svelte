<script>
    export let posts = [];
  </script>
  
  <ul>
    {#each posts as post}
      <li>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <small>{new Date(post.createdAt).toLocaleDateString()}</small>
      </li>
    {/each}
  </ul>
  