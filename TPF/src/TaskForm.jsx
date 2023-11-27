import { useState} from 'react';
//import './ContadorFormulario.css';

export function TaskForm({ alAgregar }) {
  const [nombre, setNombre] = useState('');

  function actualizar(e) {
    setNombre(e.target.value);
  }

  function agregar(e) {
    if (nombre.length < 1) return;

    alAgregar(nombre);
    setNombre('');
    e.preventDefault();
  }

 

  return (
    <form >
      <input name="ingreso" type="text" value={nombre} onChange={actualizar} placeholder="" />
      <button onClick={agregar}>Agregar</button>
    </form>
  );
}
