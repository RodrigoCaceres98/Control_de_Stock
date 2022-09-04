import React from 'react';
import '../CSS/Producto.css';
const Producto = ({producto}) => {
  return (
    <tr className='campo'>
        <th scope="row  ">{producto.id}</th>
        <td className='border-start'>{producto.nombre}</td>
        <td className='border-start'>{producto.modelo}</td>
        <td className='border-start'>${producto.valor}</td>
      </tr>
    // <div className='p-2 card-ventana'>
    //   <div className="card producto" >
    //     <h5 className="card-header">{producto.nombre}</h5>
    //     <div className="card-body">
    //       <p><span className='text-muted'>ID: </span>{producto.id} </p>
    //       <p><span className='text-muted'>Modelo: </span>{producto.modelo}</p>
    //       <p><span className='text-muted'>Precio: </span>{'$ '+producto.valor}</p> 
    //     </div>
    //   </div>
    // </div>
  )
};

export default Producto;

