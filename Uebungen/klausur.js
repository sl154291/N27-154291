// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
let prozentpunkteSPD = 47
let prozentpunkteCDU = 53
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:



if(prozentpunkteSPD > prozentpunkteCDU){
    console.log("Die CDU hat die Landtagswahl gewonnen")
}else{
    console.log("Die SPD hat die Landtagswahl gewonnen")
}

console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 



let einnahmenUnternehmen = 1.000000
let AusgabenUnternehmen = 900.000

if(einnahmenUnternehmen > AusgabenUnternehmen){
    console.log("Das Unternehmen hat Gewinn gemacht")
}else{
    console.log("Das Unternehmen hat keinen Gewinn gemacht")
}

console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:

class Handy{
    constructor(){
        this.Name
        this.Preis
        this.AlterdesHandys
        this.Speicherplatz
    
    }
  }
  


// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:

let handyApple = new Handy()
let handySamsung = new Handy()




// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

handyApple.Name = "Apple"
handyApple.AlterdesHandys = 3
handyApple.Speicherplatz = "16 GB"
handyApple.Preis= 900

handySamsung.Name = "Samsung"
handySamsung.AlterdesHandys = 2 
handySamsung.Speicherplatz = "64 GB"
handySamsung.Preis = 1200




// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:

if (handyApple.Preis < handySamsung.Preis) {
    console.log("Das Apple Handy ist besser im Hinblick auf die Eigenschaft Preis ")
}else{
    console.log("Das Samsung Handy ist besser im Hinblick auf die Eigenschaft Preis oder gleich gut")
}




console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.

console.log("Aufgabe 5")
// In Ihrer Banking-App Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks


