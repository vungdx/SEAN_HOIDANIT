import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { changeLanguageApp } from "../../../store/actions/appActions";
//import css files
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }


  render() {
    const { language } = this.props
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Fragment>
        <div className="section-specialty">
          <div className="specialty-content">
            <Slider {...settings}>
              <div className="img-customize">
                <h3>3</h3>
              </div>
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language)=> dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
