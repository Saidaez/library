import React, { useState, useEffect } from "react";
import image from "../assets/images/logo.svg";
import "../assets/css/style.css";
import "../assets/js/script.js";

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('"/api/v1/notifications')
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data.notifications);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des notifications:",
          error
        );
      });
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
      <div className="emprunt-container">
        <div className="emprunt-form">
          <main>
            <section style={{ color: "black" }}>
              <h2 style={{ textAlign: "center" }}>Nouvelles notifications</h2>
              <ul style={{ marginTop: "40px" }}>
                {notifications.map((notification, index) => (
                  <li key={index}>{notification}</li>
                ))}
              </ul>
            </section>
          </main>
          <footer>
            <p>&copy; 2024 Librairie XYZ</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
