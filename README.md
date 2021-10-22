# Proj-NordicRose

_Source on GitHub:_ https://github.com/Ninni-cfm/Proj-NordicRose

_Demo on Heroku:_ https://proj-nordic-rose.herokuapp.com/

---

## Backend: Express.js CodeFlow Übung lev3_3: express.js-template-Engine-EJS-Nordic_Rose

### Aufgabenstellung

**Lev1:**
Erstellt euch mit all euren bisher erlangten Kenntnissen diese Website im Backend mit Hilfe von express/ejs.
Schaut euch das Mockup gut an und erkennt wiederholende Elemente. Für diese könnt ihr eure "partials" erstellen und diese nachher beliebig oft einsetzen.

**Lev2:**
Benutze "express route parameters" (req.params) um die Daten des ausgewählten Artikels abzugreifen und auf einer einzelnen article Seite näher darzustellen.
Benutze die POST-method um die Daten des Kontaktformulars im backend zuzugreifen.

**Lev3:**
Generiere mit push() neue articles

**Assets:**

Figma-Link:
https://www.figma.com/file/y2Dc3dgHANHTNwcwErACvw/A-blog-template-Community?node-id=0%3A1

---

## How to import blog data into the database:

-   Verbinde dich zu deinem Sandbox Cluster und nutze den Befehl _load(‘importBlogData.js’)_ um die Datei in deine Datenbank zu laden
-   überprüfe mit show dbs dass die Datenbank geladen wurde!

```
> mongosh "mongodb+srv://\<username>:\<password>@\<cluster>.mongodb.net/admin"
> load('importBlogData.js')
> show dbs
> use NordicRose
```

---

## ToDo List

-   more error handling
-   Reponsive design
-   user sessions:
    -   register
    -   login
    -   logout

---

## History

2021-10-22: first release
