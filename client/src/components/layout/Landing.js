import React, { Component } from "react";
import { Animated } from "react-animated-css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




class Landing extends Component {
    render() {
        return (
            
            <div>
            
                <div className="hero-slides" >
                    {/* <!-- Single Hero Slide --> */}
                    <div className="hero-area">
            <OwlCarousel
             className="owl-carousel"
             loop
             items="1"
             merge="true"
             autoplay="true"
             dotsContainer="false"
             >
                    <div className="single-hero-slide d-flex align-items-center justify-content-center">
                        {/* <!-- Slide Img -->*/}
                        
                        <div className="slide-img bg-img img1"></div>
                        {/* <!-- Slide Content --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                        <Animated animationIn="fadeInUp" animationInDelay ={0.1} isVisible={true}>
                                            <h6>Enjoy Music</h6>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" animationInDelay ={0.3} isVisible={true}>
                                            <h2>A Music Visualizer Experience<span>A Music Visualizer Experience</span></h2>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" animationInDelay ={0.5} isVisible={true}>
                                            <a href="/register" className="btn oneMusic-btn mt-50">Register Now<i className="fa fa-angle-double-right"></i></a>
                                        </Animated>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Single Hero Slide --> */}
                    <div className="single-hero-slide d-flex align-items-center justify-content-center">
                        {/* <!-- Slide Img --> */}
                        <div className="slide-img bg-img img2"></div>
                        {/* <!-- Slide Content --> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                        <Animated animationIn="fadeInUp" animationInDelay={0.1} isVisible={true}>
                                            <h6>Playlist</h6>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" animationInDelay={0.3} isVisible={true}>
                                            <h2>Make your own Playlist<span>Make your own Playlist</span></h2>
                                        </Animated>
                                        <Animated animationIn="fadeInUp" animationInDelay={0.5} isVisible={true}>
                                            <a href="/register" className="btn oneMusic-btn mt-50">Register Now<i className="fa fa-angle-double-right"></i></a>
                                        </Animated>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </OwlCarousel>
                </div>
            </div>
          

</div>
        )
    }
}

export default Landing;
