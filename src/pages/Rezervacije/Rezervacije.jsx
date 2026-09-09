import 'bootstrap/dist/css/bootstrap.min.css'


export default function REZERVACIJE() {
    return (
        <>
            <h1>Rezervacije termina</h1>

            <p>
                Rezervacije termina za individualne treninge
                možete izvršiti klikom na:
                
                <button className="me-2">
                    Rezerviraj termin
                </button>

                ili osobnim dolaskom na adresu studija:
                BlueGym Centar Osijek, Pavla Pejačevića 22.

                <br /><br />

                Ukoliko želite rezervirati termin za grupni trening,
                to možete izvršiti osobnim dolaskom u studio, kako bismo
                utvrdili detalje.

                <br /><br />

                Ako su treninzi u tijeku, nažalost nećemo moći odgovoriti
                na Vaše upite, stoga u ponudi ne postoji kontakt forma za
                komuniciranje putem e-maila, društvenih mreža ili telefonskog
                poziva, ali radimo na tome.
            </p>
        </>
    )
}