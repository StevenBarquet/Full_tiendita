import React, {Component} from 'react';
import '../../App.css';

class ListaProductos extends Component {
	  constructor(props) {
		super(props);
		this.state = {}
			this.abrir_edit=this.abrir_edit.bind(this);
	  }
	abrir_edit(e)
	{
		this.props.ver_edit();
		this.props.ver_edit_datos(e.target.value);
	}
  render() {
    return(
	  this.props.productos.map((cliente,i)=>{
		var estilo, disponible;
		if(((i+1)%2) === 0)
			estilo = "alert alert-warning";
		else
			estilo = "alert alert-secondary";
		if(this.props.productos[i].disponible === true)
			disponible="si";
		else
			disponible="no";
		return (
				<tr key={i} className={estilo}>
					<td className="td_productos">{this.props.productos[i].nombre}</td>					
					<td className="td_productos">{this.props.productos[i].categoria1}</td>
					<td className="td_productos">{this.props.productos[i].precion}</td>
					<td className="td_productos">{this.props.productos[i].preciom}</td>
					<td className="td_productos">{disponible}</td>
					<td className="td_productos">0</td>
					<td className="td_productos"><button value={i} onClick={this.abrir_edit} className="btn btn-secondary btn-sm">Editar</button></td>
					<td className="td_productos"><button value={this.props.productos[i].clave} onClick={this.borrar} className="btn btn-danger btn-sm">Eliminar</button></td>
				</tr>
		
				)
			})		  
    );
  }
}
export default ListaProductos;