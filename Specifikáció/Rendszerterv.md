# Rendszerterv
## 1. Bevezetés, az oldal célja <br>

**Mi a célunk az online hírportállal?** <br>

Mi a Blink News újságnál mindig a legfrissebb híreket akarjuk eljuttatni első kézből az olvasinkhoz, és ezt a legmodernebb technikákkal szeretnénk megvalósítani.

**- A Blink News újság és hírportál cikkjeinek nyilvántartása** <br>
A cikk újságban, folyóiratban megjelent vagy abba szánt rövidebb írásmű, közlemény.
Általában az egésztől könnyen elválasztható egészként definiáljuk.
Az alábbi paraméterei lehetnek:
- Általános adatok: cím, cikkíró, tartalom, kategória
- Felelősök: Azon munkatársak, akik adminisztrátori jogosultságú fiókkal rendelkeznek, engedélyezett számukra <br>
a cikkek publikálása, módosítása, törlése.
- Előterjesztők: A főszerkesztő a cikkek publikálása előtt ellenőrzi a cikk helyességét, valóságát, esetleges javításokat végezhet rajta.
- Állapotok: A cikkek megírásának és publikálásának számos lépései vannak, ezek a következők:
   - Riporter kiküldése a helyszínre (cikk anyaggyűjtés)
   - Cikk megírásának menete (nem végleges verzió)
   - Főszerkesztő elvégzi a cikk ellenőrzését
   - Ellenőrzés után a szükséges átírások megtétele (főszerkesztő által)
   - Cikk publikálása (nyomdai úton, valamint online portálra)
<br>

(Ezek a funkciók a kis projektben nem kerülnek elkészítésre.) <br>

**Felhasználói adatok tárolása** <br>
Az online hírportált bárki szabadon látogathatja, a cikkeket megtekintheti, azonban egyes az oldal egyes funkcióit csak a regisztrált <br>
felhasználóink érhetik el. A regisztrált felhasználók email és jelszó párossal tudnak bejelentkezni.
Az alábbi jogosultsági szinteket különböztetjük meg:
   - Adminisztrátor
   - Felhasználó
   - Vendég
<br>

A felhasználókról nyilvántartott adatok:
- Általános adatok: email cím*, felhasználónév*, jelszó*, telefonszám (a csillaggal jelöltek megadása kötelező)
Munkatársainkról nyilvántartott adatok:
- Általános adatok: email cím*, név*, jelszó*, telefonszám*
<br>

## 2. A Blink News hírportál fizikai kiépítése <br>
Hírportálunknak az Internet topológiára épülő szokásos kliens-szerver felépítésű struktúrával kell rendelkeznie.
![rendszerterv](fizikaikiepites.png "Fizikai kiépítés") <br>
Megjegyzés: Az ábra nem a tényleges projekt megvalósítást reprezentálja, csupán demonstráló értékű. <br>
<br>

(Ezek a funkciók a kis projektben nem kerülnek elkészítésre.) <br>

## 3. Adattárolás <br>
A hírportálunk által tárolt személyes információkat JSON fájlban akarjuk tárolni. Ebbe beleértve a felhasználói adatokat, valamint az adminisztrátoraink által <br>ű
feltöltött cikkeket is (az ő adataik mellett). Az oldalnak képesnek kell lennie eltárolni a megadott adatokat regisztrálás után, valamint beolvasni és értelmezni ezen adatokat bejelentkezéskor, <br>
valamint a cikkek megjelenítésekor.
<br>

## 4. Oldal megjelenítése <br>
Az oldal megjelenítésére HTML nyelvet kell használni, CSS fájlformátumbeli megformázással. Az oldalnak reszponzív dizájnnal kell rendelkeznie, minden eszközön megfelelő méretezéssel kell megjelenjen.
Az alábbi ábra a főoldal, valamint egy cikk aloldal megjelenését mutatja sablonosan. <br>
(ÁBRA 2) <br>
A színeknek harmónikusaknak kell lenniük, hogy ne zavarja a felhasználók látását, ugyanakkor szaturált színek használata előnyös a figyelemfelkeltés végett.
<br>

## 5. A rendszer használatának szabályai
A jelszavas bejelentkezést követően a különböző felhasználói csoportoknak más-más lehetőségeik lesznek a rendszerben.
- Adminisztrátor:
	- Minden általa publikált cikket teljes jogkörrel módosíthat
	- Saját cikkjeit törölheti
	- Karbantarthatja a felhasználók hozzászólásait
	- Feltölthet új cikket az oldalra
	- Hozzáfér a rendszerfelületi modulhoz
<br>
- Felhasználó:
	- Megtekintheti a cikkeket
	- Értékelést adhat egy cikkre
	- Hozzászólásos véleményt írhat egy cikk alá
<br>	
- Vendég:
	- Megtekintheti a cikkeket
<br>

## 6. Projekt elkészítésének menete

Az oldal HTML alapú, CSS formázással készül, valamint JavaScript-tel kerül megvalósításra az adatok mozgatása.
Mindenki a saját eszközéről fogja fejleszteni / tesztelni az oldalt, folyamatos kommunikáció, megbeszélés mellett.

