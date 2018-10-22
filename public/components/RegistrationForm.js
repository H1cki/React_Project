
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            result: ""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/signup",
            data: JSON.stringify({
                login: this.state.email,
                password: this.state.password,
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                age: this.state.age
            }),
            dataType: "json",
            contentType: "application/json",
            success: (data) => {
                location.href = '/'
                this.setState({ result: "successs" });
            },
            error: (err) => {
                this.setState({ result: "err" });
                console.log("err", err);
            }
        });
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
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <div className="tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation"><a aria-controls="profile" role="tab" data-toggle="tab">sign
                                 up</a></li>
                            </ul>
                        </div>
                        <div  className="tab-pane fade active in" id="Section2"></div>
                        <form className="form-horizontal" onSubmit={this.handleSubmit} action="/signup" method="post" name="registerForm">
                            <div className="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleFirstNameChange}
                                    required autoFocus/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Last Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleLastNameChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email address"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                    required  />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    required />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Age</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Age"
                                    value={this.state.age}
                                    onChange={this.handleAgeChange}
                                    required />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-default">Sign up</button>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        );

    }
}
ReactDOM.render(
    <RegistrationForm></RegistrationForm>,
    document.getElementById("container")
)