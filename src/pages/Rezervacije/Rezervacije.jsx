import 'bootstrap/dist/css/bootstrap.min.css'

export function RezervacijaSection() {
    return (
        <>
            <div className="page-header">
                <span className="page-eyebrow">
                    Reformer Centar
                </span>

                <h1>Rezervacije termina</h1>
            </div>

            <div className="reservation-grid">

                <div className="reservation-card">
                    <i className="bi bi-person-check"></i>

                    <h2>Individualni trening</h2>

                    <p>
                        <strong>55 minuta — 11,00 € po osobi</strong>
                    </p>

                    <p>
                        Cijena usluge uključuje PDV. Plaćanje karticom moguće je
                        bez dodatne naknade za korisnika; eventualnu naknadu
                        povezanu s kartičnim plaćanjem snosi Studio.
                    </p>

                    <p>
                        Termin se rezervira za odabrani datum i vrijeme, a
                        rezervacija se potvrđuje nakon izvršenog plaćanja.
                    </p>

                    <br />

                    <div className="reservation-actions">

                        <a
                            href="/uvjeti-rezervacije"
                            className="page-button"
                        >
                            Uvjeti rezervacije
                        </a>

                        <a
                            href="/pravila-rezervacije-i-otkazivanja"
                            className="page-button"
                        >
                            Pravila rezervacije i otkazivanja
                        </a>

                        <button className="page-button">
                            Rezerviraj termin — 11,00 €
                        </button>

                    </div>
                </div>


                <div className="reservation-card">
                    <i className="bi bi-people"></i>

                    <h2>Grupni trening</h2>

                    <p>
                        Grupne treninge trenutno je moguće rezervirati osobno
                        u studiju, uz prethodni dogovor o terminu, broju
                        sudionika i načinu plaćanja.
                    </p>

                    <p>
                        Online rezervacija grupnih treninga trenutno nije
                        dostupna.
                    </p>
                </div>

            </div>


            <div className="address-card">
                <strong>Mjesto održavanja treninga</strong>

                <span>
                    BlueGym Centar Osijek, Pavla Pejačevića 22, Osijek
                </span>
            </div>
        </>
    )
}


export default function REZERVACIJE() {
    return (
        <main className="page-wrapper">
            <section className="page-card reveal show">

                <RezervacijaSection />

                <div className="page-content">

                    <div className="address-card">
                        <strong>Prigovor potrošača</strong>

                        <span>
                            Pisani prigovor možete podnijeti osobno u
                            poslovnom prostoru, poštom ili elektroničkom
                            poštom na adresu{' '}

                            <a href="mailto:mdergez@gmail.com">
                                mdergez@gmail.com
                            </a>.

                            <br /><br />

                            Na zaprimljeni pisani prigovor odgovorit ćemo
                            u roku od 15 dana od dana njegova zaprimanja,
                            u skladu s važećim propisima.
                        </span>
                    </div>

                </div>


                <footer className="page-footer">

                    <h2>Impressum</h2>

                    <div className="impressum-content">

                        <p>
                            <strong>Naziv obrta:</strong><br />
                            M DERGEZ, Obrt za usluge
                        </p>

                        <p>
                            <strong>Vlasnica:</strong><br />
                            Marija Dergez
                        </p>

                        <p>
                            <strong>Sjedište:</strong><br />
                            Osječka 77C, 31221 Josipovac, Hrvatska
                        </p>

                        <p>
                            <strong>Matični broj obrta (MBO):</strong><br />
                            99360179
                        </p>

                        <p>
                            <strong>Oznaka obrtnice:</strong><br />
                            14010012133
                        </p>

                        <p>
                            <strong>Registar:</strong><br />
                            Obrtni registar Republike Hrvatske
                        </p>

                        <p>
                            <strong>Nadležno tijelo:</strong><br />
                            Upravni odjel za gospodarstvo i turizam
                            Osječko-baranjske županije
                            <br />
                            Ministarstvo turizma i sporta
                        </p>

                        <p>
                            <strong>E-mail:</strong><br />
                            <a href="mailto:mdergez@gmail.com">
                                mdergez@gmail.com
                            </a>
                        </p>

                        <p>
                            <strong>Telefon:</strong><br />
                            +385 91 191 8465
                        </p>

                        <p>
                            <strong>Web:</strong><br />
                            www.mdergez.hr
                        </p>

                    </div>

                </footer>

            </section>
        </main>
    )
}