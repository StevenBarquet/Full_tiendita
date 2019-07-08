import React, {Component} from 'react';
import '../../App.css';
var update = true;
class EditUsuarios extends Component {
	  constructor(props) {
		super(props);
		this.state = { 
						id: '',
						nombre: '',
						apellido: '',
						correo: '',
						telefono: '',
						direccion: '',
						password: '',
					 }
		this.SaveInput = this.SaveInput.bind(this);
		this.EditarDatos = this.EditarDatos.bind(this);
		this.cambio = this.cambio.bind(this);
	  }
	cambio()
	{
		this.props.change_ver_menu();
		update = true;
	}
	SaveInput(str, id)
	{
		if(id === '1')
			this.setState({id: str});
		if(id === '2')
			this.setState({nombre: str});
		if(id === '3')
			this.setState({apellido: str});
		if(id === '4')
			this.setState({correo: str});
		if(id === '5')
			this.setState({telefono: str});
		if(id === '6')
			this.setState({direccion: str});
		if(id === '7')
			this.setState({password: str});
	}
	EditarDatos(a)
	{
		update = true
		a.preventDefault();
		var url = 'http://howard.servehttp.com:3001/registrar';
		var data = this.state;
		fetch(url, {
		  
		  method: 'POST', // or 'PUT'
		  body: JSON.stringify(data), // data can be `string` or {object}!
		  headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  }
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
							console.log('Success:', response);  
							this.props.recarga_plox();
		});
		this.props.change_ver_menu();
		this.setState({id: ""});
	}
  render() {
			var visible;
			if(this.props.ver_menu === false)
			{
				visible = "visible";
				
			}
			else
			{
				visible = "invisible";

			}
			if((visible === "visible") && (update === true))//cuando ya se renderizaron los datos
			{
				update= false;
				this.setState({ id: this.props.cliente.id })
				this.setState({	nombre: this.props.cliente.nombre })
				this.setState({	apellido: this.props.cliente.apellido })
				this.setState({	correo: this.props.cliente.correo })
				this.setState({	telefono: this.props.cliente.telefono })
				this.setState({	direccion: this.props.cliente.direccion })
				this.setState({	password: this.props.cliente.password })
				console.log(this.state.update);
			}
    return(
	  <div className={'registro '+visible}>
		  <form onSubmit={this.EditarDatos.bind(this)} >
			<nav className="navbar navbar-dark bg-dark">
			  <span className="navbar-brand">
				<span className="badge badge-pill badge-light ml-2">
				Editar Registro
				</span>
			  </span>
			</nav>
			<div className="ml-4 my-3">
				<div className="float-left mx-3">
					<div className="form-group"><InputDisabled id="1" className_c={'text-muted form-control'} value_c={this.state.id} placeholder_c="Id" onWrite={this.SaveInput} disabled/></div>
					<div className="form-group"><InputTexto id="2" className_c={'form-control'} value_c={this.state.nombre} placeholder_c="Nombre" onWrite={this.SaveInput}/></div>
					<div className="form-group"><InputTexto id="3" className_c={'form-control'} value_c={this.state.apellido} placeholder_c="Apellido" onWrite={this.SaveInput}/></div>
					<div className="form-group"><InputTexto id="4" className_c={'form-control'} value_c={this.state.correo} placeholder_c="Correo" onWrite={this.SaveInput}/></div>
				</div>
				<div className="float-left">
					<div className="form-group"><InputTexto id="5" className_c={'form-control'} value_c={this.state.telefono} placeholder_c="Telefono" onWrite={this.SaveInput}/></div>
					<div className="form-group"><InputTexto id="6" className_c={'form-control'} value_c={this.state.direccion} placeholder_c="Direccion" onWrite={this.SaveInput}/></div>
					<div className="form-group"><InputTexto id="7" className_c={'form-control'} value_c={this.state.password} placeholder_c="Contraseña" onWrite={this.SaveInput}/></div>
					<div><button className="btn btn-primary " type="submit" id="agregar">Editar</button></div>
				</div>
			</div>
		  </form>
		  <button type="button" onClick={this.cambio} className="btn btn-danger btn-lg btn-block">Cerrar</button>
	  </div>
    );
  }

}
class InputTexto extends React.Component {
  constructor(props) {
    super(props);
	this.state = { cadena: ''}
    this.handleInput = this.handleInput.bind(this);
  }
 
  handleInput(e) 
  {
	  this.setState({cadena: e.target.value});
	  this.props.onWrite(e.target.value, this.props.id);
  }
  
  render() {
    return(
      <input 
		type="text" 
		value={this.props.value_c}
		placeholder={this.props.placeholder_c}
		onChange={this.handleInput}
		className={this.props.className_c}>
	  </input>
    );
  }
}
class InputDisabled extends React.Component {
  constructor(props) {
    super(props);
	this.state = { cadena: ''}
    this.handleInput = this.handleInput.bind(this);
  }
 
  handleInput(e) 
  {
	  this.setState({cadena: e.target.value});
	  this.props.onWrite(e.target.value, this.props.id);
  }
  
  render() {
    return(
      <input 
		type="text" 
		value={this.props.value_c}
		placeholder={this.props.placeholder_c}
		onChange={this.handleInput}
		className={this.props.className_c}
		disabled>
	  </input>
    );
  }
}  

export default EditUsuarios;