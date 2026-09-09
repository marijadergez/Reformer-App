import { IME_APLIKACIJE } from "../constants"
import Grupni from "./Grupni/Grupni"
import Individualni from "./Individualni/Individualni"

export default function HOME() {
    return (
        <>
            <h1>Dobrodošli u {IME_APLIKACIJE}</h1>

            <p>
                Aplikacija služi za informiranje o programima studija Reformer Centar
                koji se nalazi na adresi Pavla Pejačevića 22 u Osijeku u prostorijama
                BlueGym Centra. Na ovoj stranici možete pronaći informacije o
                individualnim i grupnim programima, kao i kontakt formu za upite te
                link za rezervaciju termina.
            </p>

            <div className="klasa1">
                <h1>Osobni program</h1>
                <p>
                    Vježbanje na reformeru je individualno osim ako ne poželite
                    dijeliti svoj termin sa još jednom osobom, ali u tom slučaju
                    trening potraje i do 90 minuta. Individualan pristup pruža mnoge
                    prednosti, također pomaže u rehabilitaciji ozljeda i poboljšanju
                    tjelesne svijesti. Reformer vježbe su prilagodljive različitim
                    razinama tjelesne spremnosti, što ih čini pogodnima za svakoga,
                    od početnika do iskusnih vježbača. No krenimo od samog početka,
                    od prije stotinu godina...
                </p>
            </div>

            <div className="klasa2">
                <h1>Kontrologija</h1>

                <p>
                    Oko 25. godine prošlog stoljeća Joseph Pilates donio je svoju
                    metodu u New York, gdje je otvorio studio i počeo podučavati
                    sustav koji je nazivao Contrology (današnji Pilates). Njegova
                    je filozofija bila jednostavna, ali revolucionarna – kroz
                    svjesnu i preciznu kontrolu pokreta povezati tijelo i um.

                    U središtu metode nalazi se kontrola pokreta – svjesno
                    povezivanje uma i tijela, pravilno disanje, preciznost,
                    koncentracija i kvalitetna izvedba svakog pokreta.

                    Upravo je ta pažnja prema načinu na koji se tijelo kreće jedna
                    od ključnih karakteristika vježbanja na reformeru. Cilj nije
                    samo snažnije tijelo, već bolja koordinacija, stabilnost,
                    fleksibilnost, držanje i svjesnost vlastitog tijela.
                </p>
            </div>

            <div className="klasa3">
                <h1>Od rehabilitacije do Reformera</h1>

                <p>
                    Korijeni Reformera sežu u razdoblje Prvog svjetskog rata.
                    Nakon internacije u Engleskoj, Joseph Pilates radio je kao
                    bolnički pomoćnik te je pomagao pacijentima koji zbog ozljeda
                    i bolesti nisu mogli hodati.

                    Kako bi im omogućio pokret i vježbanje, koristio je opruge
                    pričvršćene za bolničke krevete kako bi podupirao njihove udove
                    i stvarao otpor. Upravo su ta iskustva s rehabilitacijom i
                    radom s oprugama postavila temelje za razvoj sustava sprava
                    koji će kasnije postati prepoznatljiviji.

                    Iz tih ranih improvizacija razvijale su se sprave poput
                    Cadillaca i Reformera, koje danas omogućuju precizan i
                    kontroliran pokret uz pomoć opruga i različitih razina otpora.

                    Fokus je na tome da nije toliko važno što radite, već kako to
                    radite. Zahtjev je na intenzivnoj koncentraciji i fokusu na
                    držanje, mišiće trupa i disanje. Sve se svodi na pametniji,
                    a ne teži rad, gdje je preciznost sve.
                </p>
            </div>

            <div className="klasa4">
            </div>


              <Grupni />

            <Individualni />
        </>
    )
}

