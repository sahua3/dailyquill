<script>
	let { children } = $props();
    import '@fontsource/dokdo';
</script>

<nav>
	<a href="/">home</a>
	<a href="/create-account">create account</a>
    <a href="/blog-landing">landing</a>
    <a href="/login">login</a>
</nav>
<!-- nav for testing -->
{@render children()}