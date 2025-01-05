<script>
	let title = '';
	let content = '';
  
	// Function to submit the form data
	async function submitPost() {
	  const response = await fetch('http://localhost:8080/api/posts', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({ title, content })
	  });
  
	  const result = await response.json();
	  console.log(result);
  
	  title = '';
	  content = '';
	}
  </script>
  
  <style>
	input, textarea {
	  width: 100%;
	  margin: 5px 0;
	  padding: 10px;
	}

  main{
    background-color: pink;
  }
  
	button {
	  background-color: #4CAF50;
	  color: white;
	  padding: 10px;
	  border: none;
	  cursor: pointer;
	}
  
	button:hover {
	  background-color: #45a049;
	}

  .resizedTitlebox {width: 100px; height: 20px}
  .resizedContent {width: 300px; height: 500px}

  </style>
  
  <main>
	<h1>Create a New Post</h1>
	<form on:submit|preventDefault={submitPost}>
	  <div>
		<label for="title">Title</label>
		<input type="text" id="title" class="resizedTitlebox" bind:value={title} required />
	  </div>
	  <div>
		<label for="content">Content</label>
		<input type="text" bind:value={content} class=".resizedContent"required />
	  </div>
	  <button type="submit">Submit</button>
	</form>
  </main>
  