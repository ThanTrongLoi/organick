import card_product from "./card.js";


const innerCardProduct = (arr, idpr) => {
    document.getElementById(idpr).innerHTML = `
    <div class="card__list">
        ${card_product(arr)}
    </div>
`
    for (let i = 0; i < arr.length; i++) {
        // pass data to details
        document.querySelectorAll('#detail')[i].addEventListener('click', () => {

            let img = arr[i].image
            let title = arr[i].title
            let price = arr[i].price
            let sale = arr[i].sale
            let star = arr[i].star

            //save to localStorage
            // localStorage.setItem(KEY,VALUE)

            localStorage.setItem("img", img)
            localStorage.setItem("title", title)
            localStorage.setItem("price", price)
            localStorage.setItem("sale", sale)
            localStorage.setItem("star", star)

            location.href = "shopsingle.html"
        })

    }
}
export { innerCardProduct }
