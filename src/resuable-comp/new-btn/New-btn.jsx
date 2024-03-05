import React from "react";
import "./nbtn.css";
import next from "../../assets/next_btn.png";
const Newbtn = () => {
  return (
    <>
      <div className="new-main">
        <div className="img-cont">
          <img src={next} alt="" />
        </div>
        <p>View case</p>
      </div>
    </>
  );
};

export default Newbtn;
