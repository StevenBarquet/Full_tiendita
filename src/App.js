import React, {Component} from 'react';
import './App.css';
import FullUsuarios from './Componentes/FullUsuarios';
import FullProductos from './Componentes/FullProductos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// cd desktop/react-app-front    //cd /home/admin-app/ 
//189.232.7.190/3001 // http://howard.servehttp.com:3001/todo  //root pass: raspberry
//docker ps -a // docker restart mongo 
//docker restart datosclientes2  //docker restart productos

class App extends Component {
	constructor(){
	super();
	this.state = {}
	}	
	render(){
		return (
		  <Router>
		  <div>
			<nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-sm">
			  <Link to="/" className="navbar-brand">Tiendita
				<span className="badge badge-pill badge-warning ml-2">
				  APP
				</span>
			  </Link>
			  <ul className="navbar-nav ml-4">
				<li className="nav-item badge badge-pill badge-light ml-3"><Link to="/Usuarios/" className="nav-link text-dark">Usuarios</Link></li>
				<li className="nav-item badge badge-pill badge-light ml-3"><Link to="/Productos/" className="nav-link text-dark">Productos</Link></li>
			  </ul>
			</nav>
			<Route path="/Usuarios/" component={FullUsuarios}/>
			<Route path="/Productos/" component={FullProductos}/>
		  </div>
		  </Router>
		  );
	}
}


export default App;
//fetch('192.168.1.109/todo')
  //    .then(response => response.json())
   //  .then(data => this.setState({ data }))