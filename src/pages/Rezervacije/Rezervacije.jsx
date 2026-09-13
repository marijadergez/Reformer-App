
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
                        Rezervaciju termina za individualni trening
                        možete izvršiti klikom na gumb ili osobnim
                        dolaskom u studio.
                    </p>

                    <br />

                    <button className="page-button">
                        Rezerviraj termin
                    </button>
                </div>

                <div className="reservation-card">
                    <i className="bi bi-people"></i>

                    <h2>Grupni trening</h2>

                    <p>
                        Za rezervaciju grupnog treninga potrebno je
                        osobno doći u studio kako bismo dogovorili
                        detalje i način plaćanja.
                    </p>
                       <p>
                    Trenutno nemamo kontakt formu za rezervaciju grupnim treninga.
                    Ali radimo na tome.
                </p>
                </div>

            </div>

            <div className="address-card">
                <strong>Gdje se nalazimo?</strong>

                <span>
                    BlueGym Centar Osijek, Pavla Pejačevića 22,
                    Osijek
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

                <p>
                    Ako su treninzi u tijeku, nažalost nećemo moći
                    odmah odgovoriti na vaše upite.
                </p>

             

            </div>

                <div className="address-card">
                    <strong>Prigovor potrošača</strong>

                    <span>
                        Pisani prigovor možete podnijeti osobno u poslovnom prostoru,
                        poštom ili elektroničkom poštom na adresu{' '}
                        <a href="mailto:mdergez@gmail.com">
                            mdergez@gmail.com
                        </a>
                        . Na zaprimljeni prigovor odgovorit ćemo u zakonom propisanom roku.
                    </span>
                </div>
                <div className="address-card">
                    <strong>Pravila rezervacije i promjene termina</strong>

                    <span>
                        Rezervacija termina potvrđuje se nakon izvršenog plaćanja.
                        Rezervirani termin namijenjen je osobi koja ga je rezervirala
                        i vrijedi za odabrani datum i vrijeme.
                        <br /><br />

                        Ako korisnik ne može iskoristiti rezervirani termin, promjenu
                        termina potrebno je dogovoriti izravno s nama.
                        Uplaćeni iznos može se, prema dogovoru i raspoloživosti,
                        iskoristiti za drugi termin.
                        <br /><br />

                        Novi termin dogovara se prema raspoloživim terminima i
                        kapacitetu studija. Promjene termina ne provode se automatski
                        putem sustava za rezervaciju i plaćanje.
                        <br /><br />

                        Ova pravila ne utječu na prava potrošača koja proizlaze iz
                        prisilnih odredbi važećih propisa.
                    </span>
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
                            · Upravni odjel za gospodarstvo i turizam Osječko-baranjske županije
                            <br />
                            · Ministarstvo turizma i sporta
                        </p>

                        <p>
                            <strong>E-mail:</strong><br />
                            mdergez@gmail.com
                        </p>

                        <p>
                            <strong>Telefon:</strong><br />
                            +385911918465
                        </p>

                    </div>

                </footer>

            </section>
        </main>
    )
}

