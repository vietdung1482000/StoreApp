import React from 'react'
import '../style/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommenSection from '../components/UI/CommomSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/CartSlices'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    return (
        <Helmet title='Cart'>
            <CommenSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0
                                    ? <h2 className='fs-4 text-center'>No item added to the cart</h2>
                                    : <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                            }
                        </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>
                                    Subtotal
                                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                                </h6>
                            </div>
                            <p className='fs-6 mt-2'>thuế và phí vận chuyển sẽ được tính khi thanh toán</p>

                            <motion.button whileTap={{ scale: 1.2 }} className='buy_check_btn w-100 mt-3'><Link to="/checkout">Checkout</Link></motion.button>
                            <motion.button whileTap={{ scale: 1.2 }} className='buy_check_btn w-100 mt-3'><Link to="/shop">Continue Shopping</Link></motion.button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}


const Tr = ({ item }) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return <tr>
        <td><img src={item.imgUrl} alt="" /></td>
        <td>{item.productName}</td>
        <td>${item.price}</td>
        <td>{item.quatity}</td>
        <td><motion.i
            onClick={deleteProduct}
            whileTap={{ scale: 1.2 }}
            class="ri-delete-bin-line"></motion.i></td>
    </tr>
}

export default Cart