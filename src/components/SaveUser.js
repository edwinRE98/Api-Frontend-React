import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService';
import { Link, useNavigate, useParams } from 'react-router';

export const SaveUser = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idDocument, setIdDocument] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  const saveUpdate = (e) => {
    e.preventDefault();
    const user = {name, lastName, idDocument, address, phoneNumber, email}

    if(id){
      UserService.update(id,user).then((response) =>{
        console.log(response.data);
        navigate('/users')
        alert("Usuario actualizado");
      }).catch(er => {
        console.log(er)
      })
    } else{
      UserService.save(user).then((response) => {
        console.log(response.data);
        navigate('/users')
        alert("Usuario registrado");
      }).catch(er => {
        console.log(er)
      })
    }

  }

  useEffect(() => {
    UserService.getById(id).then((response) => {
      setName(response.data.name);
      setLastName(response.data.lastName);
      setIdDocument(response.data.idDocument);
      setAddress(response.data.address);
      setPhoneNumber(response.data.phoneNumber);
      setEmail(response.data.email);
    }).catch(e => {
      console.log(e)
    })
  },[])

  const title = () =>{
    if(id){
      return <h3 className='text-center'>Edirtar usuario</h3>
    } else{
      return <h3 className='text-center'>Nuevo usuario</h3>
    }
  }

  return (
    <div>
      <div className='container' style={{ marginTop: "3em", marginBottom: "1em"}}>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'style={{ marginTop: "25px", marginBottom: "1px"}}>
              {
                title()
              }
            </h3>
            <div className='card-body'>
              <form style={{marginBottom: "20px"}}>
                <div className='form-group mb-2'>
                  <input 
                  type='text'
                  placeholder='nombre'
                  name='name'
                  className='form-control'
                  value={ name }
                  onChange={ (e) => setName(e.target.value)}>
                  </input>
                </div>

                <div className='form-group mb-2'>
                  <input 
                  type='text'
                  placeholder='apellido'
                  name='lastName'
                  className='form-control'
                  value={ lastName }
                  onChange={ (e) => setLastName(e.target.value)}>
                  </input>
                </div>

                <div className='form-group mb-2'>
                  <input 
                  type='text'
                  placeholder='documento ID'
                  name='idDocument'
                  className='form-control'
                  value={ idDocument }
                  onChange={ (e) => setIdDocument(e.target.value)}>
                  </input>
                </div>

                <div className='form-group mb-2'>
                  <input 
                  type='text'
                  placeholder='dirección'
                  name='address'
                  className='form-control'
                  value={ address }
                  onChange={ (e) => setAddress(e.target.value)}>
                  </input>
                </div>

                <div className='form-group mb-2'>
                  <input 
                  type='text'
                  placeholder='teléfono'
                  name='phoneNumber'
                  className='form-control'
                  value={ phoneNumber }
                  onChange={ (e) => setPhoneNumber(e.target.value)}>
                  </input>
                </div>

                <div className='form-group mb-2'>
                  <input 
                  type='text'
                  placeholder='correo'
                  name='email'
                  className='form-control'
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value)}>
                  </input>
                </div>
                <div className='d-flex justify-content-center' style={{marginTop: "1.5em"}}>
                  
                <button className='btn btn-primary' style={{width:"14em"}} onClick={ (e) => saveUpdate(e)}>Guardar</button>
                &nbsp; &nbsp;
                <Link to='/users' className='btn btn-secondary' style={{width:"14em"}}>Cancelar</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveUser;