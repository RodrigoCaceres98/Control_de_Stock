import React from 'react';

const Footer = () => {
    
    const fecha = new Date().getFullYear();

    return (
        <div className='text-center '>
            <h5>Todos los derechos reservados {fecha}</h5>
        </div>
        );
}

export default Footer;