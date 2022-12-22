import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { changeLanguageApp } from "../../../store/actions/appActions";
//import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialtyImg1 from "../../../assets/images/slider1.jpg";
import SpecialtyImg2 from "../../../assets/images/slider2.jpg";
import SpecialtyImg3 from "../../../assets/images/slider3.jpg";
import SpecialtyImg4 from "../../../assets/images/slider4.jpg";
import SpecialtyImg5 from "../../../assets/images/slider5.jpg";
import SpecialtyImg6 from "../../../assets/images/slider6.jpg";
import SpecialtyImg7 from "../../../assets/images/slider7.jpg";
class Specialty extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    const { language } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <div className="specialty-content">
              <Slider {...settings}>
                <div className="img-customize">
                  <img src={SpecialtyImg1} alt="" />
                  <div>Cơ Xương Khớp</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg2} alt="" />
                  <div>Thần kinh</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg3} alt="" />
                  <div>Tiêu hoá</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg4} alt="" />
                  <div>Tim mạch</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg5} alt="" />
                  <div>Tai Mũi Họng</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg6} alt="" />
                  <div>Cột sống</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg7} alt="" />
                  <div>Y học Cổ truyền</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
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
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
