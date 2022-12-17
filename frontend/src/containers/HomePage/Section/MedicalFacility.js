import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import { changeLanguageApp } from "../../../store/actions/appActions";
//import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicalFacilityImg1 from "../../../assets/images/image1.jpg";
import MedicalFacilityImg2 from "../../../assets/images/image2.jpg";
import MedicalFacilityImg3 from "../../../assets/images/image3.jpg";
import MedicalFacilityImg4 from "../../../assets/images/image4.jpg";
import MedicalFacilityImg5 from "../../../assets/images/image5.jpg";
import MedicalFacilityImg6 from "../../../assets/images/image6.jpg";
import MedicalFacilityImg7 from "../../../assets/images/image7.jpg";
import MedicalFacilityImg8 from "../../../assets/images/image8.jpg";
class MedicalFacility extends Component {
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
      <div className="section-MedicalFacility">
        <div className="MedicalFacility-container">
          <div className="MedicalFacility-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="MedicalFacility-body">
            <div className="MedicalFacility-content">
              <Slider {...settings}>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg1}
                    alt=""
                  />
                  <div>Bệnh viện Hữu nghị Việt Đức</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg2}
                    alt=""
                  />
                  <div>Bệnh viện Chợ Rẫy</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg3}
                    alt=""
                  />
                  <div>Phòng khám Bệnh viện Đại học Y Dược 1</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg4}
                    alt=""
                  />
                  <div>Bệnh viện K - Cơ sở Phan Chu Trinh</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg5}
                    alt=""
                  />
                  <div>Bệnh viện Ung bướu Hưng Việt</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg6}
                    alt=""
                  />
                  <div>Hệ thống y tế MEDLATEC</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg7}
                    alt=""
                  />
                  <div>Trung tâm xét nghiệm Diag Laboratories</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={MedicalFacilityImg8}
                    alt=""
                  />
                  <div>Hệ thống Y tế Thu Cúc TCI</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
