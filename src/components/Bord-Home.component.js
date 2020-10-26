import React, { Component, useState, useEffect } from "react";
import Api from '../api'
import UserService from "../services/user.service";

export default function Home() {
    const [data, setData] = useState({ data: [] })

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
            <div className="card-group">
                {data.data.map((row, index) =>
                    (() => {
                        switch (row.confirmation.length) {
                            case 2: return (
                                <div className="col-sm-6 col-md-4" key={index} >
                                    <div className="card" style={{ marginBottom: "30px" }}>
                                        <img className="card-img-top" src="https://picsum.photos/300/150" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{row.title}</h5>
                                            <p className="card-text">{row.prologue}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            )
                            default: return <></>;
                        }
                    })()
                )}
            </div>
        </div >
    )
}
