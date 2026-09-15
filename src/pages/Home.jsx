
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


/* =========================================================
   REVEAL
   ========================================================= */

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


/* =========================================================
   HOME
   ========================================================= */

function HOME() {

  useEffect(() => {
    document.title =
      "Reformer Centar Osijek | Reformer treninzi u Osijeku";

    const description =
      "Reformer Centar Osijek nudi individualne i grupne reformer treninge. Individualni trening 55 min – 11,00 €, grupni trening 90 min – 20,00 € za 2 osobe.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);


  return (
    <main className="home">


      {/* =====================================================
          01 / HERO

          ŠTO?
          GDJE?
          KOLIKO?
          ŠTO DALJE?
          ===================================================== */}

      <section className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <span className="hero-eyebrow">
            REFORMER CENTAR • OSIJEK
          </span>

          <h1>
            Reformer trening
            <br />
            u <em>Osijeku.</em>
          </h1>

          <p>
            Individualni i grupni reformer treninzi
            usmjereni na snagu, stabilnost, mobilnost
            i kvalitetnije kretanje.
          </p>


          {/* CIJENE SU NAMJERNO VIDLJIVE ODMAH */}

          <div className="mb-4">

            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-4">

              <span>
                <strong>Individualni</strong>
                {" "}• 55 min • <strong>11,00 €</strong>
              </span>

              <span>
                <strong>Grupni</strong>
                {" "}• 90 min • <strong>20,00 € za 2 osobe</strong>
              </span>

            </div>

          </div>


          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

            <Link
              to="/rezervacije"
              className="home-button"
            >
              Rezerviraj termin
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>

            <a
              href="#programi"
              className="home-button home-button-outline"
            >
              Pogledaj programe
            </a>

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



      {/* =====================================================
          02 / ZAŠTO REFORMER

          SAMO TRI JASNE KORISTI.
          NEMA PONAVLJANJA PROGRAMA.
          ===================================================== */}

      <Reveal>

        <section
          id="zasto-reformer"
          className="section"
        >

          <div className="section-header">

            <span className="section-eyebrow">
              01 / ZAŠTO REFORMER?
            </span>

            <h2>
              Jednostavno.
              <br />
              <em>Kontrolirano.</em>
            </h2>

            <p>
              Trening na reformeru omogućuje kontroliran rad
              i prilagodbu vježbi različitim razinama
              i ciljevima.
            </p>

          </div>


          <div className="feature-grid">


            <article className="feature-card glass-card">

              <div className="feature-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>

              <h3>
                Snaga i stabilnost
              </h3>

              <p>
                Kontrolirani pokreti omogućuju kvalitetan rad
                na snazi, stabilnosti i funkcionalnom kretanju.
              </p>

            </article>


            <article className="feature-card glass-card">

              <div className="feature-icon">
                <i className="bi bi-person-arms-up"></i>
              </div>

              <h3>
                Kontrola pokreta
              </h3>

              <p>
                Fokus je na preciznijem izvođenju pokreta
                i boljem razumijevanju vlastitog tijela.
              </p>

            </article>


            <article className="feature-card glass-card">

              <div className="feature-icon">
                <i className="bi bi-bullseye"></i>
              </div>

              <h3>
                Individualni pristup
              </h3>

              <p>
                Vježbe i intenzitet prilagođavaju se tvojoj
                razini, mogućnostima i ciljevima.
              </p>

            </article>


          </div>

        </section>

      </Reveal>



      {/* =====================================================
          03 / PROGRAMI I CIJENE

          OVDJE KORISNIK DONOSI ODLUKU.
          ===================================================== */}

      <Reveal>

        <section
          id="programi"
          className="section"
        >

          <div className="section-header">

            <span className="section-eyebrow">
              02 / PROGRAMI I CIJENE
            </span>

            <h2>
              Odaberi trening
              <br />
              koji <em>odgovara tebi.</em>
            </h2>

            <p>
              Dvije opcije treninga, ovisno o tome
              želiš li individualni pristup ili rad u paru.
            </p>

          </div>


          <div className="program-grid">


            {/* =================================================
                INDIVIDUALNI
                ================================================= */}

            <article className="program-card glass-card">

              <span className="section-eyebrow">
                01 / INDIVIDUALNI
              </span>

              <h3>
                Individualni reformer trening
              </h3>

              <p>
                Potpuno personaliziran trening uz individualni
                pristup i prilagodbu vježbi tvojoj razini,
                mogućnostima i ciljevima.
              </p>

              <ul>

                <li>
                  <strong>55 minuta</strong>
                </li>

                <li>
                  1 osoba
                </li>

                <li>
                  Individualno prilagođene vježbe
                </li>

                <li>
                  <strong>11,00 €</strong>
                </li>

              </ul>

              <Link
                to="/individualni"
                className="home-button"
              >
                Saznaj više
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>

            </article>



            {/* =================================================
                GRUPNI
                ================================================= */}

            <article className="program-card glass-card">

              <span className="section-eyebrow">
                02 / GRUPNI
              </span>

              <h3>
                Grupni reformer trening
              </h3>

              <p>
                Trening za dvije osobe uz rad na reformeru,
                prostirci i rekvizitima, uz stručno vođenje
                tijekom treninga.
              </p>

              <ul>

                <li>
                  <strong>90 minuta</strong>
                </li>

                <li>
                  2 osobe
                </li>

                <li>
                  Reformer + prostirka
                </li>

                <li>
                  <strong>20,00 € za 2 osobe</strong>
                </li>

              </ul>

              <Link
                to="/grupni"
                className="home-button"
              >
                Saznaj više
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>

            </article>


          </div>

        </section>

      </Reveal>



      {/* =====================================================
          04 / KAKO IZGLEDA TRENING

          KRATKO.
          NE PONAVLJA PROGRAMSKE INFORMACIJE.
          ===================================================== */}

      <Reveal>

        <section className="section">

          <div className="section-header">

            <span className="section-eyebrow">
              03 / KAKO IZGLEDA TRENING?
            </span>

                <h2>
              Pokret koji ima
              <br />
              <em>smisla.</em>
            </h2>
           

            <p>
              Svaki trening ima jasan tijek, od pripreme
              do završnog smirivanja.
            </p>

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
                  Priprema tijela za kvalitetan i kontroliran
                  trening.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-number">
                02
              </div>

              <div>

                <h3>
                  Rad na reformeru
                </h3>

                <p>
                  Uvodimo pokrete i vježbe prilagođene
                  treningu na reformeru.
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
                  Fokus na kvaliteti pokreta, snazi
                  i stabilnosti.
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



      {/* =====================================================
          05 / LOKACIJA

          KRATKO I KONKRETNO.
          ===================================================== */}

      <Reveal>

        <section className="section">

          <div className="section-header">

            <span className="section-eyebrow">
              04 / LOKACIJA
            </span>

            <h2>
              Pronađi nas
              <br />
              u <em>Osijeku.</em>
            </h2>

            <p>
              Reformer Centar Osijek nalazi se u prostoru
              BlueGym Centra Osijek.
            </p>

          </div>


          <div className="address-card">

            <strong>
              Reformer Centar Osijek
            </strong>

            <span>
              BlueGym Centar Osijek
              <br />
              Pavla Pejačevića 22, Osijek
            </span>

          </div>

        </section>

      </Reveal>



      {/* =====================================================
          06 / ZAVRŠNI CTA
          ===================================================== */}

      <Reveal>

        <section className="reservation-cta">

          <span>
            05 / REZERVACIJE
          </span>

          <h2>
            Vrijeme je da
            <br />
            napraviš nešto <em>za sebe.</em>
          </h2>

          <p>
            Odaberi svoj trening i rezerviraj termin
            u Reformer Centru Osijek.
          </p>

          <Link
            to="/rezervacije"
            className="home-button"
          >
            Rezerviraj svoj termin
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>

        </section>

      </Reveal>



      {/* =====================================================
          07 / SOCIALS

          NA HOMEU NAMJERNO MANJE.
          DETALJNI SOCIAL BLOK OSTAVLJAMO NA
          INDIVIDUALNI / GRUPNI PAGE.
          ===================================================== */}

      <Reveal>

        <section className="social-section social-section-home">

          <span className="section-eyebrow">
            OSTANIMO POVEZANI
          </span>

          <div className="social-links">

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Reformer Centar Osijek na Instagramu"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Reformer Centar Osijek na Facebooku"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Reformer Centar Osijek na TikToku"
            >
              <i className="bi bi-tiktok"></i>
            </a>

          </div>

        </section>

      </Reveal>



      {/* =====================================================
          FOOTER
          ===================================================== */}

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
