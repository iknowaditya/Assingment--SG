import React, { useState, useEffect } from "react";
import Header from "../../Head/Header";
import Hamburger from "../../Assets/Hamburger.svg";
import closeButtonIcon from "../../Assets/closeButtonIcon.svg";
import personImageMobile from "../../Assets/jessica-radanavong-IchPBHFD0pw-unsplash_mobile.png";
import personImage from "../../Assets/jessica-radanavong-IchPBHFD0pw-unsplash.png";
import starIcon from "../../Assets/StarIcon.svg";
import bigStar from "../../Assets/BigStarIcon.svg";
import star_for from "../../Assets/star_4.svg";
import ArrowIcon from "../../Assets/ArrowIcon.svg";
import "./Home.css";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  function removeAllActiveHeadings() {
    const allHeading = document.querySelectorAll(
      ".navigation__bottom__items__heading"
    );
    allHeading.forEach((item) => {
      item.classList.remove("navigation__bottom__items__heading__active");
    });
  }
  useEffect(() => {
    const bottomNavigation = document.querySelector(".navigation__bottom");

    function handleNavigationClick(e) {
      removeAllActiveHeadings();
      const target = e.target;

      if (target.tagName === "H1") {
        target.classList.add("navigation__bottom__items__heading__active");

        const targetChild = target.nextElementSibling;

        if (targetChild && targetChild.tagName === "UL") {
          targetChild.classList.toggle(
            "navigation__bottom__items__child__active"
          );
        }
      }
    }

    bottomNavigation.addEventListener("click", handleNavigationClick);

    return () => {
      bottomNavigation.removeEventListener("click", handleNavigationClick);
    };
  }, []);

  return (
    <div id="Home w-full">
      <div className="home__container w-full">
        <Header />
        <div className="navigation">
          {/* Navigation Top */}
          <div className="navigation__top">
            <div className="navigation__top__left">
              <h1>ShopKart</h1>
            </div>
            <div className="navigation__top__right">
              <h3>Wishlist (0)</h3>
              <h3>Bag (0)</h3>
              <img
                src={isNavOpen ? closeButtonIcon : Hamburger}
                alt=""
                height="24px"
                width="24px"
                style={{ zIndex: "999" }}
                onClick={() => setIsNavOpen(!isNavOpen)}
              />
            </div>
            <div className="starIcon">
              <img src={starIcon} alt="" width="21.14px" height="22px" />
            </div>
          </div>
          {/* style={{ border: "1px solid white" }} */}
          {/* Navigation Bottom */}
          <div className="navigation__bottom">
            {navbar.map((item) => (
              <div className="navigation__bottom__items" key={item.id}>
                <h1 className="nav__item navigation__bottom__items__heading">
                  {item.name}
                </h1>

                {item.child && (
                  <ul
                    className="navigation__bottom__items__child__inactive"
                    style={{ position: "absolute", border: "1px solid white" }}
                  >
                    {item.child.map((child) => (
                      <li
                        key={child.id}
                        style={{
                          fontSize: "14px",
                          fontFamily: "Work Sans",
                          fontWeight: "300",
                          lineHeight: "16.42px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                        }}
                      >
                        {child.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Navbar */}
        <div className="sliding__navbar">
          <ul
            className={
              isNavOpen
                ? "sliding__navbar__child__active"
                : "sliding__navbar__child__inactive"
            }
          >
            {navbar.map((item) => (
              <li className="sliding__navbar__child__items" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Home Content */}
        <div className="home__content">
          <div className="home__content__content">
            <div className="home__content__content_left">
              <h1>Fresh</h1>
              <p>2022</p>
              <h1 style={{ paddingLeft: "12px" }}>Look</h1>
              <img src={star_for} alt="" />
            </div>

            <div className="home__content__content__right">
              <p>
                OREGON JACKET <br /> $124
              </p>
            </div>
          </div>

          <div className="orange__bar" style={{ color: "white" }}></div>
          <div className="orange__bar__two" style={{ color: "white" }}></div>

          <img
            src={personImageMobile}
            alt=""
            className="person__image__mobile"
          />
          <img src={personImage} alt="" className="person__image" />
          <img src={bigStar} alt="" className="starBig__image" />

          <div className="button">
            <p>See more</p>
            <img src={ArrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
