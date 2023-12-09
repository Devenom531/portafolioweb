import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../recursos/banner1.jpg'
import banner2 from '../recursos/banner2.png'
import banner3 from '../recursos/banner3.png'

const Carrusel = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100 text-ligth"
          src={banner1}
          height={350}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={banner2}
          height={350}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={banner3}
          height={350}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carrusel