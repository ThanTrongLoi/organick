import { card_list, portfolio_list, team, blog } from "./js/dataFake.js";
import portfolio_item from "./js/pagePortfolio.js";
import shopPage from "./js/pageShop.js";
import homePage from "./js/pageHome.js";
import shopSingle from "./js/pageShopSingle.js";
import servicePage from "./js/pageService.js";
import portfolioPage from "./js/pagePortfolio.js";
import teamPage from "./js/pageTeam.js";
import blogPage from "./js/pageBlog.js";
// import shopPage from "./js/shop_page.js"

// window.onscroll = function(){offSetTop()}

// let header = document.querySelector('.header')
// let sticky = header.offsetTop;

// function offSetTop(){
//   if(window.pageYOffset > sticky){
//     header.classList.add('sticky')
//   }else {
//     header.classList.remove('sticky')
//   }
// }

let navBar = document.querySelector('.navbar')
document.querySelector('#header-menu').onclick = () => {
  navBar.classList.toggle('active');
  console.log('nav bar ne')
}


// ============================================ CARD ITEMS START ============================================
switch (window.location.href) {
  case window.location.origin + `/${"organick/index.html"}`:
    homePage()
    blogPage(blog.slice(0, 2), "h-blogId")
    break;
  case window.location.origin + `/${"organick/"}`:
    homePage()
    blogPage(blog.slice(0, 2), "h-blogId")
    break;
  case window.location.origin + `/${"organick/about.html"}`:
    teamPage(team.slice(0, 3), "ab-teamId")
    break;
  case window.location.origin + `/${"organick/shop.html"}`:
    shopPage();
    break;
  case window.location.origin + `/${"organick/shopsingle.html"}`:
    shopSingle();
    break;
  case window.location.origin + `/${"organick/service.html"}`:
    servicePage();
    break;
  case window.location.origin + `/${"organick/portfolio.html"}`:
    portfolioPage();
    break;
  case window.location.origin + `/${"organick/team.html"}`:
    teamPage(team, "teamId");
    break;
  case window.location.origin + `/${"organick/blog.html"}`:
    blogPage(blog, "blogId")
    break;
  default:
    
    break
}
// switch (window.location.href) {
//   case window.location.origin + `/${"index.html"}`:
//     homePage()
//     blogPage(blog.slice(0, 2), "h-blogId")
//     break;
//   case window.location.origin + `/${""}`:
//     homePage()
//     blogPage(blog.slice(0, 2), "h-blogId")
//     break;
//   case window.location.origin + `/${"about.html"}`:
//     teamPage(team.slice(0, 3), "ab-teamId")
//     break;
//   case window.location.origin + `/${"shop.html"}`:
//     shopPage();
//     break;
//   case window.location.origin + `/${"shopsingle.html"}`:
//     shopSingle();
//     break;
//   case window.location.origin + `/${"service.html"}`:
//     servicePage();
//     break;
//   case window.location.origin + `/${"portfolio.html"}`:
//     portfolioPage();
//     break;
//   case window.location.origin + `/${"team.html"}`:
//     teamPage(team, "teamId");
//     break;
//   case window.location.origin + `/${"blog.html"}`:
//     blogPage(blog, "blogId")
//     break;
//   default:

//     break
// }

// ============================================ CARD ITEMS END ============================================




// ============================================ SCROLL REVEAL START ============================================

// function revealActive (el){
//   el.classList.add('reveal-active')
// } 

ScrollReveal({
  distance:'100px',
  duration: 1500,
  delay:500, 
  mobile: false
});

ScrollReveal().reveal('.home__banner, .reveal-top', { origin: 'top' });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });
ScrollReveal().reveal('.reveal-right', { origin: 'right',});
ScrollReveal().reveal('.reveal-left', { origin: 'left' });
ScrollReveal().reveal('.reveal-flip', { rotate: {x: 20, y: 20, z: 40} });
// ScrollReveal().reveal('reveal-top, .reveal-bottom, .reveal-right,.reveal-left', { afterReveal: revealActive});
// ============================================ SCROLL REVEAL END ============================================