Az oldal fejlesztése három nagy részre csoportosul, az alábbi táblázat leírja, hogy melyik csapattag melyik ágon tevékenykedik erősebben, ugyanakkor előfordulhat
, hogy egymást segítjük saját munkánkon kívül.

Feladatok szétosztása:
| Név              | Feladat                                                                    |
| ---------------- | ---------------------------------------------------------------------------|
| Kovács Erik      | HTML                                                                       |
| Török Szabina Márta     | CSS                                                                 |
| Szanyi Manó Hunor     | JavaScript |

### A fejlesztés lépései

    [M-01] - Feladatok kiosztása, használandó szoftverek kiválasztása, fájlok létrehozása

    [M-02] - A weboldal megfelelő funkcionalitásának biztosítása (kitűzött funkciók implementálása) (Működő JavaScript)

    [M-03] - Az oldal csinosítása (CSS és HTML formázás)

    [M-04] - Tesztelések végbevitele

    [M-05] - Értékelésre kész állapot



### A fejlesztés tervének ütemezése

    1. Az első lépés megtétele, azaz a feladatok kiosztása, használandó szoftverek kiválasztása, fájlok létrehozása (megbeszélés Discord felületen)

    2. A második lépés megtétele, azaz a weboldal megfelelő funkcionalitásának biztosítása (kitűzött funkciók implementálása, működő JavaScript a tárolásra)

    3. A harmadik lépés megtétele, azaz az oldal esztétikai rendbetétele (HTML, CSS)

    4. Az oldal értékelésre és használatra készen való kiadása

<br>

### 7. Az üzleti folyamatok 

#### 7.1 A fő cél

- A weboldal megfelelő megjelenitése külömböző eszközökön
- Lokálisan megnyitható, szerverre emelhető

#### 7.2 Bemenet

- A felhasználó egérbemenetei

#### 7.3 Kimenet

- A kivánt weboldal rész megjelenítése a felhasználónak
- Az oldal nyomtatása

### 8. Követelmények 

#### [K-01] Rezponzív dizájn

	Az oldal rezponzívitásáért a CSS file lesz a felelős

#### [K-02] Gyors megjelenítés

	Az oldalnak a megjelenítése rövid időbe kell teljen, nem több mint 1 másodperc

#### [K-03] Hordozhatóság

	Amennyiben az oldalt szerverre kivánjuk helyezni, ez problémamentesen lehessen megvalósítani
	
#### [K-04] Rendszerfüggetlenség megvalósítása

	Az oldalnak problémamentesen, megfelelő megjelenítéssel kell megjelenjen külömböző eszközökön
	
### 9. Funkcionális tervezés

#### 9.1 A rendszer főbb tulajdonságai

- Rezponzív oldal, tableten, mobilon, számítógépen, egyéb eszközökön is helyesen jelenik meg az oldal
- Hordozható a kliens bármelyik eszközön képes módosítani statikusan az oldal megjelenését

#### 9.2 Rendszerösszetevők

- Online Weboldal
- Szervergép 

#### 9.3 Oldal használata

Az oldalt használó kliensek az oldalon található navigációs füllel könnyen ugorhatnak az oldal egyik pontjáról a másikra. Képesek megnyitni az oldalon megtalálható cikkeket amik elnavigálják őket egy külön oldalra ahol megjelenítésre kerül az adott cikk.

### 10. Megválasztott környezetek

- Felhasználó által biztosított eszköz:  
 	- Webszerver
 	
- Fejlesztői szoftverek:
	-Visual Studio Code

- Tesztelési felületek:
	- Opera
	- Google Chrome
	- Microsoft Edge
	- Mozilla
	
### 11. Fogalomtár
- A HTML: (angolul: HyperText Markup Language, „hiperszöveges jelölőnyelv”) egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C (World Wide Web Consortium) támogatásával. Az aktuális változata az 5, mely az SGML általános jelölőnyelv egy konkrét alkalmazása (azaz minden 5-ös HTML dokumentum egyben az SGML dokumentumszabványnak is meg kell hogy feleljen). Ezt tervek szerint lassan kiszorította volna az XHTML, amely a szintén SGML alapú XML leíró nyelven alapu
- A CSS: (Cascading Style Sheets, magyarul: „lépcsőzetes stíluslapok”) a számítástechnikában egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le. Ezenkívül használható bármilyen XML alapú dokumentum stílusának leírására is, mint például az SVG, XUL stb.
- A JavaScript: programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
- A Visual Studio Code: (rövidítve: VSCode vagy VS Code) egy ingyenes, nyílt forráskódú kódszerkesztő, melyet a Microsoft fejleszt Windows, Linux és OS X operációs rendszerekhez. Támogatja a hibakeresőket, valamint beépített Git támogatással rendelkezik, továbbá képes az intelligens kódkiegészítésre (intelligent code completion) az IntelliSense segítségével. Ezen felül testre szabható, így a felhasználók megváltoztathatják a kinézetet (témát), megváltoztathatják a szerkesztő gyorsbillentyű-kiosztását, az alapértelmezett beállításokat és még sok egyebet.
