

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

class Profail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:"",
            cookie:document.cookie,
            firstName: "",
            lastName: "",
            age: "",
            result:true,
            avatar:"",
            role:"",
            isRedirectTo: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleSubmit1 = this.handleSubmit1.bind(this)
        console.log(props.match.params)
    }

    handleEmailChange = (event)=> {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange= (event)=> {
        this.setState({ password: event.target.value });
    }
    handleFirstNameChange= (event)=>  {
        this.setState({ firstName: event.target.value });
    }
    handleLastNameChange= (event)=>  {
        this.setState({ lastName: event.target.value });
    }
    handleAgeChange= (event)=>  {
        this.setState({ age: event.target.value });
    }
 
    async handleSubmit1() {
            try {
            let res = await api.profileRender({
                 cookie:this.state.cookie
                });
                this.setState({data:res.data.user})
            }
            catch (err) {
                console.log(err)

            }
        }
        componentDidMount() {
            this.setState({result:true})
            if(this.state.result){
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
                <form className="form-signin" enctype="form-data" action="/profail" id="loginForm" method="post" name="userForm">
                    <div className="proFile">
                        <InputDivAvatar/>
                        <div className="information_field">
                            <InputDiv text="Fist name" value={this.state.result?this.state.data.firstName:this.state.firstName} onChange={this.handleFirstNameChange} type="text" />
                            <InputDiv text="Last name" value={this.state.data.lastName} onChange={this.handleLastNameChange} type="text" />
                            <InputDiv text="Age" value={this.state.data.Age} onChange={this.handleAgeChange} type="number" />
                            <InputDiv text="Role" value={this.state.data.Role} onChange={this.handleRoleChange} type="text" />
                            <div className="pedit_row"><Button type="button" text="Change"  />
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