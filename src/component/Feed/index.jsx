import {React, useCallback, useState, useEffect} from "react";
import { Col, Row, Container, Button, ToggleButton, Form ,InputGroup, Carousel} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import "./style.css";

export default function Feed() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const handleButtonClicked = useCallback(() => {
    if (news.length > 0) {
      alert(news[0].description);
    } else {
      // Handle the case when news is empty, e.g., show an error message
      alert("No news data available.");
    }
  }, [news]);
   useEffect(() => {
    axios
      .get("http://localhost/CarShop_Project/BE/Controller/index.php/news/get")
      .then((response) => setNews(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
 <div>
      {news.map((item) => (
        <MDBContainer key={item.new_id} className="py-5">
          <MDBRow className="gx-5">
            <MDBCol md="6" className="mb-4">
              <img
                src={item.image}
                className="w-100"
                alt={`Feed ${item.new_id}`}
              />
            </MDBCol>
            <MDBCol md="6" className="mb-4">
              <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                News of the day
              </span>
              <h4 className="white-text">
                <strong>{item.title}</strong>
              </h4>
              <p className="white-text">{item.description}</p>
              <Button
                style={{width: 100, height: 50}}
                type="submit"
                className="col-md-2 m-2"
                variant="primary"
                onClick={() => handleButtonClicked(item.new_id)}
              >
                Read More
              </Button>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ))}
    </div>

  );
}
