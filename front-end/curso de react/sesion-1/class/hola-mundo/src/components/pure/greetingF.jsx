import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Componente de tipo funcion */
const GreetingF = (props) => {
  const [age, setage] = useState(21);
  /* Metodo para incrementar edad birday */
  const birthday = () => {
    setage(age + 1)
  }
  return (
    <div>
      <h1>Hola {props.name} desde componente funcional...</h1>
      <h2>Tu edad es de: { age }</h2>
      <div>
        <button onClick={ birthday }>Cumplir años</button>
      </div>
    </div>
  );
};


GreetingF.propTypes = {
  name: PropTypes.string
};


export default GreetingF;
