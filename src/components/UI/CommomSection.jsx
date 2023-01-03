import React from 'react'
import '../../style/commom.css'
import { Container } from 'reactstrap'

const CommomSection = ({ title }) => {
  return (
    <section className='section_commom'>
      <Container className='text-center'>
        <h1>{title}</h1>
      </Container>
    </section>
  )
}

export default CommomSection