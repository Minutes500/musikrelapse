import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import{loginUser} from "../../actions/authActions";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


componentDidMount(){
  if(this.props.auth.isAuthenticated){
    this.props.history.push("/dashboard")
  }
}
componentWillReceiveProps(nextProps){
if(nextProps.auth.isAuthenticated){
  this.props.history.push("/dashboard");
}
if(nextProps.errors){
  this.setState({errors:nextProps.errors})
}
}

onChange(e){
  this.setState({[e.target.name]:e.target.value});
}
onSubmit(e){
  e.preventDefault();
  const userData={
      
      email: this.state.email,
      password:this.state.password,
      
  }
  this.props.loginUser(userData)
}
  render() {
    return (
      <div>
        <div className="breadcumb-area bg-img bg-overlay bg1login">
          <div className="bradcumbContent">
            <p>See what’s new</p>
            <h2>Login</h2>
          </div>
        </div>

        <div className="login-area section-padding-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="login-content">
                  <h3>Welcome Back</h3>
                  {/* <!-- Login Form --> */}
                  <div className="login-form">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          className="form-control form-controlg"
                          placeholder="Email Address"
                          id="exampleInputEmail1"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        <small id="emailHelp" className="form-text text-muted"><i className="fa fa-lock mr-2"></i>We'll never share your email with anyone else.</small>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>
                      <input type="submit" className="oneMusic-btn mt-30" value="Login" />
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Login.propTypes ={
  loginUser:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired
  
}

const mapStateToProps = (state) =>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{ loginUser })(Login);