import React from "react";
import "./Pricing.scss";

const Pricing = ({ macBook }) => {
  console.log(macBook[1].price);
  return (
    <div className="pricingCard">
      <h1>From ${macBook[1].price}</h1>
      <div className="macActions">
        <a href="##" className="learnMore">
          Learn More
        </a>
        <button className="buyBtn">Buy</button>
      </div>
    </div>
  );
};

export default Pricing;
