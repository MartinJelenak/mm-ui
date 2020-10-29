import React, { Component, useState, useEffect } from "react";
import Api from '../api'
import Home from './Home'

export default function HomeComponent() {
    const [data, setData] = useState({ data: [] })
    const [content, setContent] = useState('')

    useEffect(() => {
        Api.getAllBlogs().then(
            res => {
                console.log(res)
                setData(res.data)
            },
            error => {
                setContent({
                    content:
                        (error.res &&
                            error.res.data &&
                            error.res.data.message) ||
                        error.message ||
                        error.toString()
                })
            }
        );
    }, [])

    return (
        <Home data={data.data} />
    )
}

