import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/signup.css"
import { Redirect } from     "react-router-dom";
import api from '../Api';
import Input from "./common/Input"
import Button from "./common/Button"
import { BrowserRouter as Router,Link} from "react-router-dom";

const InputDiv = ({ htmlFor, type, placeholder, value, text, onChange }) => {
    return <div className="form-group">
        <label htmlFor={htmlFor}>{text}</label>
        <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>

}
const TabDiv = () => {
    return <div className="tab">
        <ul className="nav nav-tabs" role="tablist">
            <li role="presentation"><h3>sign up</h3></li>
        </ul>
    </div>
}

class RegistrationForm extends Component {
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
                {this.state.isRedirectTo ? <Redirect to={"/signin"+ this.state.email }></Redirect> : ""}
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6" id="form-tab">
                            <TabDiv />
                            <form className="form-horizontal" onSubmit={this.handleSubmit} action="/signup" method="post" name="registerForm">
                                <InputDiv value={this.state.firstName} onChange={this.handleFirstNameChange} type="text" placeholder="First Name" htmlFor="exampleInputFirstName" text="First Name" />
                                <InputDiv value={this.state.LastName} onChange={this.handleLastNameChange} type="text" placeholder="Last Name" htmlFor="exampleInputLastName" text="Last Name" />
                                <InputDiv value={this.state.Email} onChange={this.handleEmailChange} type="text" placeholder="Email" htmlFor="exampleInputEmail" text="Email" />
                                <InputDiv value={this.state.Password} onChange={this.handlePasswordChange} type="text" placeholder="Password" htmlFor="exampleInputPassword" text="Password" />
                                <InputDiv value={this.state.Age} onChange={this.handleAgeChange} type="number" placeholder="Age" htmlFor="exampleInputAge" text="Age" />
                                <span >{this.state.result === "err" ? "user already exists" : null}</span>
                                <div className="form-group">
                                    <Button className="btn btn-default" type="submit" text="Sign up" />
                                  <a><Link to="/signIn">sign in</Link></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}
export default RegistrationForm;