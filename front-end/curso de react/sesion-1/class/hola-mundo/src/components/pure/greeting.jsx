import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Componente de tipo clase */
class Greeting extends Component {
  constructor(props)/* propiedades en el metodo constructor */ {
    super(props); 
    this.state = { /* Elementos privados e inmutables */
      age: 21
    }
  }
  render() {
    return (
      <div>       
        <h1>¡HOLA {this.props.name}!</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }
  /*Metodo para cambiar el estado privado de age */
  birthday = () => {
    this.setState((prevState) => (
      {age: prevState.age +1}
    ))
  }
}
Greeting.propTypes = {
  name: PropTypes.string,
};
export default Greeting;
