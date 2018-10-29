import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.css"
import Button from "./common/Button"
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:props
        }
        console.log(props)
        this.handleClick = this.handleClick.bind(this)

    }   

    handleClick() {
        function deleteCookie(name) {
            var cookieDate = new Date();
            cookieDate.setTime(cookieDate.getTime() - 1);
            var cookie = name += "=; expires=" + cookieDate.toGMTString();
            document.cookie = cookie;
        }
        deleteCookie("");
        console.log(document.cookie)
    }
    render() {
        return (
            <React.Fragment>
                {document.cookie !== "" ? "" : <Redirect to="/signin"></Redirect>}
                <div className="container-main">
                    <p className="btn btn-sm btn-outline-secondary" id="logout" onClick={this.handleClick}><Link to="/signin">logout</Link></p>
                    <button><Link exact to="/profile">Profile</Link></button>
                    <Button text={<Link exact to="usersList">Users</Link>}></Button>
                </div>
            </React.Fragment>
        )
    }

}

export default MainPage;