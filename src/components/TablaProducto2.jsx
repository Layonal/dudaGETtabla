import { useEffect, useState, useRef } from "react/cjs/react.development";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Estilos/producto.css"
import axios from "axios";



const TablaProducto2 = ({listaProductos, setMostrarProductos }) =>{
  
  useEffect(() =>{
    console.log("este es el contenido del la lsita de productos", listaProductos)
    }, [listaProductos]);

    const form = useRef(null);
    
   
    const submitForm = async(e)=> {
      e.preventDefault();
      const fd = new  FormData(form.current);
      // esa variable esta como objeto vacio y alli ingresa los imput como un formato Json, 
      const nuevoProducto ={};
      fd.forEach((value, key)=>{
          nuevoProducto[key] = value;
      })  
      setMostrarProductos([...listaProductos,nuevoProducto]);
      toast.success( "El producto se ha agragado con éxito")
      console.log("datos del form enviados", nuevoProducto); //" aca se puede ver en la consoloa el Json"
    await axios.post("http://localhost:3001/api/product", nuevoProducto)
  }
    
    return (

      
            
         
            <section className="login_Developer_2"> 

              <form ref={form} onSubmit ={submitForm}>
                <h3>Nuevo producto</h3>
                <label htmlfor="producto">ingrese id</label>
                  <label htmlfor="producto">ingrese producto</label>
              
                  <label htmlfor="producto">ingrese precio</label>
                  <label htmlfor="producto">estado</label>
                  <input  required type="id" placeholder="IdProducto" required name ="id" />
                  <input required type="text" placeholder="NuevoProducto" name="nombre" required /> 
                  <input  required  type="id" placeholder="Precio" required name="precio" />
                   
                    <select  required  type="id"  required 
                    name="estado" 
                     type="id" 
                    placeholder="Estado" required>
                      <option>Disponible</option>
                      <option>No_disponible</option>
                      </select>
                      <button type="submit" className ="buttoning "  >
                     Ingresar 
                     </button>
                     <table>
                    <thead>
                      <tr> 
                        <th>id producto</th> 
                        <th>Detalle Producto</th> 
                        <th>Valor Unitario</th>  
                        <th>  Estado </th> 
                        <th>editar</th>
                        <th>Actualizar</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {listaProductos.map((productos)=>{
                        return (
                          <tr> 
                            <td>{productos.id} </td> 
                            <td>{productos.nombre}</td> 
                            <td>{productos.precio}</td>
                            <td>{productos.estado}</td> 
                            <td>{productos.editar}<a class="botonedit" href="#">Editar</a></td> 
                            <td>{productos.actualizar}<a class="botonedit" href="#">Actualizar</a></td>
                      </tr>

                        )
                      })}
                     
                   
                    </tbody>

                  
                  </table>
                
              </form>
              
                  
          
                  </section>    
      
    );
};

export default TablaProducto2;