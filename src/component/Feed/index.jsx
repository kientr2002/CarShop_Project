import {React, useCallback} from "react";
import { Col, Row, Container, Button, ToggleButton, Form ,InputGroup, Carousel} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
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
  const handleButtonClicked = useCallback(() => {
    navigate('/newdetail');
  }, []);
  return (
    <div>
      {/* Feed 1 */}
      <MDBContainer className="py-5">
        <MDBRow className="gx-5">
          <MDBCol md="6" className="mb-4">
              <img
                src="https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg"
                className="w-100"
                alt="Feed 1"
              />
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
              News of the day
            </span>
            <h4 className="white-text">
              <strong>Facilis consequatur eligendi</strong>
            </h4>
            <p className="white-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis
              veritatis placeat unde animi laborum sapiente illo possimus,
              commodi dignissimos obcaecati illum maiores corporis.
            </p>
            <Button style={{width:100,height:50}} type="submit" className="col-md-2 m-2" variant="primary" onClick={handleButtonClicked}>
              Read More
            </Button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Feed 2 */}
      <MDBContainer className="py-5">
        <MDBRow className="gx-5">
          <MDBCol md="6" className="mb-4">
              <img
                src="https://i.pinimg.com/originals/e0/b6/19/e0b619bb4def29cc007fba6c9b74cf99.jpg"
                className="w-100"
                alt="Feed 2"
              />
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
              News of the day
            </span>
            <h4 className="white-text">
              <strong>Facilis consequatur eligendi</strong>
            </h4>
            <p className="white-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis
              veritatis placeat unde animi laborum sapiente illo possimus,
              commodi dignissimos obcaecati illum maiores corporis.
            </p>
            <Button style={{width:100,height:50}} type="submit" className="col-md-2 m-2" variant="primary">
              Read More
            </Button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>

  );
}
