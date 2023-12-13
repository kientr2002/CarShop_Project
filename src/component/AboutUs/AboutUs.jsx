import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import "./AboutUs.css";

export class AboutUs extends Component {
  static propTypes = {

  }
  
  render() {
    return (
      <div>
          <h1 className='title-container'>Về chúng tôi</h1>

          <div className='main-container'>
            <img className='image-container' src="https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg" 
            alt='images'
            align='right'
            />

            <p className='text-1 aboutus-container'>Nhóm Chúng Em xin chân thành cảm ơn Thầy Nguyễn Hữu Hiếu đã giúp Chúng Em hoàn thiện tốt 
            Bài Tập Lớn này.
            <br/>
            <br/>
            Nhóm sinh viên thực hiện:
            <br />
            1. Trần Anh Vỹ - 2015126
            <br />
            2. Trần Văn Kiên - 2013552
            <br />
            3. Nghiêm Lương Sơn - 2014373
            </p>

          </div>

      </div>
    )
  }
}

export default AboutUs
