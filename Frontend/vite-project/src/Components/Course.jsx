/* eslint-disable no-unused-vars */
import React from "react";
import data from "../../public/data.json";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We`re delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            repellendus molestiae nihil quasi porro sed, minima dolores hic
            adipisci! Eligendi ex, sed quis impedit porro hic consequatur?
            Dignissimos consequuntur dolor quis eum. Ullam, iusto ipsum . Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur
            rem quod maiores culpa esse!
          </p>
          <Link to = "/">
            <button className="btn btn-active btn-secondary mt-12 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
