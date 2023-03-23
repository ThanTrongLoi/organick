import { card_list, portfolio_list, team,blog } from "./js/dataFake.js";
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
console.log(window.location.href)
switch (window.location.href) {
  case (window.location.origin + `/${"organick/index.html"}` ||  window.location.origin + `/${"organick/#"}`) :
    homePage()
    blogPage(blog.slice(0,2),"h-blogId")
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
    blogPage(blog,"blogId")
    break;
  default:
    
    break
}


// ============================================ CARD ITEMS END ============================================
