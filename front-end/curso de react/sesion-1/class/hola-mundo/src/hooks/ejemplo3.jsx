/**
  Ejemplo de hooks:
  - useState()
  - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns componente 1 dispone de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {

  const state = useContext(miContexto)

  return (
    <div>
      <h1>
        El token es: {state.token}
      </h1>
      {/* pintar el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
}

const Componente2 = () => {

  const state = useContext(miContexto)

  return (
    <div>
      <h2>
        La sesion es: {state.sesion}
      </h2>
    </div>
  );
}

export default function MiComponenteConContexto() {

  const estadoInicial = {
    token: '1234567',
    sesion: 1
  }

  // Crear el estado de este componente

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: 'JJDSFUUD43458',
      sesion: sessionData.sesion + 1
    })
  }

  return (
    <miContexto.Provider value={sessionData}>
      <h1>Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion} >Actualizar Sesión</button>
    </miContexto.Provider>
  )
}

