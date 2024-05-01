import React, { useState, useEffect } from "react";
import axios from "axios";

function LivreList() {
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
      <main>
        <article>
          <section
            className="section featured"
            aria-label="featured collection"
          >
            <div className="container">
              <h2 className="h2 section-title">List Of Books</h2>

              <ul class="grid-list">
                {livres.map((livre) => (
                  <li key={livre.id}>
                    <div class="product-card">
                      <span className="card-badge">New</span>

                      <div
                        className="card-banner img-holder"
                        style="--width: 384; --height: 480;"
                      >
                        <img
                          src="../assets/images/book-1.png"
                          width="384"
                          height="480"
                          loading="lazy"
                          alt="Black Night"
                          class="img-cover"
                        />

                        <div class="card-action">
                          <button
                            class="action-btn"
                            aria-label="quick view"
                            title="Quick View"
                          >
                            <ion-icon
                              name="eye-outline"
                              aria-hidden="true"
                            ></ion-icon>
                          </button>

                          <button
                            class="action-btn"
                            aria-label="add to wishlist"
                            title="Add to Wishlist"
                          >
                            <ion-icon
                              name="heart-outline"
                              aria-hidden="true"
                            ></ion-icon>
                          </button>

                          <button
                            class="action-btn"
                            aria-label="compare"
                            title="Compare"
                          >
                            <ion-icon
                              name="repeat-outline"
                              aria-hidden="true"
                            ></ion-icon>
                          </button>

                          <button
                            class="action-btn"
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
                            livre.name
                          </a>
                        </h3>

                        <data className="card-price" value="80">
                          livre.price
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
        </article>
      </main>
    </div>
  );
}

export default LivreList;
