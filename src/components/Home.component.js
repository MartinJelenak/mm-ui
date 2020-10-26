import React, { Component, useState, useEffect } from "react";
import Api from '../api'
import UserService from "../services/user.service";

export default function Home() {
    const [data, setData] = useState({ data: [] })

    // useEffect(() => {
    //     UserService.getPublicContent().then(
    //         response => {
    //             setData(response.data)
    //         },
    //         error => {
    //             this.setState({
    //                 data:
    //                     (error.response && error.response.data) ||
    //                     error.message ||
    //                     error.toString()
    //             });
    //         }
    //     );
    // }, [])

    useEffect(() => {
        Api.getAllBlogs().then(
            res => {
                console.log(res)
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

    return (
        <div className="container mt-3">
            <div class="card-group">
                {data.data.map(row => (

                    <div class="card">
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{row.title}</h5>
                            <p class="card-text">{row.prologue}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}