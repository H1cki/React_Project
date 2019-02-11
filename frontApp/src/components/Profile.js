

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/proFile.css"
import api from '../Api';
import { Redirect } from "react-router-dom";
import Input from "./common/Input"
import Button from "./common/Button"


const InputDiv = ({ type, placeholder, value, text, onChange, }) => {
    return <div className="pedit_row">
        <div className="pedit_label">{text}</div>
        <div className="pedit_labeled">
            <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    </div>

}
const InputDivAvatar = () => {
    return <div className="avatar">
        <div className="photo"><img id="img" src="./style/cat.jpeg" alt="asd" width="250" height="250" /></div>
        <form action="/profile" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
        </form>
    </div>
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            cookie: document.cookie,
            firstName: "",
            lastName: "",
            age: "",
            result: true,
            avatar: "",
            role: "",
            isRedirectTo: false
        }

        console.log(props.match.params)
    }

    handleClick = () => {
        try {
            let res = api.profileRender({
                age: this.state.age,
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                avatar: this.state.avatar,
                role: this.state.role

            });
            this.setState({ data: res.data.user })
        }
        catch (err) {
            console.log(err)

        }

    }

    disabledClick = () => {

        this.setState({ result: false })

    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }
    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handleAgeChange = (event) => {
        this.setState({ age: event.target.value });
    }
    handleRoleChange = (event) => {
        this.setState({ role: event.target.value });
    }

    async handleSubmit1() {
        try {
            let res = await api.profileRender({
                cookie: this.state.cookie
            });
            this.setState({ data: res.data.user })
        }
        catch (err) {
            console.log(err)

        }
    }
    componentDidMount() {
        this.setState({ result: true })
        if (this.state.result) {
            this.handleSubmit1();

        }
    }

    // componentDidMount() {
    // //     var _this = this;
    // //     axios.get('/path/to/user-api').then(function(response) {
    // //       _this.setState({users: response.data})
    // //     });
    // //   }

    // componentDidMount(){

    //     api.sdfsffsfds

    // }
    render() {
        return (
            <React.Fragment>
                {/* {this.state.isRedirectTo ? <Redirect to="/signin"></Redirect> : ""} */}
                <form className="form-signin">
                    <div className="profile">
                        <InputDivAvatar />
                        <div className="information_field">
                            <InputDiv text="Fist name" value={this.state.result ? this.state.data.firstName : this.state.firstName} onChange={this.handleFirstNameChange} type="text" />
                            <InputDiv text="Last name" value={this.state.result ? this.state.data.lastName : this.state.lastName} onChange={this.handleLastNameChange} type="text" />
                            <InputDiv text="Age" value={this.state.result ? this.state.data.Age : this.state.age} onChange={this.handleAgeChange} type="number" />
                            <InputDiv text="Role" value={this.state.result ? this.state.data.Role : this.state.role} onChange={this.handleRoleChange} type="text" />
                            <div className="pedit_row"><Button onClick={this.disabledClick} type="button" text="Change" />
                                <Button onClick={this.handleClick} type="submit" text="Save" />
                            </div>
                        </div>

                    </div>
                </form>
            </React.Fragment>
        );

    }
}
export default Profile;
