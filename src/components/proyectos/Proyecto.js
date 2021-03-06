import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

       //obtner el state de proyectos
       const proyectosContext = useContext( proyectoContext)
       const { proyectoActual } = proyectosContext;

//obtemer la funcion del conec=xt de tarea 
const tareasContext = useContext(TareaContext);
const { obtenerTareas } = tareasContext

       //Funcion para agregar el proyecto actual

       const seleccionarProyecto = id => {
           proyectoActual(id);//Fijar un proyecto actual
           obtenerTareas(id);//filtar las tareas cuando se de click
       }
    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto._id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;