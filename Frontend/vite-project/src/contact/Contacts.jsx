/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div className="m-h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default Contacts;
