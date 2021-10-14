import Developer from "../img/developer.jpg";
import { Link } from "react-router-dom";
const Header =() =>{
    return (
    <div>
      <div className ="header2">
      <span><Link to="../../public/index.html"> <img className="avatar" src={Developer} />
        </Link> </span>
      </div>
    <header>
      <nav className="menuCSS3">
        <ul>
          <li> <Link to="/src/pages/ingreso.jsx"> Inicio</Link></li>
          
          <li><a href="#">Navegacion</a>
          <ul>
            <li><Link to="/src/pages/Gestion_usuario.jsx"> Usuarios </Link> </li>
            <li><Link to="/src/pages/Gestion_ventas.jsx"> Ventas </Link></li>
            <li><Link to="/src/pages/Gestion_productos.jsx"> productos </Link></li>
            <li><a href="#">Mas Ventas</a></li>
            <br />
        </ul>
            </li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Salir</a></li>
            </ul>
        </nav>
    </header>
    </div>
    )
}
export default Header