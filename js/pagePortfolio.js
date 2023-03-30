import { portfolio_list } from "./dataFake.js";



const portfolio_item = () => {
  let item = "";
  for (let i = 0; i < portfolio_list.length; i++) {
    item += `
      <div href="#" class="portfolio__item reveal-bottom">
        <div class="portfolio__item--img">
          <img src=${portfolio_list[i].image} alt="">
        </div>
        <div class="portfolio__item--text">
          <h6>${portfolio_list[i].title}</h6>
          <h4>${portfolio_list[i].category}</h4>
        </div>
        <a id="pdetail" class="portfolio__item--icon">
          <img src=${`../assets/aerow_icon.svg`} alt="">
        </a>
      </div>`
  }
  return item;
}

const portfolioPage = () => {
  document.getElementById("por_item").innerHTML = `
  <div class="portfolio_list">
    ${portfolio_item()}
  </div>`;

  for(let i = 0; i < portfolio_list.length; i++ ){
    document.querySelectorAll('#pdetail')[i].addEventListener('click',()=>{
      let img = portfolio_list[i].image
      let title = portfolio_list[i].title

      localStorage.setItem("img",img)
      localStorage.setItem("title",title)

      location.href = "portfolio_single.html"
    })
  }
}
export default portfolioPage