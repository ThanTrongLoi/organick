import { card_list, portfolio_list } from "./js/dataFake.js";
import portfolio_item from "./js/pagePortfolio.js";
import shopPage from "./js/pageShop.js";
import homePage from "./js/pageHome.js";
import shopSingle from "./js/pageShopSingle.js";
import servicePage from "./js/pageService.js";
import portfolioPage from "./js/pagePortfolio.js";
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
  case window.location.origin + `/${"index.html"}`:
    homePage()
    break;
  case window.location.origin + `/${"shop.html"}`:
    shopPage();
    break;
  case window.location.origin + `/${"shopsingle.html"}`:
    shopSingle();
    break;
  case window.location.origin + `/${"service.html"}`:
    servicePage();
    break;
  case window.location.origin + `/${"portfolio.html"}`:
    portfolioPage();
    // console.log("page")
    break;
  default:
    break
}


// ============================================ CARD ITEMS END ============================================
