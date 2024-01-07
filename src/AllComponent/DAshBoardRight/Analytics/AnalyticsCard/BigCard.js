import React, { Fragment } from "react";
const BigCard = (props) => {
  return (
    <>
    {props.Data.map((values, index)=>(
      <div className="CardCol" key={index}>
        <div className="row">
          <p className="RupeeIcon">{values.icon}  </p>
          <div className="col">
            <h4>{values.Head4}</h4>
            <p>{values.para}</p>
          </div>
        </div>
        <p className="RightIcon" >{values.Rightarrow} </p>
      </div>
      ))}
    </>
  );
};
export default BigCard;
