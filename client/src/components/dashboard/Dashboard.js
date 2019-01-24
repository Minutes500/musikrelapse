import React from "react";
import PropTypes from "prop-types";
import  { connect } from "react-redux";
import { getCurrentProfile} from "../../actions/profileActions";
import Spinner from "../../components/common/Spinner";





class Dashboard extends React.Component{
    componentDidMount(){
        this.props.getCurrentProfile();
}
    render(){
        // eslint-disable-next-line
        const {user} = this.props.auth;
        const {profile, loading} = this.props.profile;
        /*eslint-disable no-unused-vars*/
        let dasboardContent;
        /*eslint-disable no-unused-vars*/
        if(profile === null || loading){
            dasboardContent = <Spinner />
        }else{
            // check if login user has a profile
            if(Object.keys(profile).length > 0){
                dasboardContent = <h4>Display profile</h4>
            }else{
                // user is logged in but no profile
                dasboardContent =(
                    <div className="login-content">
                        <p className="lead text-muted">Welcome { user.name} </p>
                        <p>Click to listen to Music!</p>
                        {/* <Link to ="/create.html" className="btn btn-lg btn-info">
                        Listen To Music
                        </Link> */}
                        <a href="https://musikrelapse1.herokuapp.com/">Press</a>
                    </div>

                )
            }
        }
        return (
            <div>
        <div className="breadcumb-area bg-img bg-overlay bg1login">
          <div className="bradcumbContent">
            <p>New music from Khalid and Post Malone!</p>
            <h2>Click to Listen!</h2>
          </div>
        </div>

        <div className="login-area section-padding-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
            
                {dasboardContent}
                

                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
}

Dashboard.propTypes ={
    getCurrentProfile:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);