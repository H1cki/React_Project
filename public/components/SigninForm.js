



class SigninForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            result:""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/",
            data: JSON.stringify({ login:this.state.email, password:this.state.password }),
            dataType: "json",
            contentType: "application/json",
            success:(data)=> {
            let cookies = data.cookies;
            let Cookies = $.cookie("",cookies);
            location.href = '/main'
            this.setState({result:"successs"});
            },
            error: (err)=>{
                this.setState({result:"err"});
                console.log("err", err);
            } 
        });
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
        
    }
    handlePasswordChange(event){
        this.setState({password:event.target.value});
    }

    render() {
      return (
      <form onSubmit={this.handleSubmit} action="" className="form-signin">
      <h1 className="h4 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
          <input 
          className="form-control"
          type="email"
          placeholder="Email address"
          value={this.state.email}
          onChange={this.handleEmailChange}
          required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input 
          className="form-control"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          required
          />
          <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/>Remember me
        </label>
      </div>
     <span>{this.state.result=="err"?"User not found or wrong password":null}</span><br></br>
     <a id="signup" href="/signup">sign up</a>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
      );
    }
  }

  ReactDOM.render(
    <SigninForm></SigninForm>,
    document.getElementById("body")
)
    