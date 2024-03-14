import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
import './profile.css';

const Register = () => {
  const [url, setUrl] = useState('');
  const [username, setName] = useState('');
  const [name, setNombre] = useState('');
  const [description, setDesc] = useState('');
  const [redirectToCards, setRedirectToCards] = useState(false); // Nuevo estado para redirigir

  

  const handleUserNameChange = (e) => {
    setName(e.target.value);
    
  };
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  

  

  if (redirectToCards) {
    return <Navigate to="/" />; 
  }

  return (
    <div className="register-container">
    <h2>Registro</h2>
    
      <form className="register-form" >
        <div>
          <label htmlFor="name">Usermane: {"\n"}</label>
          <input
            type="name"
            id="name"
            value={username}
            onChange={handleUserNameChange}
            required
          />
          <label>Nombre: </label>
          <input
            type="name"
            id="Nombre"
            value={name}
            onChange={handleNombreChange}
            required
          />
          <label>Description:</label>
          <input
            type="name"
            id="name"
            value={description}
            onChange={handleDescChange}
            required
          />
          <label htmlFor="email">Url:</label>
          <input
            type="name"
            id="name"
            value={username}
            onChange={handleUrlChange}
            required
          />
        </div>
      
      </form>
  
   
  </div>
  
  );
};

export default Register;
