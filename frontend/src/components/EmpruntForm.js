import "./clientCss.css";
import React, { useState } from "react";
import image from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Emprunt() {
  const [codeLivre, setCodeLivre] = useState("");
  const [nomClient, setNomClient] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const dateEmprunt = new Date().toISOString();
    const dateRetour = null;
    console.log("Informations de l'emprunt:", {
      codeLivre,
      nomClient,
      dateEmprunt,
      dateRetour,
    });
    setCodeLivre("");
    setNomClient("");
  };

  return (
    <div className="emprunt-container">
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
      <div className="emprunt-form">
        <h1 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
          Formulaire d'emprunt
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Code du livre :
              <input
                type="text"
                value={codeLivre}
                onChange={(e) => setCodeLivre(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Nom du client :
              <input
                type="text"
                value={nomClient}
                onChange={(e) => setNomClient(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Emprunter</button>
        </form>
      </div>
    </div>
  );
}

export default Emprunt;
