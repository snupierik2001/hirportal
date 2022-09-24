const menu = document.querySelector('#mobile-menu'); // Hamburger menü konstanshoz rendelése
const menuLinks = document.querySelector('.navbar__menu'); // Linkek a menüben
const navLogo = document.querySelector('#navbar__logo'); // Navigációs logó

// Mobil nézet megjelenítése eljárás
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Eljárás meghívása (menü előhozás mobilnézetben)
menu.addEventListener('click', mobileMenu);

// Aktív menü mutatása görgetés közben
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const newsMenu = document.querySelector('#news-page');
    const categsMenu = document.querySelector('#category-page');
    let scrollPos = window.scrollY;

    // Highlight osztály hozzáadása a menü cikkekhez
    if(window.innerWidth > 960 && scrollPos < 600) //Mobilnál nem kell, ezért a feltétel
    {
        homeMenu.classList.add('highlight');
        newsMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scrollPos < 1400)
    {
        newsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        categsMenu.classList.remove('highlight');
        return;
    }else if (window.innerWidth > 960 && scrollPos < 2345)
    {
        categsMenu.classList.add('highlight');
        newsMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
};

// Kiemelés eljárás meghívása
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Mobil menü elrejtése menüre kattintás után
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu); // Eljárás meghívása
navLogo.addEventListener('click', hideMobileMenu); // Logóra kattintva is működjön

  // Gomb lekérdezése
  let mybutton = document.getElementById("myBtntop");

  // Amikor a felhasználó legörget 20px-t az oldal tetejéről, akkor megjelenik a gomb
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Amikor rákattint a felhasználó a gombra, visszamegy az oldal tetejére
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
