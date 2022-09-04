import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Productos from './Components/Productos';
import Pedido from './Components/Pedido';
import './CSS/Producto.css'

export const App = () => {

    //Creamos un state

    

    return (
      <div className='containerA'>
          <div className='row g-0'>
            <Header />
            <div className='col-6 col-md-4'>
              <Pedido/>
            </div>
            <div className='col-sm-6 col-md-8 productos'>
              <Productos/>
            </div>
            
          </div>
          <Footer/>
          
          
          
      </div>
  )
};

