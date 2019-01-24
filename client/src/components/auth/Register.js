import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    // takes care of this syntax with use of bind
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="breadcumb-area bg-img bg-overlay bg2register">
          <div className="bradcumbContent">
            <p>Its Free</p>
            <h2>Sign Up!</h2>
          </div>
        </div>

        <div className="login-area section-padding-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="login-content">
                  <h3>Create your Musik Relapse Account</h3>
                  {/* <!-- Register Form --> */}
                  <div className="container login-form">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.name
                          })}
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}

                        />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.email
                          })}
                          placeholder="Email Address"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}

                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.password
                          })}
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.password2
                          })}
                          placeholder="Confirm Password"
                          name="password2"
                          value={this.state.password2}
                          onChange={this.onChange}
                        />
                        {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                      </div>

                      <small id="emailHelp" className="form-text text-muted"><i className="fa fa-lock mr-2"></i>We'll never share your information with anyone else.</small>
                      <input type="submit" className="oneMusic-btn mt-30" />
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
