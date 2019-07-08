import React, {Component} from 'react';
import '../App.css';
import TablaProductos from './Product components/TablaProductos';
//<img src={require("../../images/plox2.jpg")} alt="La cabeza y el torso de un esqueleto de dinosaurio;tiene una cabeza grande con dientes largos y filosos"></img>
class FullProductos extends Component {
	constructor(){
	super();
	this.state = {
				}
	}
	render(){
		return (
				<div>
					<TablaProductos/>
					
				</div>
		  );
	}
}


export default FullProductos;
