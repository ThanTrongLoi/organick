import card_product from "./card.js";

const innerCardProduct = (arr,idpr) => {
    document.getElementById(idpr).innerHTML= `
    <div class="card__list">
        ${card_product(arr)}
    </div>
`
}
export {innerCardProduct}
