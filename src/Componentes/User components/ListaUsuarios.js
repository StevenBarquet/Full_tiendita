import React, {Component} from 'react';
import '../../App.css';

class ListaUsuarios extends Component {
	  constructor(props) {
		super(props);
		this.state = {}
		this.borrar=this.borrar.bind(this);
		this.edit=this.edit.bind(this);
	  }
	  borrar(e){
	  console.log("->", e.target.value)
	  return this.props.borra_plox(e.target.value);
	  }
	  edit(e){
	  this.props.edita_plox(e.target.value);
	  }
	render() {
    return(
			this.props.clientes.map((cliente,i)=>{
				var estilo;
				if(((i+1)%2) === 0)
					estilo = "alert alert-warning";
				else
					estilo = "alert alert-secondary";
			return (
					<tr key={i} className={estilo}>
						<td className="td_usuarios">{this.props.clientes[i].id}</td>
						<td className="td_usuarios">{this.props.clientes[i].nombre}</td>
						<td className="td_usuarios">{this.props.clientes[i].apellido}</td>
						<td className="td_usuarios">{this.props.clientes[i].correo}</td>
						<td className="td_usuarios">{this.props.clientes[i].telefono}</td>
						<td className="td_usuarios">{this.props.clientes[i].direccion}</td>
						<td className="td_usuarios">{this.props.clientes[i].password}</td>
						<td className="td_usuarios"><button value={i} onClick={this.edit} className="btn btn-primary btn-sm">Editar</button></td>
						<td className="td_usuarios"><button value={this.props.clientes[i].id} onClick={this.borrar} className="btn btn-danger btn-sm">Eliminar</button></td>
					</tr>
			
					)
				})			
    );
  }

}

export default ListaUsuarios;