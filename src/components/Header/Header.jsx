import React, { useRef, useEffect } from 'react'
import './Header.css'
import logo from '../../img/eco-logo.png'
import user_icon from '../../img/user-icon.png'
import { Container, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const nav_links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {

  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const profileActionsRef = useRef(null)

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const menuToggle = () => menuRef.current.classList.toggle("nav_active")

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Logged Out')
      navigate('/home')
    }).catch(err => {
      toast.error(err.message)
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const navigateToCart = () => {
    navigate('/cart')
  }

  const toggleProfileActions = () => profileActionsRef.current.classList.toggle('show_profileActions');
  console.log(toggleProfileActions)

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>DunVVMart</h1>
                <p>Since 1999</p>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <div className="menu">
                {
                  nav_links.map((item, index) => (
                    <li className="nav_item" style={{ listStyle: 'none' }} key={index}>
                      <NavLink to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav_active" : ""
                        }
                      >{item.display}</NavLink>
                    </li>
                  ))
                }
              </div>
            </div>

            <div className="nav_icons">
              <span className='fav_icon'>
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-basket-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className='profile'>
                <motion.img whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div className="profile_actions" ref={profileActionsRef} onClick={toggleProfileActions} >
                  {
                    currentUser
                      ? (
                        <span onClick={logout}>Logout</span>
                      )
                      : (
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                          <Link className='text-decoration-none' to='/signup'>SignUp</Link>
                          <Link className='text-decoration-none' to='/login'>LogIn</Link>
                        </div>
                      )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header