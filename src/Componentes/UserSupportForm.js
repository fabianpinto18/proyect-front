import React, { useState } from 'react';
import '../EstilosComponentes/UserSupportForm.css'



function UserSupportForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
      console.log(formData);
    };
  
    return (
      <div className="user-support-form">
        <h2>Atención al Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default UserSupportForm;
  