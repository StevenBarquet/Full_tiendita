import React, {Component} from 'react';
import '../../App.css';

class FichaProductos extends Component {
	  constructor(props) {
		super(props);
		this.state = { 
						
					}
			this.cerrar_menu=this.cerrar_menu.bind(this);
			console.log(this.props);
	  }
	cerrar_menu()
	{
		this.props.ver_cambio();
	}
  render() {
	var v;
		if(this.props.visible === false)
			v = "visible";
		else
			v = "invisible";
			
    return(
	<div className={'agregar_imagen '+v}>
		<nav className="navbar navbar-dark bg-dark">
			<span className="navbar-brand badge badge-pill badge-light ml-2 text-dark">Ficha de producto</span>
		</nav>
		<form>
		<div className="ml-4 my-3">
			<DatosProducto titulo={"nombre"} value_c={this.props.producto.nombre}/>
			<DatosProducto titulo={"Categorias"} value_c={this.props.producto.categoria1}/>
			<DatosProducto titulo={"descripcion"} value_c={this.props.producto.descripcion}/>
			<Imagen url={this.props.producto.url}/>
			<button type="button" onClick={this.cerrar_menu} className="btn btn-lg btn-danger d-block mt-3">cerrar</button>
		</div>
		</form>
	</div>
    );
  }
}

class DatosProducto extends React.Component {
  constructor(props) {
    super(props);
	this.state = {}
  }
   
  render() {
    return(
      <div>
		<b className="text-uppercase">{this.props.titulo+' : '}</b><input value={this.props.value_c} type="text"></input>
	  </div>
    );
  }
}  
 class Imagen extends React.Component {
  constructor(props) {
    super(props);
	this.state = {}
  }
   
  render() {
	  
	if(this.props.url === "")
	{
		return (
			<div>
				<b className="text-uppercase">"sin imagen"</b>
			</div>
				);
	}
	else
	{
		return	(<img src={this.props.url} alt="..."></img>);
	}
  }
} 
export default FichaProductos

