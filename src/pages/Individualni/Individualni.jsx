import 'bootstrap/dist/css/bootstrap.min.css'

export default function INDIVIDUALNI() {
    return (
        <main className="page-wrapper">
            <section className="page-card reveal show">

                <div className="page-header">
                    <span className="page-eyebrow">
                        Reformer Centar
                    </span>

                    <h1>Osobni program</h1>
                </div>

                <div className="info-grid">

                    <div className="info-card">
                        <i className="bi bi-clock"></i>
                        <h3>Trajanje</h3>
                        <p>55 minuta individualnog treninga.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-person"></i>
                        <h3>Individualni pristup</h3>
                        <p>Jedna osoba i instruktorica.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-person-arms-up"></i>
                        <h3>Prilagodba</h3>
                        <p>Vježbe se prilagođavaju vašim mogućnostima i ciljevima.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-graph-up"></i>
                        <h3>Praćenje napretka</h3>
                        <p>Program se prilagođava vašem napretku.</p>
                    </div>

                </div>

                <div className="page-content">

                    <p>
                        Trenutno u studiju imamo jednu spravu Reformer na kojem
                        se izvode individualni treninzi u privatnom okruženju.
                        Instruktorica prilagođava vježbe vašim mogućnostima,
                        potrebama i ciljevima.
                    </p>

                    <p>
                        Svih 55 minuta ste na Reformeru, od zagrijavanja do
                        istezanja. Individualni treninzi omogućuju veći fokus
                        na tehniku, pravilno izvođenje pokreta i postizanje
                        rezultata kojima težite.
                    </p>

                    <p>
                        Ovaj program idealan je za one koji žele intenzivniji
                        pristup vježbanju, imaju specifične ciljeve ili se
                        oporavljaju od ozljeda.
                    </p>

                    <p>
                        Instruktor prati vaš razvoj i prilagođava trening
                        vašem napretku kako bi vježbanje bilo što sigurnije
                        i učinkovitije.
                    </p>

                    <p>
                        Ako želite, možete zatražiti i besplatno snimanje
                        treninga kako biste kasnije mogli pratiti izvedbu
                        vježbi.
                    </p>

                    <p>
                        Vaš sat prilagođen je vašim željama i mogućnostima.
                        Radujemo se svim vašim pomacima i postignućima.
                    </p>

                    <p>
                        <strong>Napomena:</strong> Vježbate na vlastitu
                        odgovornost te je potrebno pridržavati se
                        instruktorskih uputa kako bi vježbanje bilo sigurno
                        i učinkovito.
                    </p>

                </div>

            </section>
            {/* SOCIAL PODSJETNIK */}

            <section className="social-reminder">

                <span>OSTANIMO U POKRETU</span>

                <h2>
                    Ono što se događa u studiju,
                    <br />
                    <em>ne ostaje uvijek samo u studiju.</em>
                </h2>

                <p>Pratite nas.</p>

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


            {/* FOOTER */}

            <footer className="site-footer">
                <div className="footer-content">
                    <p>© 2026 Reformer Centar | MDergez</p>
                </div>
            </footer>

        </main>

            
   
    )
}