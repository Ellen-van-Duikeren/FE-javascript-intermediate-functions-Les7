//https://github.com/Ellen-van-Duikeren/Les7-frontend-javascript-intermediate-functions/pull/new/feature

// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

console.log("\nOpdracht 1a:")
//Stapjes:
// * Hoe kan ik iedere waarde van de array checken op deze conditie? > elke waarde in de array aanroepen in een for loop
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? > for loop array.length aantal malen doorlopen
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden? > counter maken die aantal malen telt dat cijfer >= 8 is

let counter = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        counter++;
    }
}
console.log(counter);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log("\nOpdracht 1b:")

function cumLaude(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 8) {
            counter++;
        }
    }
    return counter;
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

console.log("\nOpdracht 2a:")
//Stappen
// * Hoe wordt een gemiddelde berekend? > alle waardes in een for loop van de array bij elkaar optellen en dan delen door aantal waardes in de array
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? > som van elke waarde
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten? > gebruik array.length in for loop

let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
const average = sum / grades.length;
console.log(average);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log("\nOpdracht 2b:")

function averageGrade(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const average = sum / array.length;
    return average;
}

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log("\nOpdracht 2c:")
console.log((Math.round(averageGrade(grades) * 100) / 100));
console.log((Math.round(averageGrade([6, 4, 5]) * 100) / 100));
console.log((Math.round(averageGrade([8, 9, 4, 6, 10]) * 100) / 100));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

console.log("\nOpdracht 3a:")
//Stappen
// * Hoe kan ik iedere waarde van de array langsgaan? met een for loop
// * Op welke conditie moet ik checken? of het eerste cijfer hoger is dan het 2e en dan het 2e hoger is dan het 3e,....
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan? door een var te benoemen > dit werkte niet helemaal, want ik kreeg eerst 8 terug. Ik moest de oude waarde van highest ook nog vergelijken met de nieuwe waarde van highest.

let highest = 0;
for (let i = 0; i < grades.length - 1; i++) {
    if ((grades[i] > grades[i + 1]) && (highest < grades[i])) {
        highest = grades[i];
    } else if ((grades[i + 1] > grades[i]) && (highest < grades[i + 1])) {
        highest = grades[i + 1];
    }
}
console.log(highest);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

console.log("\nOpdracht 3b:")

function highestGrade(array) {
    let highest = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if ((array[i] > array[i + 1]) && (highest < array[i])) {
            highest = array[i];
        } else if ((array[i + 1] > array[i]) && (highest < array[i + 1])) {
            highest = array[i + 1];
        }
    }
    return highest;
}

console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));