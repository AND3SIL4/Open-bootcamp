import React, {useState} from 'react';

const Contador = () => {
  const contadorInicial = 0
  const [contador, setContador] = useState(contadorInicial);
  const [message, setMessage] = useState('');
  function sumarContador () {
    setContador(contador + 1)
    setMessage('')
  }
  const reIniciarContador = () => {
    if (contador === 0) {
      setMessage('El contador ya se encuentra en 0')
    } else {
      setContador(0)
    }
  }
  function restarContador() {
    if (contador === 0) {
      setMessage('El contador no puede ser menor a 0')
    } else {
      setContador(contador - 1)
    }
  }
  return (
    <div>
      <h1>Puntos del contador: {contador}</h1>
      {message}
      <div>
        <button onClick={sumarContador}>Sumar puntos al contador</button>
        <button onClick={restarContador}>Restar puntos al contador</button>
        <button onClick={reIniciarContador}>Re-iniciar contador</button>
      </div>
    </div>
  );
}

export default Contador;
