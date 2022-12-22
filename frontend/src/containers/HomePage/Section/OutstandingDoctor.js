import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./OutstandingDoctor.scss";
import { changeLanguageApp } from "../../../store/actions/appActions";
//import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialtyImg1 from "../../../assets/images/doctor1.jpg";
import SpecialtyImg2 from "../../../assets/images/doctor2.jpg";
import SpecialtyImg3 from "../../../assets/images/doctor3.jpg";
import SpecialtyImg4 from "../../../assets/images/doctor4.jpg";
import SpecialtyImg5 from "../../../assets/images/doctor5.jpg";
import SpecialtyImg6 from "../../../assets/images/doctor6.jpg";
import SpecialtyImg7 from "../../../assets/images/doctor7.jpg";
import SpecialtyImg8 from "../../../assets/images/doctor8.jpg";
class OutstandingDoctor extends Component {
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
      <div className="section-outstanding-doctor">
        <div className="outstanding-doctor-container">
          <div className="outstanding-doctor-header">
            <span className="title-section">Bác sỹ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="outstanding-doctor-body">
            <div className="outstanding-doctor-content">
              <Slider {...settings}>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg1}
                    alt=""
                  />
                  <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
                  <div>Tư vấn, trị liệu Tâm lý</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg2}
                    alt=""
                  />
                  <div>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</div>
                  <div>Tai Mũi Họng</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg3}
                    alt=""
                  />
                  <div>
                    Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng
                  </div>
                  <div>Da liễu</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg4}
                    alt=""
                  />
                  <div>Bác sĩ Chuyên khoa I Phí Thị Tuyết Nga</div>
                  <div>Sản Phụ khoa</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg5}
                    alt=""
                  />
                  <div>Bác sĩ Chuyên khoa II La Thị Kim Liên</div>
                  <div>Tai Mũi Họng</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg6}
                    alt=""
                  />
                  <div>Phó Giáo sư, Tiến sĩ, Bác sĩ Lê Thị Tuyết Lan</div>
                  <div>Dị ứng miễn dịch</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg7}
                    alt=""
                  />
                  <div>Tiến sĩ, Bác sĩ Phạm Chí Lăng</div>
                  <div>Cơ Xương Khớp</div>
                </div>
                <div className="img-customize">
                  <img
                    className="img-customize-width"
                    src={SpecialtyImg8}
                    alt=""
                  />
                  <div>Tiến sĩ, Bác sĩ Vũ Thái Hà</div>
                  <div>Da liễu</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
