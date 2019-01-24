import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="breadcumb-area bg-img bg-overlay bg3contact">
                    <div className="bradcumbContent">
                        <p>Found Bugs? Contact us!</p>
                        <h2>Contact</h2>
                    </div>
                </section>
                <section className="contact-area section-padding-100-0">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-lg-3">
                                <div className="contact-content mb-100">
                                    {/* <!-- Title --> */}
                                    <div className="contact-title mb-50">
                                        <h5>Contact Info</h5>
                                    </div>

                                    {/* <!-- Single Contact Info --> */}
                                    <div className="single-contact-info d-flex align-items-center">
                                        <div className="icon mr-30">
                                            <span className="icon-placeholder"></span>
                                        </div>
                                        <p>3401 Grays Ferry Ave, Philadelphia, PA 19146</p>
                                    </div>

                                    {/* <!-- Single Contact Info --> */}
                                    <div className="single-contact-info d-flex align-items-center">
                                        <div className="icon mr-30">
                                            <span className="icon-smartphone"></span>
                                        </div>
                                        <p>123 123 123</p>
                                    </div>

                                    {/* <!-- Single Contact Info --> */}
                                    <div className="single-contact-info d-flex align-items-center">
                                        <div className="icon mr-30">
                                            <span className="icon-mail"></span>
                                        </div>
                                        <p>youremail@email.com</p>
                                    </div>

                                    {/* <!-- Contact Social Info --> */}
                                    {/* <div className="contact-social-info mt-50">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div> */}

                                </div>
                            </div>

                            <div className="col-12 col-lg-9">
                                {/* <!-- ##### Google Maps ##### --> */}
                                <div className="map-area mb-100">
                                    <iframe title ="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12235.980395049572!2d-75.1994815!3d39.9414993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1832c05f0e57070!2sPennovation+Center!5e0!3m2!1sen!2sus!4v1547204201634" allowFullScreen></iframe>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
export default Contact;