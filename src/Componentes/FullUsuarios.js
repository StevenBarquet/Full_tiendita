import React, {Component} from 'react';
import '../App.css';
import FormUsuarios from './User components/FormUsuarios';
import ListaUsuarios from './User components/ListaUsuarios';
import EditUsuarios from './User components/EditUsuarios';
//import from './datosClientes.json';
// cd desktop/react-app-front 
//189.232.7.190/3001 // http://howard.servehttp.com:3001/todo  //root pass: raspberry
//docker ps -a // docker restart mongo 
//docker restart datosclientes2

class FullUsuarios extends Component {
	constructor(){
	super();
	this.state = {
		clientes: [],
		cad: '',
		r_visible: true,
		r_visible2: true,
		edit_id: 0
	}
	this.visible = this.visible.bind(this);
	this.visible2 = this.visible2.bind(this);
	this.refresh = this.refresh.bind(this);
	this.eliminar = this.eliminar.bind(this);
	this.editar = this.editar.bind(this);
	fetch('http://howard.servehttp.com:3001/todo')
					  .then((response) => {
						return response.json();
					  })
					  .then((datos) => {
						this.setState({clientes: datos})
						
					  })
	}
	visible()
	{
		this.setState({r_visible: !this.state.r_visible});
	}
	visible2()
	{
		this.setState({r_visible2: !this.state.r_visible2});
	}
	refresh()
	{
		fetch('http://howard.servehttp.com:3001/todo')
					  .then((response) => {
						return response.json();
					  })
					  .then((datos) => {
						this.setState({clientes: datos})
						
					  })
	}
	eliminar(data)
	{	var misCabeceras = new Headers();
		var url = 'http://howard.servehttp.com:3001/todo/'+data;
		var miInit = {  method: 'DELETE',
						headers: misCabeceras,
						mode: 'cors',
						Cache: 'default' };
		fetch(url, miInit).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
							console.log('Success:', response); 
							this.refresh();
							return response
		});
	}
	editar(subindice)
	{
		this.setState({edit_id: subindice});
		this.setState({r_visible2: !this.state.r_visible2});
	}
	render(){
		return (
		  <div>
			<table className="mx-auto my-2">
				<tbody>
				<tr className="bg-warning font-weight-bold text-light">
					<td className="td_usuarios">Id</td>
					<td className="td_usuarios">Nombre(s)</td>
					<td className="td_usuarios">Apellidos</td>
					<td className="td_usuarios">Correo</td>
					<td className="td_usuarios">Telefono</td>
					<td className="td_usuarios">Direccion</td>
					<td className="td_usuarios">Contraseña</td>
					<td className="td_usuarios">Editar</td>
					<td className="td_usuarios">Eliminar</td>
				</tr>
				<ListaUsuarios edita_plox={this.editar} clientes={this.state.clientes} recarga_plox={this.refresh} borra_plox={this.eliminar}/>
				<tr className="bg-warning font-weight-bold text-light">
					<td colSpan="9"><button type="button" onClick={this.visible} className="btn btn-secondary btn-lg btn-block">Agregar Registro +</button></td>
				</tr>
				</tbody>
			</table>
			<div><FormUsuarios ver_menu={this.state.r_visible} change_ver_menu={this.visible} recarga_plox={this.refresh}/></div>
			<div><EditUsuarios cliente={this.state.clientes[this.state.edit_id]} ver_menu={this.state.r_visible2} change_ver_menu={this.visible2} recarga_plox={this.refresh}/></div>
		  </div>
		  );
	}
}


export default FullUsuarios;
//fetch('192.168.1.109/todo')
  //    .then(response => response.json())
   //  .then(data => this.setState({ data }))