import React, { useState } from 'react';
import '../EstilosComponentes/CRUD.css'

const CRUD = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="crud-container">
      <h2>CRUD Component</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li className='crudLi' key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
