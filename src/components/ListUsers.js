import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService';
import { Link } from 'react-router';

export const ListUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    showUsers();
  }, [])

  const showUsers = () => {
    UserService.getAll().then(response => {
      setUsers(response.data);
    }).catch(e => {
      console.log(e);
    })
  }

  const deleteUser = (id) => {
    UserService.delete(id).then(response => {
      showUsers();
      alert("Usuario borrado");
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <div className='container'>

      <div className='container'>
        <div className='container'>
          <h2 className='text-center' style={{ marginTop: "1em", marginBottom: "1em"}}>Usuarios registrados</h2>
        </div>

        <div className='d-flex justify-content-center' style={{marginBottom: "1em"}}>
          <Link to='/save-user' className='btn btn-primary mb-2'>Agregar usuario</Link>
        </div>
      </div>

      <div className='table-responsive'>
      <table className='table table-bordered table-striped table-hover'>
        <thead>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Documento ID</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Operación</th>
        </thead>
        <tbody>
          {
            users.map(
              user =>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.idDocument}</td>
                  <td>{user.address}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-warning' to={`/update-user/${user.id}`}>Editar</Link>
                    <button style={{ marginLeft: "1px" }} className='btn btn-danger' onClick={() => deleteUser(user.id)}>Borrar</button>
                  </td>
                </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default ListUsers;