export function TaskList({tareas,alCompletar,alBorrar}){

        return (
         <ul>
               {tareas.map(tarea => <TaskItem
                key={tarea.id}
                tarea={tarea}
                alCompletar={alCompletar}
                alBorrar={alBorrar} />)}
        
         </ul>
        )
        }

    function TaskItem({ tarea, alCompletar, alBorrar }) {

            function completar() {
              alCompletar(tarea.id);
            }
          
            function borrar() {
              alBorrar(tarea.id);
            }
          
            return (
              <li>
                <span><b style={{textDecoration:tarea.completada === true ? "line-through red" : "none"}}>{tarea.nombre}</b></span>
                <div>
                      <button  onClick={completar}>+</button>
                      <button  onClick={borrar}>-</button>
                </div>
              </li>
            );
          }
          