import 'bootstrap/dist/css/bootstrap.min.css'

export default function REZERVACIJE() {
    return (
        <main className="page-wrapper">
            <section className="page-card reveal show">

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
                    </div>

                </div>

                <div className="address-card">
                    <strong>Gdje se nalazimo?</strong>

                    <span>
                        BlueGym Centar Osijek, Pavla Pejačevića 22,
                        Osijek
                    </span>
                </div>

                <div className="page-content">

                    <p>
                        Ako su treninzi u tijeku, nažalost nećemo moći
                        odmah odgovoriti na vaše upite.
                    </p>

                    <p>
                        Trenutno nemamo kontakt formu za komunikaciju putem
                        e-maila, društvenih mreža ili telefonskog poziva,
                        ali radimo na tome.
                    </p>

                </div>

            </section>
        </main>
    )
}