import React from "react";

const OfferCard = (props) => {
  return (
    <>
    {props.Data.map((value) => (
      <main className="Offer-card">
        <div className="CardRow">
          <div className="OfferIcon" >
            {value.icon}
          </div>
          <div className=" OfferCardText">
            <h3>{value.head}</h3>
            <p>{value.title}</p>
          </div>
        </div>
        <div className="OfferButton">
          <span>{value.button}</span>
          <div className="ArrowIcon">{value.arrow}</div> 
        </div>
      </main>
      ))}
    </>
  );
};

export default OfferCard;
