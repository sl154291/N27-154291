// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben EIgenschaften. 
// In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat,...
// Alle Kunden unserer Bank haben dieselben EIgenschaften, aber 
// unterschiedliche Eigenschaftswerte 

class Kunde {
    constructor(){
      this.IdKunde
      this.Nachname 
      this.Vorname 
      this.Kennwort 
      this.Kontostand 
      this.Geburtsdatum 
      this.Mail
    }
}

//Von der Kunden-Klasse wird eine komkrete Instanz 
// gebildet 

let kunde = new Kunde ()

// Die konkrete Instanz bekommt Eigenschaftswerte 
// zugewiesen 

kunde.IdKunde = 154291
kunde.Nachname = "Ronaldo"
kunde.Vorname = "Christiano"
kunde.Geburtsdatum = "1.1.2000"
kunde.Mail = "Ronaldo@web.de"
kunde.Kennwort = "123"



const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () =>
 {console.log('Server lauscht auf Port %s', server.address().port)
 })
 
meineApp.get('/',(browserAnfrage, serverAntwort, next) => {
   serverAntwort.render('index.ejs', {})
})
 
 // Wenn die login-Seite im Browser aufgerufen wird,...
 
 meineApp.get('/login',(browserAnfrage, serverAntwort, next) =>
  { 
      
    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:    
    serverAntwort.render('login.ejs', {})
}) 



meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {
  
  const idKunde = browserAnfrage.body.IdKunde
  const kennwort = browserAnfrage.body.Kennwort 
  
  console.log("ID des Kunden: " + idKunde)
  console.log("Kennwort des Kunden: " + kennwort)
  
if(idKunde == kunde.IdKunde){
  serverAntwort.render('index.ejs', {})
  }else{
    serverAntwort.render('login.ejs', {})
  }
})


// require('./Übungen/ifUndELse.js')
require('./Übungen/klasseUndObjekt.js')