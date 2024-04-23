/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="mt-4 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-3">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 p-3 duration-300 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
