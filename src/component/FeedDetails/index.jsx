import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import "./style.css";
export class FeedDetail extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='feed-container'>
        <div className='feed-body-container'>
          <h1 className="white-text title-container">
            <strong>Facilis consequatur eligendi</strong>
          </h1>
          <h4 className="white-text author-container">
            Sơn béo
          </h4>
          <div  className='img-container'>
            <img
            src="https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg"
            className='img-child-container'
            alt="Feed 2"
          />
          </div>
          <p className="white-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis
            veritatis placeat unde animi laborum sapiente illo possimus,
            commodi dignissimos obcaecati illum maiores corporis.
          </p>          
        </div>
      </div>
    )
  }
}

export default FeedDetail
