<script>
	import { onMount } from 'svelte';
	import { getPosts } from './api';
	import PostList from './components/postList.svelte';
  
	let posts = [];
  
	onMount(async () => {
	  const response = await getPosts();
	  posts = response.data;
	});
  </script>
  
  <main>
	<h1>Blog Posts</h1>
	<PostList {posts} />
  </main>
  