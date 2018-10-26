

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/proFile.css"
import api from '../Api';
import { Redirect } from "react-router-dom";
import Input from "./common/Input"
import Button from "./common/Button"


const InputDiv = ({ type, placeholder, value, text, onChange, }) => {
    return <div class="pedit_row">
        <div class="pedit_label">{text}</div>
        <div class="pedit_labeled">
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    </div>

}
const InputDivAvatar = () => {
    return <div class="avatar">
        <div class="photo"><img id="img" src="./style/cat.jpeg" alt="asd" width="250" height="250" /></div>
        <form action="/profile" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
        </form>
    </div>
}



class Profail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            result: "",
            isRedirectTo: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    }


    async handleSubmit(event) {
        event.preventDefault();
        try {
            await api.registerUser({
                login: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age
            })
            this.setState({ isRedirectTo: true })
        }
        catch (err) {
            console.log(err)
            this.setState({ result: "err" })
        }
    }


    handleEmailChange(event) {
        this.setState({ email: event.target.value });

    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }
    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }
    handleAgeChange(event) {
        this.setState({ age: event.target.value });
    }


    render() {
        return (
            <React.Fragment>
                {/* {this.state.isRedirectTo ? <Redirect to="/signin"></Redirect> : ""} */}
                <form class="form-signin" enctype="form-data" action="/profile" id="loginForm" method="post" name="userForm">
                    <div class="proFile">
                        <InputDivAvatar/>
                        <div class="information_field">
                            <InputDiv text="Fist name" value={this.state.firstName} onChange={this.handleFirstNameChange} type="text" />
                            <InputDiv text="Last name" value={this.state.lastName} onChange={this.handleLastNameChange} type="text" />
                            <InputDiv text="Age" value={this.state.age} onChange={this.handleAgeChange} type="number" />
                            <InputDiv text="Role" value={this.state.fRole} onChange={this.handleRoleChange} type="text" />
                            <div class="pedit_row"><Button type="button" text="Change" />
                                <Button type="submit" text="Save" />
                            </div>
                        </div>

                    </div>
                </form>
            </React.Fragment>
        );

    }
}
export default Profail;