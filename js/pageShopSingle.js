import { card_list } from "./dataFake.js";
import { innerCardProduct } from "./inner.js";


function getItem() {
    let img = localStorage.getItem("img")
    let title = localStorage.getItem("title")
    let price = localStorage.getItem("price")
    let sale = localStorage.getItem("sale")
    let star = localStorage.getItem("star")

    const stars = (n) => {
        let star = "";
        for (let i = 0; i < n; i++) {
            star += `<span class="fa fa-star"></span>`
        }
        return star
    }

    document.getElementById('sg-detail').innerHTML = `
    <div class="single__detail">
                    <div class="single__detail--img">
                        <img src=${img} alt="">
                    </div>
                    <div class="single__detail--content">
                        <h3>${title}</h3>
                        <div class="star">
                            ${stars(star)}
                        </div>
                        <h6><span>${price}</span> ${sale}</h6>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                        <div class="single__btn">
                            <form action="">
                                <label for="quantity">Quantity :</label>
                                <input type="number" id="quantity" name="quantity" value=1>
                                <a id="add_cart" class="btn-default btn-1">Add To Cart <img
                                        src="./assets/Aerrow.png" /></a>
                            </form>
                        </div>
                    </div>
                </div>
    `
}


const shopSingle = () => {
    let card_related = card_list.slice(0, 4);
    innerCardProduct(card_related, "related__list")
    getItem()
    console.log(document.querySelectorAll('#add_cart'))
}
export default shopSingle