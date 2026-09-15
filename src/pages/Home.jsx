import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { IME_APLIKACIJE } from "../constants";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


/* =========================
   REVEAL ANIMATION
========================= */

const Reveal = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};


/* =========================
   HOME
========================= */

function HOME() {

  useEffect(() => {
    document.title =
      "Reformer Centar Osijek | Individualni i grupni Reformer treninzi";

    const description =
      "Reformer Centar Osijek nudi individualne i grupne Reformer treninge. Pokret, snaga, stabilnost i individualni pristup u Osijeku.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);


  return (
    <main className="home">


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <span className="eyebrow">
            REFORMER CENTAR • OSIJEK
          </span>

          <h1>
            Reformer trening
            <br />
            za <em>bolji odnos</em>
            <br />
            prema tijelu.
          </h1>

          <p>
            Individualni i grupni Reformer treninzi u Osijeku,
            usmjereni na snagu, stabilnost, mobilnost i kvalitetnije
            kretanje.
          </p>

          <div className="hero-buttons">

            <Link
              to="/rezervacije"
              className="btn-main"
            >
              Rezerviraj termin
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link
              to="/individualni"
              className="btn-secondary"
            >
              Saznaj više
            </Link>

          </div>

        </div>


        <div
          className="scroll-indicator"
          style={{ fontSize: "11px" }}
        >
          <span></span>
          Scroll
        </div>

      </section>



      {/* =========================
          INTRO / ZAŠTO REFORMER
      ========================= */}

      <Reveal>

        <section
          id="zasto-reformer"
          className="info-section"
        >

          <div className="section-heading">

            <span>
              01 / ZAŠTO REFORMER?
            </span>

            <h2>
              Više od treninga.
              <br />
              <em>Bolji odnos prema tijelu.</em>
            </h2>

          </div>


          <div className="feature-grid">

            <article className="feature-card">

              <div className="feature-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>

              <h3>
                Svjesniji pokret
              </h3>

              <p>
                Učimo kako pravilno izvoditi pokrete i bolje
                razumjeti vlastito tijelo.
              </p>

            </article>


            <article className="feature-card">

              <div className="feature-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>

              <h3>
                Snaga i stabilnost
              </h3>

              <p>
                Kontrolirani pokreti aktiviraju mišiće i grade
                funkcionalnu snagu.
              </p>

            </article>


            <article className="feature-card">

              <div className="feature-icon">
                <i className="bi bi-bullseye"></i>
              </div>

              <h3>
                Individualni pristup
              </h3>

              <p>
                Vježbe se prilagođavaju tvojoj razini,
                mogućnostima i ciljevima.
              </p>

            </article>


            <article className="feature-card">

              <div className="feature-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>
                Kontrola tijela
              </h3>

              <p>
                Fokus je na kvalitetnijem, kontroliranom i
                sigurnijem kretanju.
              </p>

            </article>

          </div>

        </section>

      </Reveal>



      {/* =========================
          PROGRAMI
      ========================= */}

      <Reveal>

        <section className="program-section">

          <div className="section-heading">

            <span>
              02 / PROGRAMI
            </span>

            <h2>
              Odaberi trening
              <br />
              koji <em>odgovara tebi.</em>
            </h2>

          </div>


          <div className="program-comparison">


            {/* INDIVIDUALNI */}

            <article className="program-card">

              <div className="program-top">

                <span>
                  01
                </span>

                <i className="bi bi-person"></i>

              </div>

              <h3>
                Individualni Reformer
              </h3>

              <p>
                Potpuno personaliziran trening uz individualni
                pristup, prilagođen tvojoj razini, potrebama
                i ciljevima.
              </p>

              <ul>

                <li>
                  <i className="bi bi-check2"></i>
                  55 minuta
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  1 osoba na reformeru
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  Individualno prilagođene vježbe
                </li>

              </ul>

              <Link to="/individualni">
                Saznaj više
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </article>



            {/* GRUPNI */}

            <article className="program-card featured">

              <div className="program-badge">
                POPULARNO
              </div>

              <div className="program-top">

                <span>
                  02
                </span>

                <i className="bi bi-people"></i>

              </div>

              <h3>
                Grupni Reformer
              </h3>

              <p>
                Dinamičan trening u manjoj grupi uz kombinaciju
                rada na reformeru, prostirci i rekvizitima.
              </p>

              <ul>

                <li>
                  <i className="bi bi-check2"></i>
                  Do 90 minuta
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  Rad u grupi
                </li>

                <li>
                  <i className="bi bi-check2"></i>
                  Reformer + prostirka
                </li>

              </ul>

              <Link to="/grupni">
                Saznaj više
                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </article>

          </div>

        </section>

      </Reveal>



      {/* =========================
          KAKO IZGLEDA TRENING
      ========================= */}

      <Reveal>

        <section className="timeline-section">

          <div className="section-heading centered">

            <span>
              03 / KAKO IZGLEDA TRENING?
            </span>

            <h2>
              Od prvog pokreta
              <br />
              do osjećaja <em>lakoće.</em>
            </h2>

          </div>


          <div className="timeline">


            <div className="timeline-item">

              <div className="timeline-number">
                01
              </div>

              <div>

                <h3>
                  Priprema
                </h3>

                <p>
                  Kratko zagrijavanje i priprema tijela
                  za kvalitetan pokret.
                </p>

              </div>

            </div>



            <div className="timeline-item">

              <div className="timeline-number">
                02
              </div>

              <div>

                <h3>
                  Reformer
                </h3>

                <p>
                  Kroz kontrolirane pokrete aktiviramo
                  cijelo tijelo i upoznajemo rad na spravi.
                </p>

              </div>

            </div>



            <div className="timeline-item">

              <div className="timeline-number">
                03
              </div>

              <div>

                <h3>
                  Glavni dio
                </h3>

                <p>
                  Fokus na snagu, stabilnost, mobilnost
                  i pravilnu tehniku.
                </p>

              </div>

            </div>



            <div className="timeline-item">

              <div className="timeline-number">
                04
              </div>

              <div>

                <h3>
                  Smirivanje
                </h3>

                <p>
                  Trening završavamo kontroliranim pokretima
                  i istezanjem.
                </p>

              </div>

            </div>


          </div>

        </section>

      </Reveal>



      {/* =========================
          OSIJEK / LOKACIJA
      ========================= */}

      <Reveal>

        <section className="info-section">

          <div className="section-heading">

            <span>
              04 / REFORMER CENTAR OSIJEK
            </span>

            <h2>
              Pokret koji počinje
              <br />
              <em>u Osijeku.</em>
            </h2>

            <p>
              Pronađi program koji ti odgovara i napravi
              prvi korak prema kvalitetnijem kretanju.
            </p>

          </div>


          <div className="address-card">

            <strong>
              Mjesto održavanja treninga
            </strong>

            <span>
              BlueGym Centar Osijek, Reformer Centar
              <br />
              Pavla Pejačevića 22, Osijek
            </span>

          </div>

        </section>

      </Reveal>



      {/* =========================
          CTA
      ========================= */}

      <Reveal>

        <section className="reservation-cta">

          <div className="cta-content">

            <span>
              05 / REZERVACIJE
            </span>

            <h2>
              Vrijeme je da
              <br />
              napraviš nešto <em>za sebe.</em>
            </h2>

            <p>
              Odaberi individualni ili grupni Reformer trening
              i rezerviraj svoj termin.
            </p>

            <Link
              to="/rezervacije"
              className="cta-button"
            >
              Rezerviraj svoj termin
              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </section>

      </Reveal>



      {/* =========================
          SOCIAL
      ========================= */}

      <Reveal>

        <section className="social-section">

          <span>
            OSTANIMO POVEZANI
          </span>

          <h2>
            Pratite nas
            <br />
            <em>i izvan Centra.</em>
          </h2>

          <div className="social-links">

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="bi bi-tiktok"></i>
            </a>

          </div>

        </section>

      </Reveal>



      {/* =========================
          FOOTER
      ========================= */}

      <footer className="site-footer">

        <div className="footer-content">

          <p>
            © 2026 Reformer Centar Osijek
          </p>

        </div>

      </footer>


    </main>
  );
}


export default HOME;