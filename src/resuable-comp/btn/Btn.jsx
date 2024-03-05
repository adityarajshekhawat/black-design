import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import "./btn-style.scss";
const Btn = () => {
  return (
    <div id="btn-main">
      <a href="" id="btn-atag">
        <div id="btn-logodiv">
          <MdOutlineNavigateNext />
        </div>
        <p id="btn-text">land hi khede</p>
      </a>
    </div>
  );
};

export default Btn;
