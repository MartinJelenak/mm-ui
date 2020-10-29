import React, { useState, useEffect } from 'react'
import Api from '../api';
import AuthService from "../services/auth.service";
import BlogManager from './BlogManager'

export default function BlogmanagerComponent() {

    const [resData, setResData] = useState({ data: [] })
    const [currentUser, setCurrentUser] = useState({})
    const [cr, setCr] = useState([])
    const [content, setContent] = useState('')



    useEffect(() => {
        Api.getAllBlogs().then(
            res => {
                console.log(res)
                setResData(res.data)
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
        setCurrentUser(AuthService.getCurrentUser())
    }, [])


    async function confirmClickHandle(row) {
        setCr(row.confirmation.push(currentUser.email))
        const data = {
            title: row.title,
            prologue: row.prologue,
            article: row.article,
            confirmation: row.confirmation.concat(cr)
        }

        await Api.updateBlogById(row._id, data)
            .then(res => {
                // window.alert(`Id ${id}wos remmoved.`)
                console.log(res)
                setCr([])
            })
    }


    async function deleteClickHandle(row) {

        let newData = resData.data
        for (let i = 0; i < newData.length; i++) {
            var obj = newData[i];
            if (row._id.includes(obj._id) == true) {
                let newArr = newData.splice(i, 1);
                console.log('najdem id')
                console.log(newData)
                setResData(
                    { data: newData }
                )
            }
        }
        await Api.deleteBlogById(row._id)
            .then(
                res => {
                    console.log(res.data.data._id)
                    console.log(row._id)
                })
    }

    return (
        <BlogManager data={resData.data} deleteClickHandle={deleteClickHandle} confirmClickHandle={confirmClickHandle} />
    )
}
