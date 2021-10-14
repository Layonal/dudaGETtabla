import React, {useEffect, useState, }  from "react";
import "../Estilos/producto.css"
import TablaProducto1 from "../components/TablaProducto1";
import TablaProducto2 from "../components/TablaProducto2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const productosBackend = [
      {id: "OOOO1",
      nombre: "camisa",
      precio: 23000,
      estado: "No_disponible",
   
      },
                        
    ];



const Gestion_productos = () =>{
      
      useEffect(() => {
      const options = {method: 'GET', url: 'http://localhost:3001/api/product'};

      axios.request(options).then(function (response) {
      console.log(response.data);
     
      
      }).catch(function (error) {
      console.error(error);
      });
      });

      
      
      const [productos, setMostrarProductos] = useState([]);      
      useEffect(() => {
            // obtener lista de producto desde backend
           setMostrarProductos(productosBackend); 
            }, []); 

      return(
      < >
       
            <TablaProducto1  />
            <TablaProducto2 listaProductos={productos} setMostrarProductos={setMostrarProductos}/>
            <ToastContainer position="top-center"
                  autoClose={5000}/>
      </>
          );
}
export default Gestion_productos;