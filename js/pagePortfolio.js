import { portfolio_list } from "./dataFake.js";



const portfolio_item = (portfolio_list) => {
  let item = "";
  for (let i = 0; i < portfolio_list.length; i++) {
    item += `
      <div href="#" class="portfolio__item">
        <div class="portfolio__item--img">
          <img src=${portfolio_list[i].image} alt="">
        </div>
        <div class="portfolio__item--text">
          <h6>${portfolio_list[i].title}</h6>
          <h4>${portfolio_list[i].category}</h4>
        </div>
        <a href=${'./portfolio_single.html'} class="portfolio__item--icon">
          <img src=${`../assets/aerow_icon.svg`} alt="">
        </a>
      </div>`
  }
  console.log(item)
  return item;
}

const portfolioPage = () => {
  console.log('page ne')
  document.getElementById("por_item").innerHTML = `
  <div class="portfolio_list">
    ${portfolio_item(portfolio_list)}
  </div>`;
}
export default portfolioPage