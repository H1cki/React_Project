
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/signin.css"
import api from '../Api';   
import { Redirect } from "react-router-dom";
import Input from "./common/Input"
import Button from "./common/Button"



class SigninForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            result: "",
            id:"",
            isRedirectTo: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    async handleSubmit(event) {
        event.preventDefault();

        try {

            let res = await api.signIn({
                login: this.state.email,
                password: this.state.password
            })
            console.log(res.data.token);
            document.cookie = (res.data.token)
            this.setState({id:res.data.id})
            this.setState({ isRedirectTo: true })
        
        }
        catch (err) {
            console.log(err);
            this.setState({ result: "err" })

        }




    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });

    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isRedirectTo ? <Redirect to={"/main/"+this.state.id}></Redirect> : ""}
                <form onSubmit={this.handleSubmit} action="" className="form-signin">
                    <h1 className="h4 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <Input type="email" placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange} />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <Input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                    <label><input type="checkbox" value="remember-me" /> Remember me</label><br />
                    <span>{this.state.result === "err" ? "User not found or Wrong password" : null}</span><br></br>
                    <Button className="btn btn-lg btn-primary btn-block" type="submit" text="Sign in"/>
                    <a id="signup" href="/signup">sign up</a>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>
            </React.Fragment>
        );
    }
}
export default SigninForm;