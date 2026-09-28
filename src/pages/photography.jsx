import { useState } from "react";
import "./photography.css";

import firstFilm from "../images/firstfilm.jpg";
import secondFilm from "../images/puerto.jpg";
import thirdFilm from "../images/gato.jpg";
import fourthFilm from "../images/puerto2.jpg";
import fifthFilm from "../images/gato2.jpg";
import sixthFilm from "../images/redrocks.jpg";

function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      src: firstFilm,
      title: "First Film",
      category: "Film",
      description: "My first experiments with film photography."
    },

     {
      src: secondFilm,
      title: "Puerto Rico",
      category: "Film",
      description: "My first experiments with film photography."
    },

    {
      src: thirdFilm,
      title: "Puerto Rico",
      category: "Film",
      description: "My first experiments with film photography."
    },

    {
      src: sixthFilm,
      title: "Red Rocks",
      category: "Film",
      description: "Captured in Southern Utah."
    },

    {
      src: fourthFilm,
      title: "Puerto Rico",
      category: "Film",
      description: "My first experiments with film photography."
    },

    {
      src: fifthFilm,
      title: "Puerto Rico",
      category: "Film",
      description: "My first experiments with film photography."
    },
  ];

  return (
    <main className="photography">

      {/* HERO */}
      <section className="photography-hero">

        <div className="photography-hero-text">
          <p className="section-label">PHOTOGRAPHY</p>

          <h1>
            Places, people,
            <br />
            and little moments.
          </h1>

          <p>
            A collection of photographs I've taken while traveling,
            experimenting with film, photographing people I love,
            and simply noticing the world around me.
          </p>
        </div>

      </section>


      {/* WHERE I STARTED */}
      <section className="photography-introduction">

        <div className="photo-intro-label">
          <span>01</span>
          <p>WHERE I STARTED</p>
        </div>

        <div className="photo-intro-content">

          <div className="photo-intro-text">

            <h2>
              I photograph things
              <br />
              I don't want to forget.
            </h2>

            <p>
              Photography has become one of the ways I slow down and
              pay attention. Sometimes that's a new city. Sometimes
              it's a person I love, a special event, or a completely
              ordinary moment that I want to remember.
            </p>

            <p>
              More recently, I've started experimenting with film,
              which has made me appreciate the process even more.
            </p>

          </div>


          {/* FEATURED FIRST FILM PHOTO */}
          <div
            className="featured-photo"
            onClick={() => setSelectedPhoto(photos[0])}
          >

            <img
              src={firstFilm}
              alt="First film photograph"
            />

            <div className="photo-overlay">

              <div>
                <span>01</span>

                <h3>
                  First Film
                </h3>

                <p>
                  My first experiments with film photography.
                </p>
              </div>

              <span className="photo-expand">
                ↗
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* FILM */}
      <section className="photo-collection">

        <div className="collection-heading">

          <div>
            <p className="section-label">02 — FILM</p>

            <h2>
              Learning to slow down.
            </h2>
          </div>

          <p>
            A growing collection of photographs from my experiments
            with film photography.
          </p>

        </div>


        <div className="photo-grid film-grid">

          {photos.map((photo, index) => (

            <button
              className="gallery-photo"
              key={index}
              onClick={() => setSelectedPhoto(photo)}
            >

              <img
                src={photo.src}
                alt={photo.title}
              />

              <div className="gallery-photo-overlay">

                <span>{photo.category}</span>

                <h3>
                  {photo.title}
                </h3>

                <span className="gallery-arrow">
                  ↗
                </span>

              </div>

            </button>

          ))}

        </div>

      </section>


      {/* TRAVEL */}
      <section className="photo-collection">

        <div className="collection-heading">

          <div>
            <p className="section-label">03 — TRAVEL</p>

            <h2>
              Places I've been.
            </h2>
          </div>

          <p>
            Photographs from Japan, Korea, and the places that have
            changed how I see the world.
          </p>

        </div>

        <div className="empty-gallery">
          <span>+</span>
          <p>Your travel photographs will go here.</p>
        </div>

      </section>


      {/* PEOPLE */}
      <section className="photo-collection">

        <div className="collection-heading">

          <div>
            <p className="section-label">04 — PEOPLE</p>

            <h2>
              The people I love.
            </h2>
          </div>

          <p>
            Friends, family, and the people who make ordinary moments
            worth remembering.
          </p>

        </div>

        <div className="empty-gallery">
          <span>+</span>
          <p>Your portraits and candid photographs will go here.</p>
        </div>

      </section>


      {/* WEDDINGS */}
      <section className="photo-collection">

        <div className="collection-heading">

          <div>
            <p className="section-label">05 — WEDDINGS & EVENTS</p>

            <h2>
              Moments worth celebrating.
            </h2>
          </div>

          <p>
            A collection of wedding and event photography.
          </p>

        </div>

        <div className="empty-gallery">
          <span>+</span>
          <p>Your wedding photography will go here.</p>
        </div>

      </section>


      {/* EVERYDAY */}
      <section className="photo-collection">

        <div className="collection-heading">

          <div>
            <p className="section-label">06 — EVERYDAY</p>

            <h2>
              Little things.
            </h2>
          </div>

          <p>
            Flowers, landscapes, random moments, and everything else
            that catches my eye.
          </p>

        </div>

        <div className="empty-gallery">
          <span>+</span>
          <p>Your everyday photographs will go here.</p>
        </div>

      </section>


      {/* CLOSING */}
      <section className="photography-closing">

        <p className="section-label">
          KEEP LOOKING
        </p>

        <h2>
          There's always
          <br />
          something worth noticing.
        </h2>

      </section>


      {/* FULL SCREEN PHOTO VIEWER */}
      {selectedPhoto && (

        <div
          className="photo-lightbox"
          onClick={() => setSelectedPhoto(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
          >
            ×
          </button>


          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
            />

            <div className="lightbox-caption">

              <span>
                {selectedPhoto.category}
              </span>

              <h3>
                {selectedPhoto.title}
              </h3>

              <p>
                {selectedPhoto.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Photography;