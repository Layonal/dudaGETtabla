const Tabla_ventas1 = ()=>{
    return(
      <div className="container  container2">
        <div className="column ">
            <label >Fecha </label>
            <input type="date" className="form-control" />
            <label >Vendedor </label>
            <input type="text" className="form-control"  />
            <label >Vendedor ID </label>
            <input type="number"  className="form-control"  />
            <label >Cliente </label>
            <input type="text" className="form-control"  />
            <label >Cliente ID </label>
            <input type="number"  className="form-control"  />
        </div>
        <div className="container3">
        <div className="container ">
           <h4># Factura</h4>
           <input type="number" className="form-control"  />
        </div>
        </div>
</div>
    );
}
export default Tabla_ventas1