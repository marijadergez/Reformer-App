
import 'bootstrap/dist/css/bootstrap.min.css'

export default function INDIVIDUALNI() {
    return (
        <main className="page-wrapper">
            <section className="page-card reveal show">

                <div className="page-header module-header">
                    <span className="page-eyebrow">
                        Reformer Centar Osijek
                    </span>

                    <h1>Individualni reformer trening</h1>
                </div>

                <div className="individual-actions">

                    <a href="/rezervacije" className="page-button">
                        Rezerviraj termin
                    </a>

                    <div className="legal-links">
                        <a href="/uvjeti-rezervacije">
                            Uvjeti rezervacije
                        </a>

                        <a href="/pravila-rezervacije-i-otkazivanja">
                            Pravila rezervacije i otkazivanja
                        </a>

                        <a href="/privatnost">
                            Politika privatnosti
                        </a>
                    </div>

                </div>

                <div className="info-grid">

                    <div className="info-card">
                        <i className="bi bi-clock"></i>
                        <h3>Trajanje</h3>
                        <p>55 minuta individualnog treninga.</p>
                    </div>

                    <div className="info-card">
                        <i className="bi bi-currency-euro"></i>
                        <h3>Cijena</h3>
                        <p>11,00 €</p>
                        <small>Cijena uključuje PDV.</small>
                        <small>Bez dodatne naknade za kartično plaćanje korisniku.</small>
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
                        Individualni reformer trening u Reformer Centru Osijek
                        namijenjen je svima koji žele rad <strong>rad jedan-na-jedan</strong>,
                        individualnu pažnju i trening prilagođen vlastitim
                        mogućnostima i ciljevima.
                    </p>

                    <p>
                        Trenutno u Centru imamo jednu spravu Reformer na kojoj
                        se izvode individualni treninzi u privatnom okruženju.
                        Instruktorica tijekom treninga prilagođava vježbe,
                        intenzitet i način rada vašim potrebama.
                    </p>

                    <p>
                        Svih 55 minuta treninga provodite na Reformeru,
                        od početne pripreme i zagrijavanja do završnog
                        smirivanja. Individualni rad omogućuje veći fokus
                        na tehniku, kontrolu pokreta i kvalitetu izvedbe.
                    </p>

                    <p>
                        Trening je prikladan za osobe koje žele individualniji
                        pristup vježbanju, imaju određene ciljeve ili žele
                        postupno unaprijediti svoju snagu, stabilnost,
                        mobilnost i kvalitetu kretanja.
                    </p>


                    <p>
                        Individualni pristup može biti posebno koristan
                        osobama koje se nakon dulje pauze ili {' '}
                        <strong>oporavka od ozljede</strong> žele postupno
                       vratiti redovitom vježbanju.
                    </p>

                    <p>
                        Vaš napredak prati se kroz treninge, a sadržaj i
                        zahtjevnost vježbi prilagođavaju se vašem razvoju.
                        Cilj je da trening bude smislen, kvalitetno vođen
                        i prilagođen vašoj trenutnoj razini.
                    </p>

                    <p>
                        Ako želite, možete zatražiti i besplatno snimanje
                        dijela treninga kako biste kasnije mogli pratiti
                        izvedbu vježbi.
                    </p>

                    <p>
                        Svaki trening prilagođen je vašim mogućnostima,
                        tempu i ciljevima. Radujemo se pratiti vaše pomake
                        i napredak.
                    </p>

                    <p>
                        <strong>Napomena:</strong> Vježbate na vlastitu
                        odgovornost te je potrebno pridržavati se
                        instruktorskih uputa tijekom treninga.
                    </p>

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
                    <p>© 2026 | MDergez </p>
                </div>
            </footer>

        </main>
    )
}

