import React, { useEffect, useState } from 'react';

const ClockF = (props) => {
  
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const [nombre, setNombre] = useState('Andres Felipe');
  const [apellidos, setApellidos] = useState('Silva');

  useEffect(() => {
    //*componentDidMount 
    const timerID = setInterval(() => {
      tick();
    }, 1000);

    //*componentWillUnMount
    return () => {
      clearInterval(timerID)
    };
  }, []);

  const tick = () => {
    setFecha(new Date())
    setEdad((prevEdad)=>prevEdad+1)
  }

  return (
    <div>
      <h2>Hora actual: {fecha.toLocaleTimeString()}</h2>
      <h3>{nombre}{apellidos}</h3>
      <h2>Edad: { edad }</h2>
    </div>
  );
}
export default ClockF;
