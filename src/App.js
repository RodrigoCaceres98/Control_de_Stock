import {React, useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Productos from './Components/Productos';
import Consulta from './Components/Consulta';
import './CSS/Producto.css'

export const App = () => {

  const [producto, setProducto] = useState();
  
    return (
      <div className='containerA'>
          <div className='row g-0'>
            <Header />
            <div className='col-6 col-md-4'>
              <Consulta 
                setProducto={setProducto}/>
            </div>
            <div className='col-sm-6 col-md-8 productos'>
              <Productos 
                producto={producto} />
            </div>
            
          </div>
          <Footer/>
      </div>
  )
};

