//Instrukcje warunkowe
if( 5 < 4) {
    console.log("Prawda")
} else {
    console.log("Fałsz")
}

if( "Ala" == "Ala") {
    console.log("Prawda")
} else {
    console.log("Fałsz")
}

const liczba1 = 4;
const liczba2 = 7;

if( liczba1 + liczba2 == 11) {
    console.log("Prawda")
} else {
    console.log("Fałsz")
}

const imie1 = "Alicja";
const imie2 = "Tomasz";

if(imie1 == "Alicja" && imie2 == "Tomasz") {
    console.log("Prawda")
} else {
    console.log("Fałsz")
}

const imie1 = "Alicja";
const imie2 = "Tomasz";

if(imie1 == "Alicja") {
    console.log("Hej! Alicja")
} else if(imie1 == "Tomasz") {
    console.log("Hej! Tomasz")
} else {
    console.log("Nie znaleziono osoby")
}

imie1 = "Stefan"

imie1 =="Alicja" ? console.log("Hej! Alicja") : imie1 =="Krzyś" ? console.log("Hej! Krzyś") : console.log("Nie znaleziono osoby")
