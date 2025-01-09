<script>
    let email = '';
    let password = '';
    let error = '';

    async function handleLogin() {
      error = '';
  
      if (!email || !password) {
        error = 'Please fill in all fields.';
        return;
      }
  
      try {
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          const result = await response.json();
          error = result.message || 'Login failed. Please try again.';
          return;
        }
  
        // Handle successful login (e.g., save token, redirect)
        const data = await response.json();
        console.log('Login successful:', data);
        alert('Login successful!');
      } catch (err) {
        error = 'An error occurred. Please try again.';
        console.error(err);
      }
    }
</script>

<div class="login-container">
    <h1>Login</h1>
    {#if error}
      <p class="error">{error}</p>
    {/if}
    <form on:submit|preventDefault={handleLogin}>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          bind:value={email}
          required
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          bind:value={password}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
