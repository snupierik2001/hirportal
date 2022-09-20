# Funkcionális követelmény
> ## 1.0 Az oldal funkciói
> 
> ### 1.1 Felhasználók számára elérhető funkciók
> 
> 1.1.1 Regisztráció:
> A felhasználók megjegyzés írás, valamint a cikk értékelés lehetőségének előfeltétele az előzetes regisztráció. <br>
> Bizonyos egyéb funkciók, mint például a hírfolyamra feliratkozás is csak regisztrációval lehetséges. <br>
> Erre egy külön oldalon megjelenő űrlapon van lehetőség.
> 
> Az űrlap tervezett mezői: <br>
> - Vezetéknév*
> - Keresztnév*
> - Email cím*
> - Telefon (opcionális)
> - Felhasználónév*
> - Jelszó*
> - Jelszó mégegyszer*
> 
> (A csillaggal megjelölt mezők kitöltése kötelező) <br>
> Emellett a felhasználónak lehetősége van feliratkozni hírfolyamunkra, hogy emailen keresztül értesülhessen a legfrissebb híreinkről. <br>
> A megadott adatok egy adatbázisban kerülnek tárolásra.
> 
> 1.1.2 Bejelentkezés:
> A regisztráció során megadott felhasználó névvel és jelszóval lehetőség nyílik a bejelentkezésre a felhasználói funkciók eléréséhez.
> Erre egy külön bejelentkező oldalon van lehetőség, amely két szövegmezőt tartalmaz: <br>
> 
> Felhasználónév <br>
> Jelszó <br>
> Jelszó mégegyszer* <br>
> (A csillaggal megjelölt mezők kitöltése kötelező)
> Emellett a felhasználónak lehetősége van feliratkozni hírfolyamunkra, hogy emailen keresztül értesülhessen a legfrissebb híreinkről.
> A megadott adatok egy adatbázisban kerülnek tárolásra. <br>
> 1.1.2 Bejelentkezés:
> A regisztráció során megadott felhasználó névvel és jelszóval lehetőség nyílik a bejelentkezésre a felhasználói funkciók eléréséhez. Erre egy külön bejelentkező > > > oldalon van lehetőség, amely két szövegmezőt tartalmaz: <br>
> Felhasználónév
> Jelszó
> ### 1.2	A bejelentkezés után elérhető funkciók: <br>
> Hozzászólás: <br>
> Bejelentkezés után a felhasználóknak lehetősége nyílik a cikkekhez hozzászólásokat írni egy külön e célt szolgáló szövegdoboz segítségével a cikk alatt. <br>
> Értékelés: <br>
> A felhasználó 1-től 5 csillaggal értékelheti a cikk minőségét / hasznosságát.
> 
> ## 1.3 Adminisztrátor számára elérhető funkciók
> 
> ### 1.3.1 Bejelentkezés:
> 
> Az adminisztrátorok / cikk írók ugyanazon a bejelentkező képernyőn jelentkeznek be, mint a felhasználók.
> 
> ### 1.3.2 Cikkek menedzselése az oldalon:
> 
> Cikk hozzáadása: <br>
> 
> Egy ezt a célt szolgáló űrlapon az író beírhatja cikkének tartalmát, majd publikálhatja a „cikk publikálása” gomb segítségével. <br>
> 
> Cikk törlése: <br>
> 
> Egy korábban publikált cikk törlése az adatbázisból, ami egy gombnyomással történik a cikk felső részénél a szerkesztés gomb mellett. <br>
> 
> Cikk módosítása: <br>
> 
> A „szerkesztés” gombra kattintva ismét szerkeszthetővé válik a már publikált cikk. A „módosítás” gomb lenyomásával az író felülírja a régi cikket.
> 
> ## 2.0 Koncepciós ábra
> ![funk.spec](koncepcio.png 'Koncepciós ábra')
> 
