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

// Es wird ein Kundenberater-Objekt instaziiert

let kundenberater = new Kundenberater()

kundenberater.IdKundenberater = 55555
kundenberater.Nachname = "Eris"
kundenberater.Vorname = "Marcel"
kundenberater.Profil = "https://www.instagram.com/lxkas_25/"
kundenberater.Mail = "montana@n27.com"
kundenberater.Rufnummer = "+49564/123456"
kundenberater.Bergruessung = "Hallo, ich bin's, Dein Kundenberater!"
kundenberater.Position = "Chefberater"

class Konto{
  constructor(){
    this.Kontostand
    this.IBAN 
    this.Kontoart
    this.PIN 
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

//Die Methode meineApp.post('/login'...)wird abgearbeitet, sobald 
// der Anwender im Login-Formular auf "EInloggen" klickt. 


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


require('./Uebungen/ifUndElse.js')
require('./Uebungen/klasseUndObjekt.js')