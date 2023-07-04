import React, { useState } from 'react';

// Definiendo estilos en constantes

// ? estilo de usuario logueado
const loggedStyle = {
  fontWeight: 'bold',
  color: 'black'
}

// ? estilo de usuario no logueado
const unloggedStyle = {
  color: 'red',
  fontWeight: 'bold',
}

const GreetingStyled = (props) => {

  // Estado para el comoponente y controlar si el usuario esta logueado o no

  const [logged, setLogged] = useState(false);
  
  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? <p>Hola, { props.name }</p> : <p>Please login</p>}
      <button onClick={() => {
        console.log('boton pulsado')
        setLogged(!logged)
      }}>
        { logged ? 'logout' : 'login' }
      </button>
    </div>
  );
}

export default GreetingStyled;
