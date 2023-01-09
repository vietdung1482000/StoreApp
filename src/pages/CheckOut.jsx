import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommomSection from '../components/UI/CommomSection'
import '../style/checkout.css'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'


const CheckOut = () => {


  const totalQty = useSelector((state) => state.cart.totalQuantity)
  const totalAmount = useSelector((state) => state.cart.totalAmount)


  const handleOrder = () => {

  }

  return (
    <Helmet title='CheckOut'>
      <CommomSection title='CheckOut' />

      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing_form'>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter Your Name' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Enter Your Email' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="number" placeholder='Enter Your Phone' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter Your Address' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter Your Country' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter City' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter Postal code' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout_cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>$ {totalAmount}</span></h6>
                <h6>
                  <span>Shipping: <br />Free Shipping</span>
                  <span>$20</span>
                </h6>
                <h4>Total Cost: <span>$ {totalAmount}</span></h4>
                <motion.button whileTap={{ scale: 1.1 }} onClick={handleOrder} className="store_btn auth_btn w-100">Place an order</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckOut