import React from "react";

const Consulta = ({setProducto}) => {
    
    return ( 
        <div className="card">
            <h5 className="card-header">Haga su  consulta de stock</h5>
            <div className="card-body">
                <input type="text" 
                    className="form-control" 
                    placeholder="Ingrese el producto por cual quiere consultar"
                    onChange={(e)=> setProducto(e.target.value) } />
                <br />
                <p>En este campo puede ingresar el producto por el cual quiere consultar asi le diremos si tenemos ese producto en stock</p>
                <br />
                <button className="btn btn-primary">Conusltar</button>
            </div>
        </div>
     );
}
 
export default Consulta;