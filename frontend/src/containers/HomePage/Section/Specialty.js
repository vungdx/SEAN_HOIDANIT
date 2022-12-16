import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { changeLanguageApp } from "../../../store/actions/appActions";
//import css files
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialtyImg1 from '../../../assets/images/slider1.jpg';
import SpecialtyImg2 from '../../../assets/images/slider2.jpg';
import SpecialtyImg3 from '../../../assets/images/slider3.jpg';
import SpecialtyImg4 from '../../../assets/images/slider4.jpg';
import SpecialtyImg5 from '../../../assets/images/slider5.jpg';
import SpecialtyImg6 from '../../../assets/images/slider6.jpg';
import SpecialtyImg7 from '../../../assets/images/slider7.jpg';
import SpecialtyImg8 from '../../../assets/images/slider8.jpg';
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
      slidesToShow: 4,
      slidesToScroll: 1
    }
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
                  <img src={SpecialtyImg1} alt='' />
                  <div>Tư vấn, trị liệu Tâm lý từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg2} alt='' />
                  <div>Sức khỏe tâm thần từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg3} alt='' />
                  <div>Bác sĩ Da liễu từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg4} alt='' />
                  <div>Bác sĩ Cơ-Xương-Khớp từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg5} alt='' />
                  <div>Bác sĩ Cột sống từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg6} alt='' />
                  <div>Bác sĩ Tiêu hóa từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg7} alt='' />
                  <div>Bác sĩ Nội khoa từ xa</div>
                </div>
                <div className="img-customize">
                  <img src={SpecialtyImg8} alt='' />
                  <div>Bác sĩ Nam học từ xa</div>
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
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
