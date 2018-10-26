import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.css"
import Button from "./common/Button"
import {Redirect} from "react-router-dom";


class MainPage extends Component{
    constructor(props){
         super(props);
         this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        function deleteCookie(name) { var cookieDate = new Date(); 
            cookieDate.setTime(cookieDate.getTime() - 1); 
            var cookie = name += "=; expires=" + cookieDate.toGMTString(); 
            document.cookie = cookie; }
            deleteCookie("");
            console.log(document.cookie)     
    }

    render()  {
        return   (
            <React.Fragment>
                {document.cookie !==""?"":<Redirect to="/signin"></Redirect>}
                <div className="container-main">
                <a className="btn btn-sm btn-outline-secondary" id="logout" href="/signin" onClick={this.handleClick} >logout</a>          
                <Button text={<a href="/main/:id/profile">Profile</a>}></Button> 
                <Button text={<a href="usersList">Users</a>}></Button>

            </div>
            </React.Fragment>
            )
            }   

        }
export default MainPage;