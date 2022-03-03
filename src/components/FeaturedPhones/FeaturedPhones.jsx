import React from "react";
import { phones } from "./phoneData";
import "./FeaturedPhones.scss";

const FeaturedPhones = () => {
  return (
    <section className="featuredPhonesCon">
      {phones.map((phone) => {
        return (
          <section className="phoneCard">
            <div className="phoneHeader">
              <h1 className="phone">{phone.phone}</h1>
              <h3 className="phoneSpan">{phone.span}</h3>
              <div className="phoneLinks">
                <span className="phoneLink">
                  <a href="##">{phone.link1}</a>
                </span>
                <span className="phoneLink">
                  <a href="##">{phone.link2}</a>
                </span>
              </div>
            </div>
            <div className="imgWrapper">
              <img className="phoneImg" src={phone.img} alt="sss" />
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default FeaturedPhones;
