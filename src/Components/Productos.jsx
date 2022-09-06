import React from "react";
import ListaDeProductos from './ListaDeProductos'
import Producto from "./Producto";

const Productos = ({producto}) => {
   return ( 
      <table className="table table-bordered tabla">
         <table className="table">
            <thead>
               <tr>
                  <th className="col-1">ID</th>
                  <th className="col-3 border-start">Nombre</th>
                  <th className="col-2 border-start">Modelo</th>
                  <th className="col-2 border-start">Precio</th>
               </tr>
            </thead>
            <tbody>
               {ListaDeProductos.filter((produc) => produc.nombre.toLowerCase().includes(producto)).map((produc) => {
                  return <Producto  key={produc.id}
                              producto={produc}/>
               
               })}
            </tbody>
         </table>
      </table>
   
     );
}

export default Productos;
