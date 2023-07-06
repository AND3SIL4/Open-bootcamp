import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contac'

function ContacComponent({ contac, remove, change }) {

  useEffect(() => {
    console.log('Contact has been created');
    return () => {
      console.log(`Contact ${contac.name} is going to remove`);
    };
  }, [contac]);

  /**
  * Funcion que retorna un badged de acuerdo al estatus del contacto
  */
  
  function contacStatusBadge() {
    if (contac.status === true) {
      return (
        <h6 className='mb-0'>
          <span className='badge bg-success' style={{cursor:'pointer'}}>
            Online
          </span>
        </h6>
      )
    } else {
      return (
      <h6 className='mb-0'>
        <span className='badge bg-secondary' style={{cursor:'pointer'}}>
          Disconect
        </span>
      </h6>
      )
    }
  }



  return (
    <tr className='fw-normal'>
      <th scope='row'>
        <span className='ms-2'>{ contac.name }</span>
      </th>
      <td className='align-middle'>
        <span>{ contac.phone }</span>
      </td>
      <td className='align-middle'>
        <span>{ contac.description}</span>
      </td>
      <td className='align-middle' >
        { contacStatusBadge() }
      </td>
      <td className='align-middle'>
        <i className='bi-trash' style={{ 'color': 'tomato', 'cursor':'pointer'  }} onClick={() => remove(contac)}></i>
      </td>
      <td className='align-middle'>
        <button className='btn btn-primary' onClick={()=> change(contac)}>Change status</button>
      </td>

    </tr>
  )
}

ContacComponent.propTypes = {
  contac: PropTypes.instanceOf(Contact).isRequired,
  remove: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
}

export default ContacComponent


