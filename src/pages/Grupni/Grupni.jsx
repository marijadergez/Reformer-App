import 'bootstrap/dist/css/bootstrap.min.css'

export default function GRUPNI() {
    return (
        <main className="page-wrapper">

            <section className="page-card reveal show">

                <div className="page-header">
                    <span className="page-eyebrow">
                        Reformer Centar
                    </span>

                    <h1>Grupni program</h1>
                </div>

                <div className="info-grid">

                    <div className="info-card">
                        <i className="bi bi-clock"></i>
                        <h3>Trajanje</h3>
                        <p>Trening traje do 90 minuta.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-people"></i>
                        <h3>Grupni trening</h3>
                        <p>Program se odvija uz izmjenu rada na Reformeru i prostirci.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-universal-access"></i>
                        <h3>Funkcionalni trening</h3>
                        <p>Koriste se prostirka i različiti rekviziti.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-activity"></i>
                        <h3>Cilj treninga</h3>
                        <p>Fokus na mišićne skupine prema potrebama vježbača.</p>
                    </div>

                </div>

                <div className="page-content">

                    <p>
                        U studiju trenutno imamo jednu spravu Reformer na kojoj
                        se izvode grupni treninzi u trajanju do 90 minuta.
                    </p>

                    <p>
                        Program je prilagođen osobama koje žele dužu pauzu
                        između vježbi te kombinaciju rada na Reformeru i
                        funkcionalnog treninga na prostirci uz korištenje
                        rekvizita.
                    </p>

                    <p>
                        Dok jedna osoba vježba na Reformeru, druga odmara ili
                        vježba na prostirci. Na taj način trening može uključiti
                        različite vrste vježbi i omogućiti fokus na određene
                        skupine mišića koje želite intenzivnije obuhvatiti.
                    </p>

                    <p>
                        Vaši rezultati bit će kronološki praćeni, a ako želite,
                        možete zatražiti i besplatno snimanje treninga.
                    </p>

                    <p>
                        Vaš sat prilagođen je vašim željama i mogućnostima te
                        se radujemo svim vašim pomacima i postignućima.
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