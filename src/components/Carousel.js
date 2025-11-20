import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css' // Create this CSS file or use inline styles
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
    <div className="custom-arrow" style={{ right: "15px" }} onClick={onClick}>
        <FaChevronRight />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow" style={{ left: "15px" }} onClick={onClick}>
        <FaChevronLeft />
    </div>
);


const Carousel = ({slides}) => {
    const settings = {
        dots: true,
        lazyLoad: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={slide.img} alt={`slide-${index}`} className="carousel-image" />
                        {/* {slide.text && <p className="carousel-text">{slide.text}</p>} */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;