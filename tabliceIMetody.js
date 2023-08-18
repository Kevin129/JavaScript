
const imiona = ["Jaś", "Krzyś", "Ola", "Tomasz"];
const imiona2 = ["Rafał", "Wojtek", "Karol"]
// //1.Weryfikuje ile jest elementów w tablicy
console.log(imiona.length > 5);

// //2. Dostawanie sie do elementów tablicy 
console.log(imiona[2]);

// //3.Nadpisywanie elementów w tablicy
imiona[0] = "Wojtek"
console.log(imiona)

// //4.Dodawanie elementów do tablicy (na końcu tablicy)
imiona.push("Ania", 1)
console.log(imiona)

//5. Usuwanie elementu z końca tablicy
imiona.pop()
console.log(imiona)

//6. Usuwanie elementu z początku tablicy
imiona.shift()
console.log(imiona)

//7.Dodawanie elementu na początku tablicy
imiona.unshift("Karol")
console.log(imiona)

//8.Usuwanie konkretnego elementu z tablicy
sposób jeden
imiona[1] = "",

//sposób dwa
// const indexElement = imiona.indexOf("Ola")
imiona.splice(indexElement, 2)
console.log(imiona)

//9.Przerobienie tablicy na stringa
const string = imiona.join("");
console.log(typeof(string));

//10. Odwrócenie kolejności elementów w tablicy
imiona.reverse();
console.log(imiona)

//11. Sortowanie tablicy
imiona.sort();
console.log(imiona)

//12. Mapowanie elementów - wybobywa każdy element i wkonuje na nim odpowiednią operacje
//ile liter zawiera imie
imiona.map(imie => {
    if(imie.length > 5) {
        console.log("imie: " + " ma więcej niż 5 znaków")
    } else {
        console.log("imie: " + " ma mniej niż 5 znaków")
    }
})

//13. Łączenie tablic
const imiona3 = imiona.concat(imiona2)
console.log(imiona3)