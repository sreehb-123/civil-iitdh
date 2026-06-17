import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const researchSlides = [
  {
    src: `/abstracts/${encodeURIComponent("Final_Infograph.png")}`,
    alt: "Research abstract infographic",
  },
  {
    src: `/abstracts/${encodeURIComponent("Research Infographic.PNG")}`,
    alt: "Research infographic",
  },
  {
    src: `/abstracts/${encodeURIComponent("Infographic _Somil.png")}`,
    alt: "Research infographic by Somil",
  },
  {
    src: `/abstracts/${encodeURIComponent("RAILWAY GEOTECHNICS.jpg")}`,
    alt: "Railway geotechnics abstract",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white shadow-lg transition hover:scale-105 hover:bg-[#89288f]/85 focus:outline-none focus:ring-4 focus:ring-[#faa519]/70 sm:h-12 sm:w-12 md:right-4"
    onClick={onClick}
    aria-label="Next slide"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white shadow-lg transition hover:scale-105 hover:bg-[#89288f]/85 focus:outline-none focus:ring-4 focus:ring-[#faa519]/70 sm:h-12 sm:w-12 md:left-4"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <FaChevronLeft />
  </button>
);

function ResearchSlide({ src, alt }) {
  const [orientation, setOrientation] = useState("landscape");

  return (
    <div className="flex h-[clamp(20rem,calc(100vh-11rem),56rem)] items-center justify-center px-0.5 sm:px-2 pb-6 sm:pb-10">
      <div
        className={
          `h-full w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#89288f]/15 bg-white shadow-[0_24px_60px_rgba(39,38,53,0.16)] p-1.5 sm:p-4 ` +
          (orientation === "portrait"
            ? "max-w-[min(82vw,980px)]"
            : "max-w-[min(94vw,1480px)]")
        }
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-xl bg-white object-contain"
          loading="eager"
          onLoad={(event) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            setOrientation(naturalWidth >= naturalHeight ? "landscape" : "portrait");
          }}
        />
      </div>
    </div>
  );
}

export default function Research() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: false,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-14 sm:pt-16 pb-8 sm:pb-10">
      <div className="mx-auto flex min-h-[calc(100vh-7.5rem)] w-full max-w-7xl flex-col gap-3 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="shrink-0 text-center">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
            Research
          </h1>
          <p className="mt-1 text-xs font-medium text-[#89288f] sm:text-sm lg:text-base">
            Abstracts Gallery
          </p>
        </div>

        <div className="flex min-h-0 flex-1 items-stretch">
          <div className="relative flex w-full min-h-[20rem] flex-[1_1_0%] items-stretch sm:min-h-[24rem] lg:min-h-[32rem]">
            <Slider {...settings} className="research-slider h-full w-full">
              {researchSlides.map((slide) => (
                <ResearchSlide key={slide.src} src={slide.src} alt={slide.alt} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}