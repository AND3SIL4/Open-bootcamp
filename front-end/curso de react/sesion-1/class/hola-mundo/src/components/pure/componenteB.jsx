import React, { Component } from 'react';

class ComponenteB extends Component {
  toggleConectado = () => {
    const { contacto } = this.props
    contacto.conectado = !contacto.conectado
    this.forceUpdate()
  }
  render() {
    const { contacto } = this.props
    const estadoConectado = contacto.conectado ? 'Contacto en linea' : 'Contacto no disponible'
    return (
      <div>
        <p>Estate: {estadoConectado}</p>
        <button onClick={this.toggleConectado}>Cambiar estado</button>
      </div>
    );
  }
}

export default ComponenteB;
