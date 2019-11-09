

# Github Notes

Az alkalmazás, aminek legyen a képzeletbeli neve "Github Notes", egy egyszerű jegyzettömb, ami a Github Gist API-ját használja. A Github Gist egy code snippet megosztó oldal, hasonló mint pl. a Pastebin. Egy-egy "gist" több fájlból is állhat, mint például ez: https://gist.github.com/hfalucas/60cb40c62e2e13e6c797f4887e43c8f6

A jegyzettömbnek egy gistet kell használnia, és ezen belül kell tudni fájlokat létrehozni, módosítani vagy törölni. (Átnevezni nem kell tudnia a fájlokat, elég csak létrehozni és törölni.) Ehhez létre kell hozni a Github profilodban egy personal access tokent:
https://github.com/settings/tokens

Az alkalmazásnak be kell kérnie ezt a tokent - ha még nem lett megadva - ezt a tokent minden requestben el kell küldeni az Authorization headerben. Részletesebben a Github API dokumentációjában találsz erről infót.

A gistekből azt kell használnia amelyiknek a description-je pontosan ez: "Created by Github Notes". Ha esetleg több ilyen van, akkor elég csak az egyiket megtalálni. Ha nem létezik ilyen gist, akkor létre kéne hozni egyet, benne egy welcome.txt nevű fájllal. Minden fájlnak legyen egy egyedi végoldala. Például:
https://localhost:8080/files/welcome.txt
szerkesztés:
https://localhost:8080/files/welcome.txt/edit

Az API dokumentációja itt található:
https://developer.github.com/v3/gists/

A kész alkalmazást töltsd fel egy github repóba.
Csatoltunk sitebuildet, hogy ne a nulláról kelljen elkezdened. A sitebuild Parcel.js-sel készült.

Az értékelésnél az alábbi szempontokat fogjuk figyelembe venni:
- törekedj a szemantikus kommitok használatára: egy-egy részfeladat külön kommitba kerüljön, vissza lehessen követni a git logból, hogy melyik lépésben melyik fájl(ok)on mit csináltál
- használj routingot
- használj state managementet (Vuex)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
