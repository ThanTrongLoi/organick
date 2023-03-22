import { card_list } from "./dataFake.js";
import { innerCardProduct } from "./inner.js";



const shopPage = () => {
    innerCardProduct(card_list, "shop_products")
}
export default shopPage