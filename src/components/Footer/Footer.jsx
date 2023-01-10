import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../img/eco-logo.png'


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className="logo">
              {/* <img src={logo} alt="" /> */}
              <div>
                <h1 className='text-white'>DunVVMart</h1>
              </div>
            </div>
            <p className='footer_text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ipsum qui sed minus architecto porro natus ea sit modi numquam inventore laboriosam nam,
              accusantium repudiandae assumenda saepe quae? Ut, beatae provident?
            </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup className='footer_contact mb-3'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#" className='text-decoration-none'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#" className='text-decoration-none'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#" className='text-decoration-none'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <Link to="#" className='text-decoration-none'>Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop" className='text-decoration-none'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart" className='text-decoration-none'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login" className='text-decoration-none'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#" className='text-decoration-none'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 d-flex'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p className='mx-2'>14 address, Da Nang City</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex'>
                  <span><i class="ri-phone-line"></i></span>
                  <p className='mx-2'>0334751943</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex'>
                  <span><i class="ri-mail-line"></i></span>
                  <p className='mx-2'>vietdung1482000@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer_copyright">Copyright {year} Developed by DungVV. All Rights</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer