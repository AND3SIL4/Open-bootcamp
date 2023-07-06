import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contac'
import '../../../styles/todo.css'

function ContactForm({ add }) {

  const nameRef = useRef('')
  const phoneRef = useRef('')
  const descriptionRef = useRef('')
  const statusRef = useRef(false)

  function addContact(e) {
    e.preventDefault()
    const newContact = new Contact(
      nameRef.current.value,
      phoneRef.current.value,
      descriptionRef.current.value,
      statusRef.current.value,
    )
    add(newContact)
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <h3>Add new contact</h3>
      </div>
      <div className='card-body'>
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
          <input className='form-control form-control-lg' ref={nameRef} type='text' id='inputName' placeholder='Contact name' required></input>
          <input className='form-control form-control form-control-lg' ref={phoneRef} type='number' id='inputPhone' placeholder='Contact phone' required></input>
          <input className='form-control form-control form-control-lg' ref={descriptionRef} type='text' id='inputDescription' placeholder='Contact description' required></input>
          <select className='form-select form-select-lg' ref={statusRef} id='selectStatus' required placeholder='Contact status'>
            <option>Disconect</option>
            <option>Online</option>
          </select>
        <button type='submit' className='btn btn-success btn-lg ms-2 col-12'>Save</button>
        </div>
      </form>
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
}

export default ContactForm

