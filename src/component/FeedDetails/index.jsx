import React, { Component, useCallback, useState, useEffect } from 'react'
import { Col, Row, Container, Button, ToggleButton, Form ,InputGroup, Carousel} from "react-bootstrap";
import { NavLink, useNavigate, useParams  } from "react-router-dom";
import axios from "axios"
import PropTypes from 'prop-types'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import "./style.css";
export default function FeedDetail()  {
  const navigate = useNavigate();
  const [newsdetail, setNewsdetail] = useState([]);
  const { newId } = useParams();
  const handleButtonClicked = useCallback((newId) => {
    // Hiển thị alert với new_id của mục tin tức
    alert(`Clicked on news with ID: ${newId}`);
  }, []);
   useEffect(() => {
    axios
      .post("http://localhost/CarShop_Project/BE/Controller/test.php/newsdetail/get", 1)
      .then((response) => setNewsdetail(response.data))
      .catch((error) => console.log(error));
  }, []);

    return (
      <div className='feed-container'>
        <div className='feed-body-container'>
          <h1 className="white-text title-container">
            <strong>Facilis consequatur eligendi</strong>
          </h1>
          <div  className='img-container'>
            <img
            src="https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg"
            className='img-child-container'
            alt="Feed 2"
          />
          </div>
          <p className="white-text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis
            veritatis placeat unde animi laborum sapiente illo possimus,
            commodi dignissimos obcaecati illum maiores corporis.
          </p>
          <button onClick={handleButtonClicked(newId)}>aaaaaaaa</button>          
        </div>
      </div>
    )
}

