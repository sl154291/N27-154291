*** Abfrage 1
-------------

Gib alle Kunden aus der Tabelle kunde:

Select * From kunde;

Das Sternchen steht für alle Eigenschaften (Spalten) aller Kundendatensätze (Zeilen) 

** Abfrage 2 
-------------

Suche alle Vornamen und Nachnamen aller Kunden: 

Select vorname, nachname From kunde; 

** Abfrage 3 
------------

Suche alle Vornamen und Nachnamen aller Kunden, die in Borken wohnen; 

Select vorname, nachname From kunde Where ort = "Borken"; 