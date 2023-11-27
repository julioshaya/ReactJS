import { useState,useEffect } from 'react'
import { TaskForm } from './TaskForm';
import {TaskList} from './TaskList'
import './app.css'
const datosIniciales =[
    {id:1,nombre:'Desarrollo APP',completada:false},
    {id:2,nombre:'Preparar CSS',completada:false},

  ]

function App() {
  const [id, setId] = useState(Date.now()) // Proximo id a asignar
  const [completa,setCompleta] = useState(false)
  const [tareas, setTareas] = useState([]);
  
    
  function agregar(nombre) {
    const nuevo = { id, nombre, completada:false}
    const copia = [...tareas, nuevo ]
    setTareas(copia)
    setId(Date.now())
  }

  function borrar(id) {
    const borra = tareas.filter(tarea => tarea.id !== id)
    setTareas(borra)

  }

   function completar(id) {
    const actual = tareas.find(tarea => tarea.id === id)
    if (actual.completada === false) { 
        const nuevo = { ...actual, completada: true  }
        const copia = tareas.map(tarea => tarea.id === nuevo.id ? nuevo : tarea)
        setCompleta(true)
        setTareas(copia)
     } else {
        const nuevo = { ...actual, completada: false  }
        const copia = tareas.map(tarea => tarea.id === nuevo.id ? nuevo : tarea)
        setTareas(copia)
      }
   }
   
   useEffect(()=> {
    const datos = localStorage.getItem('tareas');
    if (datos) {
      setTareas(JSON.parse(datos));
    }
  },[]);
 
  useEffect(()=> {
    localStorage.setItem('tareas',JSON.stringify(tareas))
 },[tareas]);
  
 useEffect(()=> {
  if (completa){
    alert ("Tarea Completada" )
    setCompleta(false)
    }},[completa]);

 
  return (
    <>
      <main>
          <h1>Lista de Tareas</h1>
            <TaskForm alAgregar={agregar} />
            <TaskList tareas={tareas} alCompletar={completar} alBorrar={borrar} />
      </main>

    </>
  )
}

export default App
