import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

const Pantalla=({input, onChange})=>(
  <input className='input' value={input} onChange={onChange}></input>
);

export default Pantalla;