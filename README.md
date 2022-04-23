# webtech-abgabe

Grid-Seitenlayout: ✅
Header mit kleiner Grafik: ✅ 
Menü zur Navigation: ✅ 
Footer mit HS-Links: ✅ 
Inhaltsverzeichnis plus interne Navigation: ✅
Bild neben (in?) mehrspaltigem Text: ✅
Linkgestaltung: ✅ 
Animation von Elementen: ✅ (diverse Links, Elemente im Header)
Responsive: ✅
Print-Stylesheet: ✅ 
Bildergalerie mit zyklischem Wechsel: ✅
Keine externen Bibliotheken: ✅ 
Korrekte Einrückungen: ✅ 
Ordnerstruktur: ✅ 
Semantische Elemente: ✅


# Responsive Elemente:
Zwei Ebenen (Tablet und Mobile)

Generell:
Fluid responsive Schriftgröße (rem) mit clamp()-Funktion
Diverse andere Elemente sind an rem gebunden, sodass sich diese automatisch
mitverändern und ohne extra Code responsive sind.


Tablet:
Nav-Bar wird schmaler
Inhaltsverzeichnis ändert Position
Bilder verändern Position
H1 wird zentriert

Smartphone:
Alles von Tablet
Header-Font wird kleiner
Nav-Bar klappt sich ein und wird zur reduzierten seitlichen Navigation
Article wird zentriert
Mehrspaltig wird zu einspaltig aufgrund Platzmangel


# NOTIZ:
beim Testen der responsiven Breakpoints und spezieller Device-Presets in den DevTools von sowohl Chrome als auch Firefox, 
gab es immer wieder Probleme, dass nicht die korrekte Breite an die Seite weitergegeben wird.

Nach meiner Recherche sind dies Browser-Bugs, die Responsiveness funktioniert dann wieder, wenn man den Browser neu öffnet.

Auch beim Testen auf echter Hardware (Galaxy A51, Ipad etc.) funktioniert die Responsiveness problemlos.