import { card_list } from "./dataFake.js";
import { innerCardProduct } from "./inner.js";




const shopSingle = () => {
    let card_related = card_list.slice(0, 4);
    innerCardProduct(card_related,"related__list")
}
export default shopSingle