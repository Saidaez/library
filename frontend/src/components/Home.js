import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/style.css";
import "../assets/js/script.js";
import image from "../assets/images/logo.svg";
import image2 from "../assets/images/hero-banner.png";
function Home() {
  const [livres, setLivres] = useState([]);

  const fetchLivres = async () => {
    try {
      const response = await axios.get("/api/v1/livre");
    } catch (error) {
      console.error("Error fetching livres:", error);
    }
  };

  useEffect(() => {
    fetchLivres();
  }, []);

  return (
    <div>
      <header className="header" data-header>
        <div className="header-top">
          <div className="container">
            <a href="#" className="logo">
              <img src={image} width="138" height="28" alt="booken home" />
            </a>

            <div className="input-wrapper">
              <input
                type="search"
                name="search"
                placeholder="Search our store"
                className="input-field"
              />

              <button className="btn btn-primary">Search</button>
            </div>

            <div className="header-action">
              <button
                className="header-action-btn"
                aria-label="cart"
                title="Cart"
              >
                <span className="span">0</span>

                <ion-icon
                  name="bag-handle-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>

              <button
                className="nav-open-btn"
                aria-label="open menu"
                title="Open Menu"
                data-nav-toggler
              >
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
              </button>

              <button
                className="header-action-btn"
                aria-label="user"
                title="User"
              >
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        <div className="header-bottom" data-navbar>
          <div className="container">
            <nav className="navbar">
              <button
                className="nav-close-btn"
                data-nav-toggler
                aria-label="close menu"
                title="Close Menu"
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>

              <div className="navbar-top">
                <input
                  type="search"
                  name="search"
                  placeholder="Search our store"
                  className="input-field"
                />

                <button className="search-btn" aria-label="Search">
                  <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>
            </nav>
          </div>
          <div className="container">
            <nav>
              <ul className="vertical-links">
                <li>
                  <Link to="/client">Client Form</Link>
                </li>
                <li>
                  <Link to="/livre">Liste des Livres</Link>
                </li>
                <li>
                  <Link to="/emprunt">Emprunt Form</Link>
                </li>
                <li>
                  <Link to="/notification">Liste des Notifications</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="overlay" data-overlay data-nav-toggler></div>
      </header>
      <main>
        <article>
          <section
            class="section hero has-bg-image"
            aria-label="home"
            style={{
              backgroundImage: "url('../assets/images/hero-bg.png')",
            }}
          >
            <div class="container">
              <div class="hero-content">
                <h1 class="h1 hero-title has-after">
                  Get Your New <br />
                  Book Collections
                </h1>
                <p class="hero-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  formr.
                </p>
                <div class="btn-wrapper">
                  <a href="#" class="btn">
                    <span class="span">Explore More</span>

                    <ion-icon name="cart" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
              <figure class="hero-banner">
                <img
                  src={image2}
                  width="475"
                  height="600"
                  alt="hero banner"
                  class="w-100"
                />
              </figure>
            </div>
          </section>
        </article>
      </main>
      <section className="section popular" aria-label="popular collection">
        <div class="container">
          <h2 className="h2 section-title">Popular Collections</h2>

          <p className="section-text">
            Contrary to popular belief, Lorem Ipsum is not simply random.
          </p>

          <ul className="filter-list">
            <li>
              <button className="filter-btn" data-filter-btn="featured">
                Featured Products
              </button>
            </li>

            <li>
              <button className="filter-btn" data-filter-btn="new">
                New Products
              </button>
            </li>

            <li>
              <button className="filter-btn" data-filter-btn="sell">
                Upsell Prodcuts
              </button>
            </li>
          </ul>
          <ul class="product-list has-scrollbar">
            {livres.map((livre) => (
              <li className="scrollbar-item" data-filter="sell" key={livre.id}>
                <div className="product-card">
                  <div className="card-banner img-holder">
                    <img
                      src="./assets/images/book-9.png"
                      width="384"
                      height="480"
                      loading="lazy"
                      alt="Self Care"
                      className="img-cover"
                    />

                    <div className="card-action">
                      <button
                        className="action-btn"
                        aria-label="quick view"
                        title="Quick View"
                      >
                        <ion-icon
                          name="eye-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>

                      <button
                        className="action-btn"
                        aria-label="add to wishlist"
                        title="Add to Wishlist"
                      >
                        <ion-icon
                          name="heart-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>

                      <button
                        className="action-btn"
                        aria-label="compare"
                        title="Compare"
                      >
                        <ion-icon
                          name="repeat-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>

                      <button
                        className="action-btn"
                        aria-label="add to cart"
                        title="Add to Cart"
                      >
                        <ion-icon
                          name="bag-handle-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="h3">
                      <a href="#" class="card-title">
                        {livre.title}
                      </a>
                    </h3>

                    <data className="card-price" value="34">
                      {livre.price}
                    </data>

                    <div className="rating-wrapper">
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                      <ion-icon
                        name="star-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
