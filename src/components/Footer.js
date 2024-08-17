import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from './MailchimFrom';
import logo from "../assets/img/my.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import git from '../assets/img/git.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/prashanthkumar.prashanth.56829"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/prashanth__5311/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Prashanth5311"><img src={git} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}