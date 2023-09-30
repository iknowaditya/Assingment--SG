import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

import Arrow_1 from "../../Assets/Arrow_1.svg";
import Arrow_2 from "../../Assets/Arrow_2.svg";
import linkIcon from "../../Assets/link_icon.svg";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch the data from the api
  useEffect(() => {
    async function getData() {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((resp) => setProducts(resp.data))
        .catch((err) => console.log(err));

      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((resp) => setCategory(resp.data))
        .catch((err) => console.log(err));

      setFilter("jewelery");
    }

    getData();
  }, []);

  // Remove the active class from all the category list
  function removeAllActiveHeadings() {
    const allHeading = document.querySelectorAll(".container__bottom__left p");

    allHeading.forEach((item) => {
      item.classList.remove("font_bold");
    });
  }

  // Handle the click event on the category list
  function handleNavigationClick(e) {
    removeAllActiveHeadings();

    const target = e.target;

    setFilter("");

    if (target.tagName === "P") {
      target.classList.add("font_bold");
      setFilter(target.innerText);
    }
  }

  // Add event listener to the category list
  useEffect(() => {
    const tagList = document.querySelectorAll(".container__bottom__left p");
    const containerBottomLeft = document.querySelector(
      ".container__bottom__left"
    );

    containerBottomLeft.addEventListener("click", handleNavigationClick);

    return () => {
      containerBottomLeft.removeEventListener("click", handleNavigationClick);
    };
  }, []);

  // Filter the products according to the category
  useEffect(() => {
    if (filter === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((item) => item.category === filter);
      setFilteredProducts(filtered);
    }
  }, [filter]);

  // Scroll the product container horizontally
  useEffect(() => {
    const container = document.querySelector(".container__bottom__right");

    container.addEventListener("wheel", function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    });

    return () => {
      container.removeEventListener("wheel", function (e) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      });
    };
  }, []);

  return (
    <>
      <div id="product" className="overflow-hidden w-full">
        <div className="product__container flex flex-col mt-6 overflow-hidden p-4 md:p-14   ">
          <div className="product__container__top flex justify-between items-center">
            <div className="container__top__heading">
              <h1>New products</h1>
            </div>

            <div className="container__top__arrows hidden md:flex justify-end items-center gap-20">
              <img src={Arrow_2} alt="" />
              <img src={Arrow_1} alt="" />
            </div>
          </div>

          <div className="product__container__bottom flex flex-col md:flex-row">
            <div className="container__bottom__left md:w-[30%] ">
              <div className="bottom__left__content flex flex-row md:flex-col justify-start items-center md:items-start gap-4 md:gap-1 pl-2">
                {category &&
                  category.map((item, index) => (
                    <p className={index === 1 ? "font_bold" : null} key={index}>
                      {item}
                    </p>
                  ))}
              </div>
            </div>

            <div className="container__bottom__right mt-10 mb-10 ">
              {/* // If filteredProduct array is empty then render the products
              array else render the filteredProduct array.. */}
              {filteredProducts.length !== 0
                ? filteredProducts &&
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="container__bottom__right__card"
                    >
                      <div className="card__image">
                        <div className="prod__img">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="card__arrow__img">
                          <img src={linkIcon} alt="" />
                        </div>
                      </div>
                      <div className="card__content">
                        {/* // Trim the title to only 2 words and make the title
                        responsive size if the title is to big it automatically
                        fix according to the box size.. */}
                        <h2 className="text-2xl">
                          {product.title.split(" ").slice(0, 2).join(" ")}
                        </h2>
                        {/* Trim the description to only 100 letters */}
                        <p>{product.description.substring(0, 100)}...</p>
                        <h2>${product.price}</h2>
                      </div>
                    </div>
                  ))
                : products &&
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="container__bottom__right__card"
                    >
                      <div className="card__image">
                        <div className="prod__img">
                          <img src={product.image} alt="" />
                        </div>
                        <div className="card__arrow__img">
                          <img src={linkIcon} alt="" />
                        </div>
                      </div>
                      <div className="card__content">
                        {/* Trim the title to only 2 words and make the title responsive size if the title is to big it automatically fix according to the box size */}
                        <h2 className="text-2xl">
                          {product.title.split(" ").slice(0, 2).join(" ")}
                        </h2>
                        {/* <h2>{product.title}</h2> */}

                        {/* Trim the description to only 100 letters */}
                        <p>{product.description.substring(0, 100)}...</p>

                        <h2>${product.price}</h2>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          <div className="container__top__arrows flex md:hidden justify-center gap-16 mb-10 md:mb-0">
            <img src={Arrow_2} alt="" />
            <img src={Arrow_1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
