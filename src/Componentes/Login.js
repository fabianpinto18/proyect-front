import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// Estilos CSS en línea
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const formStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  width: '300px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  width: '100%',
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
