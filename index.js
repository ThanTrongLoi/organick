import { card_list, team, blog } from "./js/dataFake.js";
import shopPage from "./js/pageShop.js";
import homePage from "./js/pageHome.js";
import shopSingle from "./js/pageShopSingle.js";
import servicePage from "./js/pageService.js";
import portfolioPage from "./js/pagePortfolio.js";
import teamPage from "./js/pageTeam.js";
import blogPage from "./js/pageBlog.js";
import portSingle from "./js/pagePortfolioSG.js";
import blogSG from "./js/pageBlogSG.js";

let navBar = document.querySelector('.navbar')
document.querySelector('#header-menu').onclick = () => {
  navBar.classList.toggle('active');
}




// ================================== search products with title || category ============================================
const searchInput = document.getElementById("search-box")
const suggBox = document.getElementById("autocom-box")
const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  searchInput.value = ''
  if (!searchForm.classList.contains('active')) {
    suggBox.classList.remove("active")
  }
}
searchInput.addEventListener("input", e => {
  let values = e.target.value.toLowerCase();
  if (values) {
    const filteredCharacters = card_list.filter((data) => {
      return (
        data.title.toLowerCase().includes(values.toLowerCase()) ||
        data.category.toLowerCase().includes(values.toLowerCase())
      )
    })
    if (filteredCharacters.length < 1) {
      suggBox.classList.remove("active")
    } else {
      suggBox.classList.add("active")
    }
    displayCharacters(filteredCharacters)
  } else {
    suggBox.classList.remove("active")
  }
})


const displayCharacters = characters => {
  const htmlString = characters.map(character => {
    return `
    <a href="#" class="auto-card">
        <div class="auto-img">
          <img src=${character.image} alt="">
        </div>
        <div class="auto-content">
          <h5>${character.title}</h5>
          <h6>${character.category}</h6>
          <span class="auto-price">
            <span>${character.price}</span> ${character.sale}
          </span>
        </div>
      </a>
    `
  }).join('');
  suggBox.innerHTML = htmlString
}
// ================================== search products with title || category END ============================================

// ================================== ADD TO CART START ============================================

const addCart = () => {
  console.log('click ne')
  document.querySelectorAll("#add_cart").onclick = () => {
  }
}

// ================================== ADD TO CART END ============================================


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
//   case window.location.origin + `/${"portfolio_single.html"}`:
//     portSingle();
//     break;
//   case window.location.origin + `/${"team.html"}`:
//     teamPage(team, "teamId");
//     break;
//   case window.location.origin + `/${"blog.html"}`:
//     blogPage(blog, "blogId")
//     break;
//   case window.location.origin + `/${"blog_single.html"}`:
//     blogSG();
//     break;
//   default:

//     break
// }

// ============================================ CARD ITEMS END ============================================




// ============================================ SCROLL REVEAL START ============================================

ScrollReveal({
  distance: '100px',
  duration: 1500,
  delay: 200,
  mobile: false
});

ScrollReveal().reveal('.home__banner, .reveal-top', { origin: 'top' });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });
ScrollReveal().reveal('.reveal-right', { origin: 'right', });
ScrollReveal().reveal('.reveal-left', { origin: 'left' });
ScrollReveal().reveal('.reveal-flip', { rotate: { x: 20, y: 20, z: 40 } });
