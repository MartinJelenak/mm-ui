import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    data:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <img src="http://placehold.it/1920x1080" class="img-fluid" alt="Responsive image" />
                </div>
                <div className="container">
                </div>
            </>
        );
    }
}