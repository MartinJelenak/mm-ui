import React, { useEffect, useState } from 'react'
import UserService from "../services/user.service";
import api from '../services/api'

export default function () {
    const [data, setData] = useState({ data: [] });

    useEffect(() => {
        UserService.getAdminBoard().then(
            res => {
                setData(res.data)
            },
            error => {
                this.setState({
                    content:
                        (error.res &&
                            error.res.data &&
                            error.res.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }, [])

    async function deleteClickHandle(id) {
        await api.deleteUserById(id)
            .then(res => {
                // window.alert(`Id ${id}wos remmoved.`)
                console.log(id)
            })
    }

    return (
        <div className="container">
            <h3>User list</h3>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((row, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>
                                <button type="button" class="btn btn-default" aria-label="Left Align">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                </button>
                                <button onClick={() => deleteClickHandle(row._id)} type="button" class="btn btn-default" aria-label="Left Align">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
