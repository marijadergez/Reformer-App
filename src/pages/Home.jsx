<<<<<<< Updated upstream
import { IME_APLIKACIJE } from "../constants"

export default function Individualni() {
    return (
        <>
            <h1>Dobrodošli u {IME_APLIKACIJE} </h1>
            <p>
                Aplikacija služi za informiranje o programima studija Reformer Centar koji se nalazi na adresi Pavla Pejačevića 22 u Osijeku u prostorijama BlueGym Centra. Na ovoj stranici možete pronaći informacije o individualnim i grupnim programima , kao i kontakt formu za upite te link za rezervaciju termina.
            </p>

            <div>
                <h1>Osobni program</h1>
                <p>
                    Vježbanje na reformeru je  individualno  osim ako ne poželite dijeliti svoj termin sa još jednom osobom ali u tom slučaju trening potraje i do 90 minuta.Individualan pristup pruža mnoge prednosti,također pomaže u rehabilitaciji ozljeda i poboljšanju tjelesne svijesti. Reformer vježbe su prilagodljive različitim razinama tjelesne spremnosti, što ih čini pogodnima za svakoga, od početnika do iskusnih vježbača.   No krenimo od od samog početka od prije stotinu godina...
                </p>
            </div>
            <div>
                <h1>Kontrologija </h1>

                <p>
                    Oko 25.godine prošlog stoljeća Joseph Pilates donio je svoju metodu u New York, gdje je otvorio studio i počeo podučavati sustav koji je nazivao Contrology (današnji Pilates). Njegova je filozofija bila jednostavna, ali revolucionarna – kroz svjesnu i preciznu kontrolu pokreta povezati tijelo i um.

                    U središtu  metode nalazi se kontrola pokreta – svjesno povezivanje uma i tijela, pravilno disanje, preciznost, koncentracija i kvalitetna izvedba svakog pokreta.

                    Upravo je ta pažnja prema načinu na koji se tijelo kreće jedna od ključnih karakteristika vježbanja  na reformeru,te cilj nije samo snažnije tijelo, već bolja koordinacija, stabilnost, fleksibilnost, držanje i svjesnost vlastitog tijela. Redovitom praksom  pridonosimo razvoju mišićne snage i fleksibilnosti, boljoj tjelesnoj kontroli i držanju te kvalitetnijem izvođenju svakodnevnih pokreta. A svjesni smo da dnašnji način života dovodi do problema s držanjem i mišićnom slabost, jer većina ljudi provodi previše vremena sjedeći,premalo se krečući, što dovodi do lošeg držanja i bolova u leđima i vratu.

                </p>

            </div>
            <h1>Od rehabilitacije do Reformera</h1>
            <p>

                Korijeni Reformera sežu u razdoblje Prvog svjetskog rata. Nakon internacije u Engleskoj, Joseph Pilates radio je kao bolnički pomoćnik te je pomagao pacijentima koji zbog ozljeda i bolesti nisu mogli hodati.

                Kako bi im omogućio pokret i vježbanje, koristio je opruge pričvršćene za bolničke krevete kako bi podupirao njihove udove i stvarao otpor. Upravo su ta iskustva s rehabilitacijom i radom s oprugama postavila temelje za razvoj sustava sprava koji će kasnije postati prepoznatljivije.
                Iz tih ranih improvizacija razvijale su se sprave poput Cadillaca i Reformera, koje danas omogućuju precizan i kontroliran pokret uz pomoć opruga i različitih razina otpora.Fokus je na tome da nije toliko važno što radite, već kako to radite. Zahtijev je na  intenzivnoj koncentraciji i fokusu na držanje, mišiće trupa i disanje. Sve se svodi na pametniji, a ne teži rad, gdje je preciznost sve.
            </p>
            <div>
=======

import { IME_APLIKACIJE } from "../constants";

import Grupni from "./Grupni/Grupni";
import Individualni from "./Individualni/Individualni";
import Rezervacije from "./Rezervacije/Rezervacije";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


export default function HOME() {

    return (
        <main className="home">

            {/* ================= HERO ================= */}

            <section className="hero">

                <h1>
                    Dobrodošli u{" "}
                    <span>{IME_APLIKACIJE}</span>
                </h1>

                <p>
                    Otkrijte svijet Reformer Pilatesa kroz individualne
                    i grupne programe prilagođene Vašim mogućnostima,
                    potrebama i ciljevima.
                </p>

                <button>
                    Rezerviraj termin
                </button>

            </section>


            {/* ================= OSOBNI PROGRAM ================= */}

            <section className="klasa1">

                <h1>
                    Osobni program
                </h1>

                <p>
                    Vježbanje na reformeru je individualno (55 minuta) osim ako ne
                    poželite dijeliti svoj termin sa još jednom osobom.
                    U tom slučaju trening može trajati i do 100 minuta.

                    <br />
                    <br />

                    Individualan pristup pruža mnoge prednosti te pomaže
                    u rehabilitaciji ozljeda i poboljšanju tjelesne
                    svijesti.

                    <br />
                    <br />

                    Reformer vježbe prilagodljive su različitim razinama
                    tjelesne spremnosti, što ih čini pogodnima za svakoga
                    – od početnika do iskusnih vježbača.

                    <br />
                    <br />

                    No krenimo od samog početka,
                    od prije stotinu godina...
                </p>

            </section>


            {/* ================= KONTROLOGIJA ================= */}

            <section className="klasa2">

                <h1>
                    Kontrologija
                </h1>

                <p>
                    Oko 25. godine prošlog stoljeća Joseph Pilates donio
                    je svoju metodu u New York, gdje je otvorio studio
                    i počeo podučavati sustav koji je nazivao Contrology,
                    današnji Pilates.

                    <br />
                    <br />

                    Njegova filozofija bila je jednostavna, ali
                    revolucionarna – kroz svjesnu i preciznu kontrolu
                    pokreta povezati tijelo i um.

                    <br />
                    <br />

                    U središtu metode nalazi se svjesno povezivanje
                    uma i tijela, pravilno disanje, preciznost,
                    koncentracija i kvalitetna izvedba svakog pokreta.

                    <br />
                    <br />

                    Upravo je pažnja prema načinu na koji se tijelo kreće
                    jedna od ključnih karakteristika vježbanja na reformeru.

                    Cilj nije samo snažnije tijelo, već bolja koordinacija,
                    stabilnost, fleksibilnost, držanje i svjesnost
                    vlastitog tijela.
                </p>

            </section>


            {/* ================= POVIJEST REFORMERA ================= */}

            <section className="klasa3">

                <h1>
                    Od rehabilitacije do Reformera
                </h1>

                <p>
                    Korijeni Reformera sežu u razdoblje Prvog svjetskog rata.

                    <br />
                    <br />

                    Nakon internacije u Engleskoj, Joseph Pilates radio je
                    kao bolnički pomoćnik te je pomagao pacijentima koji
                    zbog ozljeda i bolesti nisu mogli hodati.

                    <br />
                    <br />

                    Kako bi im omogućio pokret i vježbanje, koristio je
                    opruge pričvršćene za bolničke krevete kako bi podupirao
                    njihove udove i stvarao otpor.

                    <br />
                    <br />

                    Upravo su ta iskustva s rehabilitacijom i radom s
                    oprugama postavila temelje za razvoj sustava sprava
                    koji će kasnije postati prepoznatljiv kao
                    Pilates Reformer.

                    <br />
                    <br />

                    Iz tih ranih improvizacija razvijale su se sprave poput
                    Cadillaca i Reformera, koje danas omogućuju precizan
                    i kontroliran pokret uz pomoć opruga i različitih
                    razina otpora.

                    <br />
                    <br />

                    Fokus je na tome da nije toliko važno što radite,
                    već kako to radite.

                    Zahtjev je na intenzivnoj koncentraciji i fokusu na
                    držanje, mišiće trupa i disanje.

                    <br />
                    <br />

                    Sve se svodi na pametniji, a ne teži rad,
                    gdje je preciznost sve.
                </p>

            </section>
>>>>>>> Stashed changes


<<<<<<< Updated upstream
        </>


    )
}
=======
            {/* ================= PROGRAMI ================= */}

            <Grupni />

            <Individualni />


            {/* ================= REZERVACIJE ================= */}

            <section className="rezervacije">

                <Rezervacije />
                
                {/* ================= DRUŠTVENE MREŽE ================= */}

                <section className="social-section">

                    <div className="social-content">

                        <p className="social-small">
                            REFORMER CENTAR
                        </p>

                        <h2>
                            Pratite nas
                        </h2>

                        <p>
                            Budite u tijeku s novostima, treninzima
                            i slobodnim terminima.
                        </p>

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

                    </div>

                </section>


                <footer className="footer">

                    <p>
                        © 2026 | MDergez, obrt za usluge | {IME_APLIKACIJE}
                    </p>

                    <p>
                        Reformer • Fitness • Zdravovječnost
                    </p>

                </footer>


            </section>

        </main>
    );
}


>>>>>>> Stashed changes
