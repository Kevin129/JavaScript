// //Dziedziczenie
// class Sukces {
//     koncowyTekst() {
//         return console.log("Dziękujemy za skorzystanie z naszego oprogramowania")
//     }
// }

// const wykonajObliczenie = new Obliczenia();
// console.log(wykonajObliczenie.koncowyTekst())

// class Obliczenia extends Sukces{
//     get tekst() {
//         return "Twoje obliczenie to: "
//     }
//     get komunikat() {
//         return "Twoja liczba jest mniejsza od 10! "
//     }
//     dodawanie() {
//         return 2+6
//     }
//     mnozenie() {
//         return 4*5
//     }
    
//     koncowyRezultat(koncowaWartosc) {
//         console.log(this.tekst + " " + koncowaWartosc)
//         if(koncowaWartosc < 10) {
//             console.log(this.komunikat)
//         }
//     }
// }


//Dziedziczenie
class WyswietlImie {
    constructor(pierwszeImie, drugieImie) {
        this.pierwszeImie = pierwszeImie;
        this.drugieImie = drugieImie;
    }
    koncowyTekst() {
        return console.log("Podanane imie to: " + this.pierwszeImie + " oraz " + this.drugieImie)
    }
}

const renderujImie = new WyswietlImie("Tomasz", "Rafał");
console.log(renderujImie.koncowyTekst())