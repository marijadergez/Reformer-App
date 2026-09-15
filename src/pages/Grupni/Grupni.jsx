
import 'bootstrap/dist/css/bootstrap.min.css'

export default function GRUPNI() {
    return (
        <main className="page-wrapper">

            <section className="page-card reveal show">

                <div className="page-header module-header">
                    <span className="page-eyebrow">
                        Reformer Centar Osijek
                    </span>

                    <h1>Grupni reformer trening</h1>
                </div>

                <div className="info-grid">

                    <div className="info-card">
                        <i className="bi bi-clock"></i>
                        <h3>Trajanje</h3>
                        <p><strong>90 minuta</strong> treninga.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-currency-euro"></i>
                        <h3>Cijena</h3>
                        <p><strong>20,00 € za 2 osobe</strong></p>
                        <small>Cijena uključuje PDV.</small>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-people"></i>
                        <h3>Grupni trening</h3>
                        <p>
                            Program za <strong>2 osobe</strong> uz izmjenu
                            rada na Reformeru i prostirci.
                        </p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-universal-access"></i>
                        <h3>Funkcionalni trening</h3>
                        <p>
                            Koriste se prostirka i različiti rekviziti
                            prema sadržaju treninga.
                        </p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-activity"></i>
                        <h3>Cilj treninga</h3>
                        <p>
                            Fokus na snagu, stabilnost, mobilnost i
                            odabrane mišićne skupine.
                        </p>
                    </div>

                </div>

                <div className="page-content">

                    <p>
                        Grupni reformer trening u Reformer Centru Osijek
                        namijenjen je za <strong>dvije osobe</strong> koje žele
                        trenirati zajedno i kombinirati rad na Reformeru
                        s vježbama na prostirci.
                    </p>

                    <p>
                        U Centru trenutno imamo jednu spravu Reformer,
                        pa se tijekom treninga izmjenjuju rad na Reformeru
                        i rad na prostirci uz korištenje različitih rekvizita.
                    </p>

                    <p>
                        Dok jedna osoba vježba na Reformeru, druga radi
                        vježbe na prostirci ili koristi vrijeme za odmor.
                        Na taj način trening uključuje različite vrste
                        vježbi i omogućuje rad na snazi, stabilnosti,
                        mobilnosti i odabranim mišićnim skupinama.
                    </p>

                    <p>
                        Program je prilagođen mogućnostima i ciljevima
                        vježbača, a sadržaj treninga može se prilagođavati
                        tijekom rada prema potrebama grupe.
                    </p>

                    <p>
                        Napredak se prati kroz treninge, a ako želite,
                        možete zatražiti i besplatno snimanje dijela
                        treninga kako biste kasnije mogli pratiti
                        izvedbu vježbi.
                    </p>

                    <p>
                        Vaš trening prilagođen je vašim mogućnostima,
                        tempu i ciljevima. Cilj je kvalitetno i smisleno
                        kretanje u ugodnom radu u paru.
                    </p>

                    <p>
                        <strong>Napomena:</strong> Vježbate na vlastitu
                        odgovornost te je potrebno pridržavati se
                        instruktorskih uputa tijekom treninga.
                    </p>

                    <br />

                    <div className="reservation-card">
                        <i className="bi bi-people"></i>

                        <h2>Grupni trening</h2>

                        <p>
                            Za rezervaciju grupnog treninga potrebno je <strong>osobno doći</strong>{' '}
                             u Reformer Centar, na adresu
                            BlueGym Centar Osijek, Pavla Pejačevića 22,
                            kako bismo dogovorili detalje i način plaćanja.
                        </p>

                        <p>
                            Trenutno nemamo kontakt formu za rezervaciju
                            grupnih treninga, ali radimo na tome.
                        </p>
                    </div>

                </div>

            </section>

            {/* SOCIAL PODSJETNIK */}

            <section className="social-reminder">

                <span>OSTANIMO U POKRETU</span>

                <h2>
                    Ono što se događa u Centru,
                    <br />
                    <em>ne ostaje uvijek samo u Centru.</em>
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
                    <p>© 2026 | MDergez</p>
                </div>
            </footer>

        </main>
    )
}

