import React from "react";
import "../styles/Exp.scss";

import sv from "../assets/1.svg";
import sv2 from "../assets/2.svg";
import sv3 from "../assets/3.svg";
import sv4 from "../assets/4.svg";
import sv5 from "../assets/5.svg";
import sv6 from "../assets/6.svg";

const Exp = () => {
  return (
    <>
      <div id="exp-maina" className="animate-on-scroll">
        <div id="exp-heroleft" className="animate-on-scroll-l">
          <h1>25</h1>
          <div id="exp-textdiv">
            <h2>YEARS OF</h2>
            <h2>DIGITAL EXPERIENCE</h2>
          </div>
        </div>
        {/* <div id="exp-heroright">
          <table>
            <tr>
              <td>
                <img src={sv} alt="" />
              </td>
              <td>
                <img src={sv} alt="" />
              </td>
              <td>
                <img src={sv} alt="" />
              </td>
              <td>
                <img src={sv} alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img src={sv} alt="" />
              </td>
              <td>
                <img src={sv} alt="" />
              </td>
              <td>
                <img src={sv} alt="" />
              </td>
              <td>
                <img src={sv} alt="" />
              </td>
            </tr>
          
          </table>
        </div> */}
        <div id="right-exp" className="animate-on-scroll-r">
          <div id="itm1">
            <img src={sv} alt="" />
          </div>
          <div id="itm1">
            <img src={sv2} alt="" />
          </div>
          <div id="itm1">
            <img src={sv3} alt="" />
          </div>
          <div id="itm1">
            <img src={sv4} alt="" />
          </div>
          <div id="itm1">
            <img src={sv5} alt="" />
          </div>
          <div id="itm1">
            <img src={sv6} alt="" />
          </div>
          <div id="itm1">
            <img src={sv6} alt="" />
          </div>
          <div id="itm1">
            <img src={sv2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exp;
