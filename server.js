// Das IBAN Modul wird benötigt, um eine gültige IBAN zu errechnen. 

var IBAN = require('iban');

// Das installierte MYSQL-Modul wird mit require() eingebunden. 
// Das MySQL-Modul stellt die Verbindung zwischen der App und der
// MySQL-Datenbank her.
// Eine Datenbank wird benötigt, wenn Daten auch nach der Laufzeit des 
// Programms noch weiter existieren sollen. 
// Außerdem ermöglicht die Datenbank, dass z.B. Geldüberweisungen 
// zwischen Anwendern möglich werden.

var mysql = require('mysql');

// Die Verbindung zur Datenbank wird hergestellt. Dazu werden die 
// Adresse und die Anmeldedaten der Datenbank angegeben. 

var dbVerbindung = mysql.createConnection({
  host: "10.40.38.110",
  user: "placematman",
  password: "BKB123456!",
  database: "dbn27"
});

dbVerbindung.connect(function(err) {
  
  // Wenn die Verbindung scheitert, wird ein Fehler geworfen.

  
  if (err) throw err;

  // Wenn die Verbindung aufgebaut werden kann, wir der Erfolg
  // auf der Console geloggt. 

  console.log("Connected!");
});

// Die Verbindung zur Datenbank wird geöffnet. 

dbVerbindung.connect(function(fehler){

  // Die Tabelle namens kunde wird erstellt. 
  // Die Spalten heißen: idKunde, vorname, nachname, ort, kennwort, mail
  // VARCHAR(45)    : legt den Datentyp der Spalte auf "Text" mit der Länge max. 45 Zeichen fest. 
  // INT(11)        : begrenzt die Eingabe auf 11 Ziffern. Es sind nur ganzzahlen möglich. 
  // Float / Double : sind Gleitkommazahlen
  // Smallint       : Zahlen von 0 - 65535
  // Date / Datetime: steht für ein Datum bzw. Uhrzeit 
  // idKunde ist Primary Key. Das bedeutet, dass die idKunde den Datensatz eindeutig
  // kennzeichnet. Das wiederum bedeutet, dass kein zweiter Kunde mit derselben idKunde angelegt werden kann. 

  dbVerbindung.query('CREATE TABLE kunde(idKunde INT(11), vorname VARCHAR(45), nachname VARCHAR(45), ort VARCHAR(45), kennwort VARCHAR(45), mail VARCHAR(45), PRIMARY KEY(idKunde));', function (fehler) {
  
    // Falls ein Problem bei der Query aufkommt, ...
  
    if (fehler) {

        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet,

      if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt.

    console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
    }else{
    console.log("Fehler: " + fehler )
    }
   }else{
    console.log("Tabelle Kunde erfolgreich angelegt.")
    }
   })
   })


   dbVerbindung.query('CREATE TABLE kredit(idKunde INT(11), zinssatz FLOAT, laufzeit INT(11), betrag SMALLINT, PRIMARY KEY(idKunde, datum));', function (fehler) {
  
    // Falls ein Problem bei der Query aufkommt, ...
  
    if (fehler) {

        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet,

      if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt.

    console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
    }else{
    console.log("Fehler: " + fehler )
    }
   }else{
    console.log("Tabelle kredit erfolgreich angelegt.")
    }
   })



    // Tabelle namens konto wird erstellt 
    // Kontoart, Kontostand, PIN, IBAN (als Primary key), Zeitstempel der Anlage

   dbVerbindung.query('CREATE TABLE konto(iban VARCHAR(45), idkunde INT(11), anfangssaldo FLOAT, kontoart VAR(45), timestamp TIMESTAMP; Primary Key(iban));', function (fehler) {
  
    // Falls ein Problem bei der Query aufkommt, ...
  
    if (fehler) {

        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet,

      if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt.

    console.log("Tabelle konto existiert bereits und wird nicht angelegt.")
    }else{
    console.log("Fehler: " + fehler )
    }
   }else{
    console.log("Tabelle Konto erfolgreich angelegt.")
    }
   })
   


   // Ein Kunde soll neu in der Datenbank angelegt werden. 

   dbVerbindung.query('INSERT INTO kunde(idKunde, vorname, nachname, ort, kennwort, mail) VALUES (154291, "Pit", "Kiff", "BOR", "123!", "pk@web.de") ;', function (fehler) {
  
    // Falls ein Problem bei der Query aufkommt, ...
  
    if (fehler) {

        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet,

      if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt.

    console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
    }else{
    console.log("Fehler: " + fehler )
    }
   }else{
    console.log("Tabelle kredit erfolgreich angelegt.")
    }
   })


