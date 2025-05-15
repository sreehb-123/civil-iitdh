import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Carousel.css' // Create this CSS file or use inline styles

const Carousel = () => {
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
        autoplaySpeed: 3000
    };

    const slides = [
        { img: "/carousel_images/DSC_3732.JPG", text: "Innovating Infrastructure, Building a Sustainable Tomorrow" },
        { img: "/carousel_images/IMG-20250419-WA0016.jpg", text: "Intra-Departmental Sports Event 2024-25" },
        { img: "/carousel_images/Screenshot 2025-04-21 110927.png", text: "Prof. Amarnath Hegde was nominated for the Prof. Satish Dhawan Young Engineers State Award in Engineering Sciences for 2023, instituted by the Government of Karnataka" },
        { img: "/carousel_images/WhatsApp Image 2025-04-19 at 11.39.01 AM.jpeg", text: "Our students Mr. Shubham Raj, Mr. Vivek Kumar, and Mr. Tanishq Singh have been awarded the prestigious Hyundai Hope Scholarship by Hyundai Motor India Foundation in collaboration with BharatCares for their innovative project Empowering Sustainable Mobility: Electrical Pavement for Smarter Cities."  },
        { img: "/carousel_images/WhatsApp Image 2025-04-02 at 4.04.04 PM.jpeg", text: "World Water Day 2025 Celebration held on 25th March with a session on Water Availability in West Flowing Rivers under Changing Climate featuring Dr. B. Venkatesh (Scientist G, NIH Belgaum) as Chief Guest"},
        { img: "/carousel_images/WhatsApp Image 2025-04-02 at 4.04.12 PM.jpeg", text: "World Water Day 2025 Celebration held on 25th March with a session on Water Availability in West Flowing Rivers under Changing Climate featuring Dr. B. Venkatesh (Scientist G, NIH Belgaum) as Chief Guest"},
        { img: "/carousel_images/Photo 1.png", text: "Launch of the Civil Engineering Association and the Inaugural Ceremony of the Hands-on Training Program on STAAD.Pro and RCDC, held from 4th to 6th October 2024." },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={slide.img} alt={`slide-${index}`} className="carousel-image" />
                        {slide.text && <p className="carousel-text">{slide.text}</p>}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;