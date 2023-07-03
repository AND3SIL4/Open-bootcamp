import React, { Component } from 'react'
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../pure/componenteB'
import PropTypes from 'prop-types'

export default class ComponenteA extends Component {
  render() {
    const contacto = new Contacto('Andres', 'Silva', 'and@and.com', false)
    return (
      <div>
        <p>Name: { contacto.name }</p>
        <p>Las name: { contacto.lastName }</p>
        <p>Email: {contacto.email}</p>
        <ComponenteB contacto={ contacto }></ComponenteB>
      </div>
    )
  }
}

ComponenteA.propTypes = {
  Contacto: PropTypes.instanceOf(Contacto)
}
