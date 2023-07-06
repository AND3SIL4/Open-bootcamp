import React, { useEffect, useState } from 'react';
import ContacComponent from '../pure/contac';
import { STATUS } from '../../models/status';
import ContactForm from '../pure/forms/contactForm';
import '../../styles/todo.css'
import { Contact } from '../../models/contac';

const ContacList = () => {

  const contact1 = new Contact(
    'Andres',
    '3212413656',
    'Description',
    true,
  )

  const [contacts, setContacts] = useState([contact1]);

  useEffect(() => {
    console.log('Contact has been created successful...');
    return () => {
      console.log('Contact is going to unmount');
    };
  }, [contacts]);

  function deleteContact(contact) {
    console.log('Contact has been deleted');
    const index = contacts.indexOf(contact)
    const tempContact = [...contacts]
    tempContact.splice(index, 1)
    setContacts(tempContact)
  }

  function addContact(contact) {
    console.log('Contact created');
    // const index = contacts.indexOf(contact)
    const tempContact = [...contacts]
    tempContact.push(contact)
    setContacts(tempContact)
  }

  function changeStatus(contact) {
    const index = contacts.indexOf(contact)
    const tempContact = [...contacts]
    tempContact[index].status = !tempContact[index].status
    setContacts(tempContact)
  }

  return (
    <div className='principal'>
      <div className='col-7'>
        <div className='card'>
          <div className='card-header'>
            <h5>Contacts</h5>
          </div>
          <div className='card-body container-fluid' data-mbd-perfect-scrollbar
            style={{ position: "relative", height: "400px" }}>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Phone</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>State</th>
                  <th scope='col'>Delete</th>
                  <th scope='col'>Change status</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contac, index) => {
                  return (
                    <ContacComponent key={index} contac={contac} remove={deleteContact} change={changeStatus}></ContacComponent>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='col-4'>
        <ContactForm add={addContact}></ContactForm>
      </div>
    </div>
  );
}

export default ContacList;
