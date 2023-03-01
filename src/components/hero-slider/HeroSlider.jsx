import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";

import { sliderData } from "../../assests/face-data/slider";
import "./slider.css";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider__wrapper d-flex flex-column-reverse flex-lg-row flex-md-row flex-sm-column-reverse align-items-center justify-content-between pt-5">
                <div className="slider__content w-100 px-4">
                  <h2 className="mb-3">{item.title}</h2>
                  <p className="text-justify">{item.desc}</p>
                  <button className="btn">Explore Food</button>
                </div>

                <div className="slider__img w-100 px-4">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
