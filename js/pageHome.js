import { card_list } from "./dataFake.js";
// import card_product from "./card.js";
import { innerCardProduct } from "./inner.js";

const homePage = () => {
    let card_prod = card_list.slice(0, 8);
    let card_offer = card_list.slice(12, 16);

    innerCardProduct(card_prod,"products_list")
    innerCardProduct(card_offer,"offer_list")
    

}

export default homePage