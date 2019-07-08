import React, {Component} from 'react';
import FormProductos from './FormProductos';
import ListaProductos from './ListaProductos';
import FichaProductos from './FichaProductos';
import '../../App.css';

class TablaProductos extends Component {
	  constructor(props) {
		super(props);
		this.state = {
						visible: true,
						visible_edit: true,
						productos: [],
						product: {
									nombre: "pruebita",
									categoria1: "",
									descripcion: "",
									url: ""
								 }
		}
			this.ver=this.ver.bind(this);
			this.ver_edit=this.ver_edit.bind(this);
			this.ver_edit_datos=this.ver_edit_datos.bind(this);
			this.refresh=this.refresh.bind(this);
		//Cargar lista inicial
		fetch('http://howard.servehttp.com:3010/images/0/50')
				  .then((response) => {
					return response.json();
				  })
				  .then((datos) => {
					this.setState({productos: datos})
					console.log(this.state.productos)
				  })
	  }
	  ver()
	  {
		  this.setState({visible: !this.state.visible})
	  }
	   ver_edit()
	  {
		  this.setState({visible_edit: !this.state.visible_edit})
	  }
	   ver_edit_datos(subindice)
	  {
		  this.setState(prevState => ({
			product: {                    
						nombre: this.state.productos[subindice].nombre,
						categoria1: this.state.productos[subindice].categoria1,						// update value of specific key
						descripcion: this.state.productos[subindice].descrip,
						url: require('../../images/'+this.state.productos[subindice].clave+'.jpg')
					 }
		  })
		);
	  }
	  refresh()
	  {
		  fetch('http://howard.servehttp.com:3010/images/0/50')
				  .then((response) => {
					return response.json();
				  })
				  .then((datos) => {
					this.setState({productos: datos})
					console.log(this.state.productos)
				  })		
	  }
  render() {
    return(
	  <div>
		<table className="my-2 tabla_p">
			<tbody>
				<tr className="bg-warning font-weight-bold text-light">
					<td className="td_productos">Nombre</td>
					<td className="td_productos">Categoria</td>
					<td className="td_productos">Precio estandar</td>
					<td className="td_productos">Precio Mayoreo</td>
					<td className="td_productos">Disponible</td>
					<td className="td_productos">Vendidos</td>
					<td className="td_productos">Editar</td>
					<td className="td_productos">Eliminar</td>
				</tr>
				<ListaProductos productos={this.state.productos} ver_edit={this.ver_edit} ver_edit_datos={this.ver_edit_datos}/>
				<tr className="bg-warning font-weight-bold text-light">
					<td colSpan="8"><button type="button" onClick={this.ver} className="btn btn-secondary btn-lg btn-block">Agregar Producto +</button></td>
				</tr>
			</tbody>
		</table>
		
		<FormProductos refresh={this.refresh} ver_cambio={this.ver} visible={this.state.visible}/>
		<FichaProductos producto={this.state.product} ver_cambio={this.ver_edit} visible={this.state.visible_edit}/>
	  </div>
    );
  }
}
export default TablaProductos;