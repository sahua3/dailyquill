<script>
	import { goto } from "$app/navigation";

    let username = '';
    let password = '';
    let passwordCheck = ''; //email stuff
    let email = ''; //will add validation for emails later
    let errorMessage = '';
  
    function handleSubmit() {
        if (password)
        if (password === passwordCheck) { //make sure username and email arent blank
            errorMessage = '';
            alert('Account Created, please log in');
            username = '';
            password = '';
            passwordCheck = '';
            goto('/login');
        } else {
            errorMessage = 'password does not match';
        }
    }
    function goBack() {
        goto('/', { replaceState: true });
    }
  </script>

<main>
    <h2> Create An Account </h2>
    {#if errorMessage}
    <p class="error">{errorMessage}</p>
    {/if}
    <form on:submit|preventDefault={handleSubmit}>

        <label for="email"> Email:</label>
        <input type="text" id="email" bind:value={email} />

        <label for="usrnme">Username:</label>
        <input type="text" id="usrnme" bind:value={username} />
    
        <label for="paswrd">Password:</label>
        <input type="paswrd" id="paswrd" bind:value={password} />

        <label for="passwordCheck">Retype Password:</label>
        <input type="passwordCheck" id="passwordCheck" bind:value={passwordCheck} />
    
        <button type="submit">Create Account</button>
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