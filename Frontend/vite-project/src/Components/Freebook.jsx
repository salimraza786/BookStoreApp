/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json";
import Card from "./Card";

const Freebook = () => {
  const filterItem = List.filter((item) => item.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(filterItem)
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-3">Free Offered Cource</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nam
            adipisci, error consectetur nihil nostrum eius illum voluptatum
            Lorem ipsum dolor sit, amet consectetur incidunt quod.
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {filterItem.map((item) =>(
               <Card item = {item}  key = {item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
