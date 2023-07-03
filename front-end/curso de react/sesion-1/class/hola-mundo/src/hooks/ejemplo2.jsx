/**
  * Ejemplo de uso de:
  * - useState()
  * - useRef()
  * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

  // Crear dos contadores distintos
  // Cada uno en estado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable con el elemeto del DOM del componente (vista HTML)

  const miRef = useRef()

  const incrementar1 = () => {
    setContador1(contador1 + 1)
  }

  const incrementar2 = () => {
    setContador2(contador2 + 2 )
  }

  /**Se Ejecuta siempre al ejecutar cualquier ejecucion*/
  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
  //   console.log('mostrando referencia al elemento del DOM: ');
  //   console.log(miRef);
  // })

  /**Se ejecuta solo cuando se cambia el contador 1*/
  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
  //   console.log('mostrando referencia a elemento del DOM');
  //   console.log(miRef);
  // }, [contador1]);

  /**Se ejecuta cuando hay cambios en el contador 1 o contador 2 */
  useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
    console.log('mostrando referencia a elemento del DOM');
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>Ejemplo de useState, useRef, useEffect</h1>
      <h2>CONTADOR 1: { contador1 }</h2>
      <h2>CONTADOR 2: { contador2 }</h2>
      {/* Elemento referenciado  */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      <div>
        <button onClick={incrementar1} >incrementar1</button>
        <button onClick={incrementar2} >incrementar2</button>
      </div>

    </div>
  );
}

export default Ejemplo2;
