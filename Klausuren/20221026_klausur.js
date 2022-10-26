console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz beschreibt das Recht des einzelnen Bürgers sich gegen Datenmissbrauch zu schützen.
// Datenschutz ist somit das Recht auf informationelle Selbstbestimmung. 
// Dies beinhaltet z.B. den Schutz von personenbezogenen Daten vor Missbrauch, unberechtigter Einsicht,
// Verwendung, Änderung oder Verfälschung. 
//
// 
// Datensicherheit beschreibt den angestrebten Zustand, welcher durch unterschiedliche Maßnahmen 
// erreicht werden soll, um jede Art der Sicherung und generellen Schutz von digitalen als auch
// analogen Daten vor Einsicht unberechtigter, zu gewährleisten. 
// Bei Datensicherheit handelt es sich um eine Voraussetzung für Datenschutz, auch wenn 
// dieser Zustand nicht vollkommen erreicht werden kann. 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// Symmetrische Verschlüsselung: 
// - es wird mit einem Schlüssel gearbeitet
// - Datei wird mit dem gleichen Schlüssel verschlüsselt, wie entschlüsselt. 
// - Vorteile: einfach, schnell, unkompliziert
//
// Asymmetrische Verschlüsselung: 
// - es wird mit zwei Schlüsseln gearbeitet
// - mit dem öffentlichen Schlüssel verschlüsselt man die Datei und mit 
// dem privaten Schlüssel entschlüsselt man die Datei. 
// - Vorteile: sicherer als die Symmetrische Verschlüsselung 
//
// private key: 
// Unterschied: gibt dem Besitzer eine höhere Sicherheit, da nur er diesen Schlüssel besitzt. 
// Besitzer hat wiederum aber auch mehr Verantwortung, da dieser private key nicht
// in andere Hände kommen darf, da so die Dateien angesehen werden können. 
//
// public key: 
// Unterschied: öffentlicher Schlüssel, auf den jeder zugreifen kann. 
// 
//
//
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// Hybride Verschlüsselung. 
// Zuerst wird eine Datei symmetrisch verschlüsselt, und danach 
// diese symmetrische Datei asymmetrisch verschlüsselt. 
// 
// Mögliche Programme: Boxcryptor, auch in Teams und Word verfügbar.
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Deklaration: 
// Es wird eine Klasse erstellt 
//
//
// Instanzierung: 
// Dieser Klasse werden reale Objekte hinzugefügt. 
// 
// 
//
// Initialisierung: 
// Den realen Objekten werden relevante Eigenschaftswerte zugewiesen durch 
// ein einfaches = Zeichen 
// Die konkrete Instanz werden EIgenschaftswerte zugewiesen 

//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnis {
constructor(){
    this.Name
    this.Geburtsjahr
    this.Klasse
    this.NoteMathe
    this.NoteDeutsch
    this.NoteEnglisch
    this.NoteNiederländisch 
    this.NotenDurchschnitt 
    this.Fehlstunden
    this.Versetzung 
    }
}



// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//

let zeugnisPitt = new Zeugnis ()

zeugnisPitt.Name = "Pitt Kiff"
zeugnisPitt.Geburtsjahr = "12.08.2005" 
zeugnisPitt.Klasse = "12a"
zeugnisPitt.Notendurchschnitt = 3,5
zeugnisPitt.Fehlstunden = 0 
zeugnisPitt.Versetzung = "JA"
zeugnisPitt.NoteDeutsch = 2 



// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

console.log ("Name: Pitt Kiff")
console.log ("Geburtsjahr: 12.08.2005")
console.log ("Klasse: 12a")
console.log ("Notendurchschnitt: 3,5")
console.log ("Fehlstunden: 0")
console.log ("Versetzung: JA")












// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 

let PitPunkteMathe = 15
let PitPunkteDeutsch = 10 
let PitPunkteEnglisch = 5 
let PitDurchschnitsszahl = (15+10+5) 

let GitPunkteMathe = 10 
let GitPunkteDeutsch = 8 
let GitPunkteEnglisch = 15 
let GitDurchschnittszahl = (10+8+15) 

// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 



if(PitDurchschnitsszahl>GitDurchschnittszahl){
        console.log ("Pit hat das bessere Zeugnis")
}else{
    console.log("Git hat das bessere Zeugnis")
}

if(PitDurchschnitsszahl == GitDurchschnittszahl){
        console.log ("Pit gleich Git")
}else{
    
}


if(PitDurchschnitsszahl > GitDurchschnittszahl*2){
        console.log ("Pit hat das viel bessere Zeugnis")
    }else{
        console.log
}
    

        
if (GitDurchschnitsszahl > PitDurchschnittszahl*2){
        console.log ("Git hat das viel bessere Zeugnis")
    }else{
    }

// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"
