import React from "react";
import { macBook } from "./phoneData";
import "./FeaturedMac.scss";
import Pricing from "../Pricing/Pricing";

const FeaturedMac = () => {
  return (
    <section className="featuredPhonesCon">
      {macBook.map((mac) => {
        return (
          <section className="phoneCard" key={mac.id}>
            <div className="macHeader">
              <h1 className="macTitle">{mac.title}</h1>
              <h1 className="macSpan">{mac.span}</h1>
            </div>
            <div className="imgWrapper">
              <img className="phoneImg" src={mac.img} alt="sss" />
            </div>
            <div className="macInfo">
              <h2 className="macDesc">{mac.desciption}</h2>
            </div>
          </section>
        );
      })}
      <Pricing macBook={macBook} />
    </section>
  );
};

export default FeaturedMac;
