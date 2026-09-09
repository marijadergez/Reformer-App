import React, { useEffect, useRef, useState } from "react";
import { IME_APLIKACIJE } from "../constants";
import Grupni from "./Grupni/Grupni";
import Individualni from "./Individualni/Individualni";
import Rezervacije from "./Rezervacije/Rezervacije";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const Stat = ({ number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number, 10);
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="stat-card">
      <strong>
        {count}
        {number === "55" ? " min" : number === "90" ? " min" : "+"}
      </strong>
      <span>{label}</span>
    </div>
  );
};

function HOME() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <span className="eyebrow">
            PILATES • REFORMER • MOVEMENT
          </span>

          <h1>
            Dobrodošli u{" "}
            <span>{IME_APLIKACIJE}</span>
          </h1>

          <p>
            Pokret koji gradi snagu, stabilnost i bolje razumijevanje
            vlastitog tijela.
          </p>

          <div className="hero-buttons">
            <a href="#rezervacije" className="btn-main">
              Rezerviraj termin
              <i className="bi bi-arrow-right"></i>
            </a>

            <a href="#zasto-reformer" className="btn-secondary">
              Saznaj više
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          Scroll
        </div>
      </section>


      {/* ZAŠTO REFORMER */}
      <Reveal>
        <section id="zasto-reformer" className="info-section">
          <div className="section-heading">
            <span>01 / ZAŠTO REFORMER?</span>
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
              <h3>Svjesniji pokret</h3>
              <p>
                Učimo kako pravilno izvoditi pokrete i bolje razumjeti
                vlastito tijelo.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>
              <h3>Snaga i stabilnost</h3>
              <p>
                Kontrolirani pokreti aktiviraju mišiće i grade funkcionalnu
                snagu.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-bullseye"></i>
              </div>
              <h3>Individualni pristup</h3>
              <p>
                Vježbe se prilagođavaju tvojoj razini, mogućnostima i
                ciljevima.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h3>Kontrola tijela</h3>
              <p>
                Fokus nije samo na izgledu, već na kvalitetnijem i sigurnijem
                kretanju.
              </p>
            </article>

          </div>
        </section>
      </Reveal>


      {/* STATISTIKE */}
      <Reveal>
        <section className="stats-section">

          <div className="stats-intro">
            <span>NAŠ PRISTUP</span>
            <h2>
              Malo drugačiji
              <br />
              pogled na trening.
            </h2>
          </div>

          <div className="stats-grid">
            <Stat number="55" label="minuta individualnog treninga" />
            <Stat number="90" label="minuta grupnog programa" />
            <Stat number="1" label="reformer po individualnom treningu" />
          </div>

        </section>
      </Reveal>


      {/* KAKO IZGLEDA TRENING */}
      <Reveal>
        <section className="timeline-section">

          <div className="section-heading centered">
            <span>02 / KAKO IZGLEDA TRENING?</span>
            <h2>
              Od prvog pokreta
              <br />
              do osjećaja <em>snage.</em>
            </h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div>
                <h3>Priprema</h3>
                <p>
                  Kratko zagrijavanje i priprema tijela za kvalitetan pokret.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div>
                <h3>Reformer</h3>
                <p>
                  Upoznajemo spravu i kroz kontrolirane pokrete aktiviramo
                  cijelo tijelo.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div>
                <h3>Glavni dio</h3>
                <p>
                  Fokusiramo se na snagu, stabilnost, mobilnost i pravilnu
                  tehniku.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">04</div>
              <div>
                <h3>Smirivanje</h3>
                <p>
                  Trening završavamo kontroliranim pokretima i istezanjem.
                </p>
              </div>
            </div>

          </div>
        </section>
      </Reveal>


      {/* PROGRAMI */}
      <Reveal>
        <section className="program-section">

          <div className="section-heading">
            <span>03 / PROGRAMI</span>
            <h2>
              Odaberi ritam koji
              <br />
              <em>odgovara tebi.</em>
            </h2>
          </div>

          <div className="program-comparison">

            <div className="program-card">
              <div className="program-top">
                <span>01</span>
                <i className="bi bi-person"></i>
              </div>

              <h3>Individualni</h3>

              <p>
                Potpuno personaliziran pristup uz instruktora koji prati tvoj
                napredak i prilagođava vježbe tvojim potrebama.
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

              <a href="#rezervacije">
                Rezerviraj individualni
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>


            <div className="program-card featured">
              <div className="program-badge">
                POPULARNO
              </div>

              <div className="program-top">
                <span>02</span>
                <i className="bi bi-people"></i>
              </div>

              <h3>Grupni</h3>

              <p>
                Dinamičan trening u manjoj grupi uz kombinaciju rada na
                reformeru, prostirci i rekvizitima.
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

              <a href="#rezervacije">
                Rezerviraj grupni
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>

          </div>
        </section>
      </Reveal>


      {/* POSTOJEĆI PROGRAMI */}
      <Reveal>
        <section className="existing-programs">
          <Individualni />
          <Grupni />
        </section>
      </Reveal>


      {/* QUOTE */}
      <Reveal>
        <section className="quote-section">

          <div className="quote-mark">“</div>

          <blockquote>
            Fizička kondicija je prvi uvjet sreće.
          </blockquote>

          <span>— Joseph Pilates</span>

        </section>
      </Reveal>


      {/* REZERVACIJE */}
      <Reveal>
        <section id="rezervacije" className="reservation-cta">

          <div className="cta-content">
            <span>04 / REZERVACIJE</span>

            <h2>
              Vrijeme je da
              <br />
              napraviš nešto <em>za sebe.</em>
            </h2>

            <p>
              Odaberi program koji ti odgovara i napravi prvi korak prema
              kvalitetnijem kretanju.
            </p>

            <a href="#rezervacija-form" className="cta-button">
              Rezerviraj svoj termin
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

        </section>
      </Reveal>


      {/* POSTOJEĆE REZERVACIJE */}
      <Reveal>
        <Rezervacije />
      </Reveal>


      {/* SOCIAL */}
      <Reveal>
        <section className="social-section">

          <span>OSTANIMO POVEZANI</span>

          <h2>
            Pratite nas
            <br />
            <em>i izvan studija.</em>
          </h2>

          <div className="social-icons">

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

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>

          </div>

        </section>
      </Reveal>


      {/* FOOTER */}
      <footer className="footer">

        <div>
          <strong>{IME_APLIKACIJE}</strong>
          <span>Reformer • Pilates • Movement</span>
        </div>

        <p>
          © {new Date().getFullYear()} {IME_APLIKACIJE}
        </p>

      </footer>

    </main>
  );
}

export default HOME;