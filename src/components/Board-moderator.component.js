import React, { useState } from 'react'
import Api from "../api"

export default function BoardModerator() {
    const [title, setTitle] = useState('')
    const [prologue, setPrologue] = useState('')
    const [article, setArticle] = useState('')

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

                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );


    }

    return (
        <div className="container mt-3">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input onChange={titleChange} type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Prologue</label>
                    <input onChange={prologueChange} type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Article</label>
                    <textarea onChange={articleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            <div>
                <button onClick={submitHandle} type="button" class="btn btn-primary float-right">Submit</button>
            </div>
        </div >
    )
}
