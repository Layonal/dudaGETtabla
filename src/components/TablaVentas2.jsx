import "../Estilos/bootstrap.css"
const Tabla_ventas2 = ()=>{
    return(
      <div className="container ">
        <table class="table table-hover">
            <thead>
                    <tr class="table-dark">
                        <th>
                            Buscar Producto
                        </th>
                        <th>
                            Buscar ID
                        </th>
                        <th>
                            Cantidad
                        </th>
                    </tr>
                </thead>
            <tbody>
                    <tr class="table-secondary">
                        <th>
                            <select class="form-select" id="exampleSelect1">
                                <option>Producto</option>
                            </select>
                            </th>                
                    <td>
                        <select class="form-select" id="exampleSelect1">
                            <option>ID_1</option>
                            <option>ID_2</option>
                            <option>ID_3</option>
                        </select>
                        </td>
                        <td>
                        <select class="form-select" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        </td>
                </tr>
            </tbody>
        </table>
        <div className="end">
        <button type="button" className="btn btn-success">
         finalizar 
        </button>
        </div>
        <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">ID producto</th>
                        <th scope="col">producto</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-primary">
                        <th scope="row">1</th>
                        <td>producto1</td>
                        <td>#</td>
                        <td>$----</td>
                        <td>$----</td>
                    </tr>
                    <tr class="table-secondary">
                        <th scope="row">2</th>
                        <td>producto2</td>
                        <td>#</td>
                        <td>$----</td>
                        <td>$----</td>
                    </tr>
                    <tr class="table-primary">
                        <th scope="row">3</th>
                        <td>producto3</td>
                        <td>#</td>
                        <td>$----</td>
                        <td>$----</td>
                    </tr>
                </tbody>
            </table>
        <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th>
                            Unidades Totales
                        </th>
                        <th>
                            Total
                        </th>
                        <th>
                            Estado Venta
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-secondary">
                        <th scope="row">3</th>
                        <td>$ ----</td>
                        <div class="form-group">
                            <select class="form-select" id="exampleSelect1">
                                <option>En Proceso</option>
                                <option>Cancelado</option>
                                <option>Entregado</option>
                            </select>
                        </div>

                    </tr>
                </tbody>
        </table>
        <div className="end">
        <button type="button" className="btn btn-success">
         finalizar 
        </button>
        </div>
</div>
    );
}
export default Tabla_ventas2