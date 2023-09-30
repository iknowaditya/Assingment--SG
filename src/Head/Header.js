import React from "react";
import IconTruck from "../Assets/Truck.svg";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header_primery">
        <div className="header">
          <div className="header_first_left">
            <div className="header_second_left">
              <img
                src={IconTruck}
                alt=""
                width="21px"
                height="12.9"
                style={{ marginRight: "4px" }}
              />
              <h3>Free Delivery</h3>
            </div>

            <div className="header__left__right">
              <h3>Return Policy</h3>
            </div>
          </div>

          <div className="right_header">
            <div className="right_header_left">
              <h3>Login</h3>
            </div>

            <div className="header__right__right">
              <h3>Follow US</h3>
              <BiLogoFacebook size={"10px"} />
              <BiLogoLinkedin />
              <BiLogoTwitter />
              <BiLogoInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
