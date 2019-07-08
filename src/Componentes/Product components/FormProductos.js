import React, {Component} from 'react';
import '../../App.css';

class FormProductos extends Component {
	  constructor(props) {
		super(props);
		this.state = {
						nombre: "",
						precio_s: "",
						precio_n: "",
						descripcion: "",
						disponible: true,
						categoria1: "",
						categoria2: "",
						categoria3: "",
						categoria4: "",
						categoria5: ""
					 }
		this.Subir_imagen=this.Subir_imagen.bind(this);
		this.ver_menu=this.ver_menu.bind(this);
		this.guardar_input=this.guardar_input.bind(this);
	  }
	  Subir_imagen(e)
	  {
		e.preventDefault();
		var url = "http://howard.servehttp.com:3010/images/registro";
		var fileInput = e.target[0];
		var formData = new FormData();

		formData.append('file', fileInput.files[0]);
		console.log("sin-> ",formData);
		
		formData.append('nombre_p',this.state.nombre)
		formData.append('precio_s',this.state.precio_s)
		formData.append('precio_n',this.state.precio_n)
		formData.append('descripcion',this.state.descripcion)
		formData.append('disponible',this.state.disponible)
		formData.append('categoria1',this.state.categoria1)
		formData.append('categoria2',this.state.categoria2)
		formData.append('categoria3',this.state.categoria3)
		formData.append('categoria4',this.state.categoria4)
		formData.append('categoria5',this.state.categoria5)
		console.log("con->",formData);
		var options = {
		  method: 'POST',
		  body: formData,
		  // If you add this, upload won't work
		  // headers: {
		  //   'Content-Type': 'multipart/form-data',
		  // }
		};

		fetch(url, options).then(response => {
							console.log('Success:', response); 
							this.props.ver_cambio();
							this.props.refresh();
							return response;
		});;
	  }
	  ver_menu()
	  {
		  this.props.ver_cambio();
	  }
	  guardar_input(str, id)
	{
		if(id === '1')
			this.setState({nombre: str});
		if(id === '2')
			this.setState({precio_s: str});
		if(id === '3')
			this.setState({precio_n: str});
		if(id === '4')
			this.setState({descripcion: str});
		if(id === '5')
			this.setState({disponible: str});
		if(id === '6')
			this.setState({categoria1: str});
		if(id === '7')
			this.setState({categoria2: str});
		if(id === '8')
			this.setState({categoria3: str});
		if(id === '9')
			this.setState({categoria4: str});
		if(id === '10')
			this.setState({categoria5: str});
	}
  render() {
	  var v;
			if(this.props.visible === false)
			{
				v = "visible";
			}
			else
			{
				v = "invisible";
			}	
    return(
	  <div className={'agregar_imagen '+v}>
			<nav className="navbar navbar-dark bg-dark">
				<span className="navbar-brand badge badge-pill badge-light ml-2 text-dark">Uploading Image</span>
			</nav>
			<form onSubmit={this.Subir_imagen}>
			<div className="ml-4 my-3">
				<label>Insertar Pack</label>
				<input type="file" name="file"></input>
				<InputTexto onWrite={this.guardar_input} id_c={"1"} placeholder_c={"Nombre"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"2"} placeholder_c={"Precio estandar"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"3"} placeholder_c={"Precio mayoreo"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"4"} placeholder_c={"Descripcion"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"6"} placeholder_c={"Categoria Principal"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"7"} placeholder_c={"Subcategoria 1"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"8"} placeholder_c={"Subcategoria 2"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"9"} placeholder_c={"Subcategoria 3"}/>
				<InputTexto onWrite={this.guardar_input} id_c={"10"} placeholder_c={"Subcategoria 4"}/>
				
				<button type="submit" className="btn btn-primary mt-3">Submitear</button>
				<button type="button" onClick={this.ver_menu} className="btn btn-lg btn-danger d-block mt-3">cerrar</button>
			</div>
		  </form>
	  </div>
    );
  }
}
export default FormProductos;

class InputTexto extends React.Component {
  constructor(props) {
    super(props);
	this.state = {}
    this.handleInput = this.handleInput.bind(this);
  }
 
  handleInput(e) 
  {
	  this.props.onWrite(e.target.value, e.target.id);
  }
  
  render() {
    return(
      <input
		type="text"
		id={this.props.id_c}
		placeholder={this.props.placeholder_c}
		onChange={this.handleInput}>
	  </input>
    );
  }
}