async function logIn(username, password) {
    const response = await fetch('/api/login.php', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    return await response.json();
  }
  