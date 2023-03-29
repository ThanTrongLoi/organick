import product_item from "./card.js";


const card_item = (arr,id_product) => {
    document.getElementById(id_product).innerHTML = `
        <div class="card__list">
            ${product_item(arr)}
        </div>
`;

}

export default card_item