class Kredit{
  constructor(){
      this.idkunde
      this.Name
      this.Laufzeit
      this.Zinssatz
      this.Betrag
  }
}

let kredit = new Kredit()


kredit.idkunde = 12345678
kredit.Zinssatz = "3%"
kredit.Laufzeit = "12 Monate"
kredit.Name = "Bausparkredit" 
kredit.MonatlicheZinsen = 200
kredit.Summe = 600.000

// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte

class Kundenberater{
  constructor(){
      this.IdKundenberater
      this.Nachname
      this.Vorname
      this.Position
      this.Profil 
      this.Mail
      this.Rufnummer
      this.Bergruessung 
  }
}

class Fussballer{
  constructor(){
      this.Position
      this.Verein
      this.Name
      this.Lieblingsverein
  }
}

let fussballer = new Fussballer()

fussballer.Name = "Petersen"
fussballer.Position = "Rechtsmittelfeld" 
fussballer.Lieblingsverein = "Fc Bayern"
fussballer.Verein = "Bayern Munich"


// Es wird ein Kundenberater-Objekt instaziiert

let kundenberater = new Kundenberater()

kundenberater.IdKundenberater = 55555
kundenberater.Nachname = "Eris"
kundenberater.Vorname = "Andreas"
kundenberater.Profil = "https://www.instagram.com/lxkas_25/"
kundenberater.Mail = "montana@n27.com"
kundenberater.Rufnummer = "+49564/123456"
kundenberater.Bergruessung = "Hallo, ich bin's, Dein Kundenberater!"
kundenberater.Position = "BachelorofLOVE"


class Konto{
  constructor(){
    this.Kontostand
    this.IBAN 
    this.Kontoart
    this.PIN 
    this.ZeitstempelDerAnlage
  }
}

// Instanzzierung eines Objekts namens konto vom Typ Konto 

let konto = new Konto()

konto.Kontostand = 1000000                                 
konto.IBAN = "DE1234567890123456"
konto.Kontoart = "Tagesgeldkonto"
konto.PIN = 987123

class Kunde{
  constructor(){
      this.IdKunde
      this.Nachname
      this.Vorname
      this.Kennwort
      this.Kontostand
      this.Geburtsdatum
      this.Mail
      this.Rufnummer
  }
}

// Von der Kunden-Klasse wird eine konkrte Instanz
// gebildet. 

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen.

kunde.IdKunde = 154291
kunde.Nachname = "Ronaldo"
kunde.Vorname = "Thomas"
kunde.Geburtsdatum = "23.10.2000"
kunde.Mail = "Ronaldo@web.de"
kunde.Kennwort = "123"
kunde.Rufnummer = "+49123/456789"

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
  console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meineApp.get('/' ...) wird abgearbeitet, wenn
// der Kunde die Indexseite (localhost:3000 bzw. 
// n27.herokuapp.com ansurft.


meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
  
  // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
  // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser 
  // zurückgegeben. Anderenfalls wird die Login-Seite an den Browser gegeben. 

  if(browserAnfrage.signedCookies['istAngemeldetAls']){

      // Wenn der Kunde bereits angemeldet ist, soll die
      // Index-Seite an den Browser gegeben werden.

      serverAntwort.render('index.ejs',{})
  }else{

      // Wenn der Kunde noch nicht eigeloggt ist, soll
      // die Loginseite an den Browser zurückgegeben werden.
      serverAntwort.render('login.ejs', {
          Meldung : ""
      })
  }                 
})


meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              

  // Wenn der Anmelde-Cookie gesetzt ist, wird der Nutzer zur
  // About-Seite gelenkt.

  if(browserAnfrage.signedCookies['istAngemeldetAls']){
      
      // Die About-Seite wird an den Browser gegeben:

      serverAntwort.render('about.ejs',{})
  }else{

      // Wenn der Kunde noch nicht eigeloggt ist, soll
      // die Loginseite an den Browser zurückgegeben werden.
      serverAntwort.render('login.ejs', {
          Meldung: ""
      })
  }         
})



//Die Methode meineApp.post('/login'...)wird abgearbeitet, sobald 
// der Anwender im Login-Formular auf "Einloggen" klickt. 

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
  
  // Die im Browser eingegeben IdKunde und Kennwort werden zugewiesen 
  // an die Konstanten names idKunde und kennwort. 
  
  const idKunde = browserAnfrage.body.IdKunde
  const kennwort = browserAnfrage.body.Kennwort
  
  console.log("ID des Kunden: " + idKunde)
  console.log("Kennwort des Kunden: " + kennwort)

  // Die Identität des Kunden wird überprüft.
  
  if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
    
    // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt
    // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt. 
    // Der Cookie wird signiert, also gegen Manipulationen geschützt. 

      serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
      console.log("Der Cookie wurde erfolgreich gesetzt.")

      // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
      // UND ("&&") das Kennwort ebenfalls übereinstimmt,
      // dann gibt der Server die gerenderte Index-Seite zurück.
      
      serverAntwort.render('index.ejs', {})
  }else{

      // Wenn entweder die eingegebene Id oder das Kennwort oder beides
      // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
      // gerenderte Login-Seite an den Browser zurückgegeben.

      serverAntwort.render('login.ejs', {
          Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
      })
  }
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

  // ... dann wird die login.ejs vom Server gerendert an den
  // Browser zurückgegeben:

  serverAntwort.clearCookie('istAngemeldetAls')

    // Der Cookie wird gelöscht.
    
  serverAntwort.render('login.ejs', {
      Meldung : "Bitte geben Sie die Zugangsdaten ein."
  })          
})

// Wenn die about-Seite angesurft wird, wird die about-Seite 
// zum Browser zurückgegeben. 

 

meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => {              
  
  if(browserAnfrage.signedCookies['istAngemeldetAls']){

    // Wenn der Kunde bereits angemeldet ist, soll die
    // Index-Seite an den Browser gegeben werden.

    serverAntwort.render('profil.ejs', {
      Vorname: kunde.Vorname,
      Nachname: kunde.Nachname,
      Mail: kunde.Mail,
      Rufnummer: kunde.Rufnummer,
      Kennwort: kunde.Kennwort,
      Erfolgsmeldung: ""
    })       
  }else{

    // Wenn der Kunde noch nicht eigeloggt ist, soll
    // die Loginseite an den Browser zurückgegeben werden.
    serverAntwort.render('login.ejs', {
        Meldung : ""
    })
  }       
})

// require('./Uebungen/ifUndElse.js')
// require('./Uebungen/klasseUndObjekt.js')

// Sobald der Speichern-Button auf der Profile-Seite gedrückt wird,
// wird die meineApp.post('profile'...)abgearbeitet. 

meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {              
  
  // die Erfolgsmeldung für das Speichern der geänderten 
  // Profildaten wird in eine lokale Variable namens
  // erfolgsmeldung gespeichert. 

  let Erfolgsmeldung = ""

  // Der Wert der Eigenschaft von Mail im Browser wird 
  // zugewiesen (=) an die Eigenschaft Mail des Objekts kunde 
  
  if(kunde.Mail != browserAnfrage.body.Mail){

      // Wenn der Wert der Eigenschaft von kunde.Mail abweicht 
      // vom Wert der Eigenschaft Mail aus dem Browser-Formular 
      // dann wird die Erfolgsmeldung initialisiert: 

      Erfolgsmeldung = Erfolgsmeldung + "Änderung der Mail erfolgreich."
      kunde.Mail = browserAnfrage.body.Mail
      console.log(Erfolgsmeldung)
  }

  if(kunde.Kennwort != browserAnfrage.body.Kennwort){

    // Wenn der Wert der Eigenschaft von kunde.Kennwort abweicht 
    // vom Wert der Eigenschaft Kennwort aus dem Browser-Formular 
    // dann wird die Erfolgsmeldung initialisiert: 

    Erfolgsmeldung = Erfolgsmeldung + "Änderung des Kennworts erfolgreich."
    kunde.Kennwort = browserAnfrage.body.Kennwort
    console.log(Erfolgsmeldung)
} 

if(kunde.Rufnummer != browserAnfrage.body.Rufnummer){

  // Wenn der Wert der Eigenschaft von kunde.Rufnummer abweicht 
  // vom Wert der Eigenschaft Rufnummer aus dem Browser-Formular 
  // dann wird die Erfolgsmeldung initialisiert: 

  Erfolgsmeldung = Erfolgsmeldung + "Änderung der Rufnummer erfolgreich."
  kunde.Rufnummer = browserAnfrage.body.Rufnummer
  console.log(Erfolgsmeldung)
}

  //von rechts nach links lesen: wird zugewiesen zu Mail des Objekts Kunden 
  kunde.Kennwort = browserAnfrage.body.Kennwort // der Wert von K. wird zugewiesen an die Eigenschaft K. vom Kunden 
  kunde.Rufnummer = browserAnfrage.body.Rufnummer

  console.log("Profil gespeichert")
  
      serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail,
        Rufnummer: kunde.Rufnummer,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: Erfolgsmeldung
      })
})



meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {              
  
  if(browserAnfrage.signedCookies['istAngemeldetAls']){

    serverAntwort.render('support.ejs', {
      Vorname: kundenberater.Vorname,
      Nachname: kundenberater.Nachname,
      Mail: kundenberater.Mail,
      Rufnummer: kundenberater.Rufnummer,
      Profil: kundenberater.Profil,
      Position: kundenberater.Position,
      Bergruessung: kundenberater.Bergruessung
    })   

  }else{

    // Wenn der Kunde noch nicht eigeloggt ist, soll
    // die Loginseite an den Browser zurückgegeben werden.  
    serverAntwort.render('login.ejs', {
        Meldung : ""
    })
}   
})

meineApp.get('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {              

  // Wenn der Anmelde-Cookie gesetzt ist, wird der Nutzer zur
  // About-Seite gelenkt. 

  if(browserAnfrage.signedCookies['istAngemeldetAls']){

    // Die About-Seite wird an den Browser gegeben: 

    serverAntwort.render('kontostandAnzeigen.ejs', {
      Erfolgsmeldung : ""
  })          
      
  }else{

    // Wenn der Kunde noch nicht eigeloggt ist, soll
    // die Loginseite an den Browser zurückgegeben werden.
    serverAntwort.render('login.ejs', {
        Meldung : ""
    })
  }        
})

meineApp.get('/kreditBerechnen',(browserAnfrage, serverAntwort, next) => {              
  
  // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
  // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser 
  // zurückgegeben. Anderenfalls wird die Login-Seite an den Browser gegeben. 

  if(browserAnfrage.signedCookies['istAngemeldetAls']){

  

      serverAntwort.render('kreditBerechnen.ejs',{
        Meldung : "",
          Betrag: "",
          Laufzeit: "",
          Zinssatz: "",
          Erfolgsmeldung:""
      })
  }else{

      // Wenn der Kunde noch nicht eigeloggt ist, soll
      // die Loginseite an den Browser zurückgegeben werden.
      serverAntwort.render('index.ejs', {
          
      })
  }                 
})



// Die Funktion meineApp.get('/kontoAnlegen'...wird abgearbeitet), sobald die Seite
// kontoanlegen im Browser aufgerufen wird. .

