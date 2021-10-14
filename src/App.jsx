import Layout from './Layouts/layout.jsx';
import Layout_vacio from './Layouts/Layout_vacio.jsx';
import './Estilos/Style.css';
import "./Estilos/estilos2.css";
import "./Estilos/producto.css"
import Gestion_productos from './pages/Gestion_productos.jsx';
import Gestion_usuario from './pages/Gestion_usuario.jsx';
import Gestion_ventas from './pages/Gestion_ventas.jsx';
import Ingreso from './pages/Ingreso.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
  <div lassName="App">
    <Router>
    <Layout>
    <Switch>
      <Route path="/src/pages/Gestion_productos.jsx">
        <Gestion_productos/>
      </Route>
      <Route path="/src/pages/Gestion_usuario.jsx">
        <Gestion_usuario/>
      </Route>
      <Route path="/src/pages/Gestion_ventas.jsx">
      <Gestion_ventas/>
      </Route> 
    </Switch>    
    </Layout>
    <Switch>
    <Route path="/src/pages/ingreso.jsx">
      <Ingreso/>
    </Route> 
    </Switch>
    </Router>
  </div>
  );
}
export default App;