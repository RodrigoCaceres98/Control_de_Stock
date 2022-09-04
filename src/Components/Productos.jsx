import React from "react";
import { useState } from "react";
import Producto from "./Producto";

const Productos = () => {
   
   const [producto, actualizarStock] = useState([
      { id:1, modelo:'New Cg Titan', nombre:"Tanque", valor:20000 },
      { id:2, modelo:'New Cg Titan' , nombre:"Alerones", valor:10000 },
      { id:3, modelo:'Wave', nombre:"Asiento", valor:6000 },
      { id:4, modelo:'New Twistter', nombre:"Guardabarro Delantero", valor:11000 },
      { id:5, modelo:'Wave', nombre:"Volante", valor:4000 },
      { id:6, modelo:'Biz', nombre:"Foco", valor:600 }
  ]);

   
   return ( 
      <table class="table table-bordered tabla">
        <table class="table">
         <thead>
            <tr>
               <th className="col-1">ID</th>
               <th className="col-3 border-start">Nombre</th>
               <th className="col-2 border-start">Modelo</th>
               <th className="col-2 border-start">Precio</th>
            </tr>
         </thead>
         <tbody>
            {producto.map((produc) => {
               return <Producto  key={produc.id}
                              producto={produc}/>
               
            })}
         </tbody>
         </table>
      </table>
   
     );
}

export default Productos;
