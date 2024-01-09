import React from "react";

const AdditionalCard = (props) => {
  return (
    <>
    {props.Data.map((value, index) => (
      <a href={value.href} style={{textDecoration: "none"}}>
        <div className="Addcard">
        <div className="AdditionalIcon">{value.icon}</div>
        <h1>{value.heading}</h1>
      </div>
      </a>
      ))}
    </>
  );
};

export default AdditionalCard;
