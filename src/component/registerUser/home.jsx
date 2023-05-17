import React, { useEffect, useState } from 'react'
import http from '../axios/http';
import { NavLink } from 'react-router-dom';


export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/getusers').then(response => {
            setUsers(response.data.users);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUser = (id) => {
        console.log(id);
        http.get('/deleteuser/' + id).then(response => {
            // setUsers(response.data);
            fetchAllUsers();
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Address</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.new_user ? user.new_user.contact : ''}</td>
                            <td>{user.new_user ? user.new_user.address : ''}</td>
                            <td> <NavLink className="btn btn-primary" to={`/edit/${user.id}`}>Edit</NavLink></td>
                            <td> <NavLink className="btn btn-danger" onClick={() => deleteUser(user.id)} >Delete</NavLink></td>
                        </tr>
                    ))}


                </tbody>
            </table>

        </div >
    )
}