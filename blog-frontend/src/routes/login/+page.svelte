<script>
	import { goto } from "$app/navigation";

    let username = '';
    let password = '';
    let errorMessage = '';
  
    function handleSubmit() {
      if (username === '1' && password === '1') { //temp password and username
        errorMessage = '';
        alert('Login successful!');
        username = '';
        password = '';
        goto('/blog-landing'); //if successful send to /blog-landing
      } else {
        errorMessage = 'Invalid username or password';
      }
    }
    function goBack() {
        goto('/', { replaceState: true });
    }
  </script>

<main>
  <h2>Login</h2>
  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <label for="usrnme">Username:</label>
    <input type="text" id="usrnme" bind:value={username} />

    <label for="paswrd">Password:</label>
    <input type="paswrd" id="paswrd" bind:value={password} />

    <button type="submit">Log in</button>
  </form>
  <div>
    <button on:click={ goBack }>Go Back</button>
  </div>
</main>

<style>
    main {
      max-width: 300px;
      margin: 0 auto;
      text-align: center;
    }
  
    label {
      display: block;
      margin-top: 10px;
      font-style: dokdo;
    }
  
    input {
      width: 100%;
      padding: 5px;
      margin-top: 5px;
      border-radius: 25px;
      border: 2px solid #73AD21;
    }
  
    button {
      margin-top: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
    }
  
    .error {
      color: red;
      margin-top: 10px;
    }
  </style>