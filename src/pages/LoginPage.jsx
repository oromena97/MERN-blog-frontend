import React from 'react'
import {useState} from 'react'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function Login(ev) {
    ev.preventDefault();
    fetch('http://localhost:4040/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-type':'application/json'},
    })
  }
  return (
    <form className="login">
      <h1>Login</h1>
        <input type="text"
         placeholder="username"
         value={username}
         onChange={ev => setUsername(ev.target.value)}/>
        <input type="password"
         placeholder="password"
         value={password}
         onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>

    </form>
  );
}

export default LoginPage