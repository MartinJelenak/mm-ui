import React, { useState, useEffect } from 'react'
import Api from "../services/api"
import AuthService from "../services/auth.service";

export default function BoardModerator() {
    const [title, setTitle] = useState('')
    const [prologue, setPrologue] = useState('')
    const [article, setArticle] = useState('')
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        setCurrentUser(AuthService.getCurrentUser())
    }, [])

    function titleChange(e) {
        setTitle(e.target.value)
    }
    function prologueChange(e) {
        setPrologue(e.target.value)
    }
    function articleChange(e) {
        setArticle(e.target.value)
    }


    const submitHandle = e => {
        e.preventDefault();

        let data = {
            title,
            prologue,
            article,
            confirmation: [currentUser.email]
        }

        Api.insertBlog(
            data
        ).then(
            response => {
                console.log(response)
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
        setTitle('');
        setPrologue('');
        setArticle('');
    }

    return (
        <div className="container mt-3">
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input onChange={titleChange} type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Prologue</label>
                    <input onChange={prologueChange} type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Article</label>
                    <textarea onChange={articleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <div>
                <button onClick={submitHandle} type="button" className="btn btn-primary float-right">Submit</button>
            </div>
        </div >
    )
}
