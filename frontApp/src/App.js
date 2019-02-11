import React, { Component } from 'react';
import SigninForm from "./components/SigninForm";
import RegistrationForm from "./components/RegistrationForm";
import MainPage from "./components/MainPage"
import Profile from "./components/Profile"
import Mission from "./components/Mission"
import { BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";


class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Router>
          <Switch>
          <Route exact path="/signin" component={SigninForm} />
          <Route exact path="/signup" component={RegistrationForm} /> 
          <Route exact path="/main/:id" component={MainPage}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/mission" component={Mission}/>
          </Switch>  
        </Router>
      </div>
    );
  }
}

export default App;
