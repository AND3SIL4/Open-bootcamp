/**
* Componente que va a tener un lformulario para la autenticacion de usuarios
*/

import React, { useState } from 'react';

const LoginForm = () => {

  const inicialCredencials = [
    {
      user: '',
      password: ''
    }
  ]

  const [credencials, setCredencials] = useState(inicialCredencials);

  return (
    <div>
      
    </div>
  );
}

export default LoginForm;