meineApp.get('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {              
  
  // Es wird geprüft, ob der User angemeldet ist, also ob der Cookie gesetzt ist. 

  if(browserAnfrage.signedCookies['istAngemeldetAls']){

    // Wenn der User bereits angemeldet ist, wird die kontoAnlegen-Seite gerendert...

    serverAntwort.render('kontoAnlegen.ejs', {
    Konstand:  konto.Kontostand = 1000000,                                 
    IBAN: konto.IBAN = "DE1234567890123456",
    Kontoart: konto.Kontoart = "Tagesgeldkonto",
    PIN: konto.PIN = 987123
    })       
  }else{

    // Wenn der Kunde noch nicht eigeloggt ist, soll
    // er zur Login-Seite zurückgeworfen worden. 

    serverAntwort.render('login.ejs', {   // du bist nicht angemeldet 
        Meldung : ""
    })
  }       
})


// Die Funktion meineApp.post('/kontoAnlegen'... wird abgearbeitet, sobald 
// der Button auf der kontoAnlegen-Seite gedrückt wird und das Formular abgesendet wird. 

meineApp.post('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {              
  
  // Die im Formular eingegebene Kontoart wird an die Konstante namens kontoArt zugewiesen. 
  
  const kontoArt = browserAnfrage.body.kontoArt  // der Wert den select in Kontoanlegen hat wird der // Konstante Kontoart zugewiesen 
  
  console.log("Gewählte Kontoart: " + kontoArt)

  // Die IBAN wird automatisch erzeugt. Die IBAN kennzeichnet das anzulegende Konto einmalig (Primary Key).

  // Ein String mit dem Wert "DE" wird zugewiesen an eine Variable namens ländererkennung 

let laendererkennung = "DE" 

// Die Zahl namens 27000000 wird zugewiesen an eine Variable namens Bankleitzahl

let bankleitzahl = 27000000 

// Die Zahl 1111111111 wird zugewiesen an eine variable namens min. 

let min = 1111111111;

// Die Zahl 99999999 wird an eine variable namens max zugewiesen. 

let max = 9999999999; 

// Eine Zufallszahl zwischen min und max wird von der Math-Bibliothek mit der Methode random()
// erzeugt und an die Variable zufaeliigeKontonummer zugewiesen. 

let zufaelligeKontonummer = Math.floor(Math.random() * (max - min + 1)) + min; 

console.log("Die zufällig generierte Kontonummer lautet " + zufaelligeKontonummer)

// Die IBAN wird mit einer Node-Bibliothek namens Iban errechnet. Die Parameter der Funktion zur Berechnung der
// Iban sind: Ländererkennung, bankleitzahl und Kontonummer. 

let iban = IBAN.fromBBAN(laendererkennung,bankleitzahl+ "" + zufaelligeKontonummer)

console.log("IBAN: " + iban)

// wenn die IBAN korrekt ist, dann wird in der Console ausgegeben: "Iban gültig."

if(IBAN.isValid(iban)){
    console.log("Die IBAN ist gültig.")
}else{
    console.log("Die IBAN ist ungültig")
}

// Für die generierte IBAN muss ein neuer Datensatz in der Tabelle Konto angelegt werden. 

dbVerbindung.query('INSERT INTO konto(iban, idKunde, anfangssaldo, kontoart, timestamp) VALUES ("' + iban + '", 154291, 1 , "' + kontoArt + NOW()) ;', function (fehler) {


      if(fehler) {

      // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet,

        if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

      // ... dann wird eine Fehlermeldung geloggt.

              console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
        
          }else{
              console.log("Fehler: " + fehler )
          }
      }else{
            console.log("Neues Konto in der Tabelle angelegt.")
      }
  })
})
  
  serverAntwort.render('kontoAnlegen.ejs', {
      Erfolgsmeldung: "Das " + kontoArt + " mit der Iban " + "iban + wurde erfolgreich angelegt"
  })   
})

  // Die Identität des Kunden wird überprüft.
  








// require('./Uebungen/ifUndElse.js')
// require('./Uebungen/klasseUndObjekt.js')
// require('./Klausuren/20221026_klausur.js')
// require('./Klausuren/20230111_klausur.js')
// require('./Klausuren/Klausur_vorbereitung.js')
