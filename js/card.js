
const card_product = (arr) => {

  const stars = (n) => {
    let star = "";
    for (let i = 0; i < n; i++) {
      star += `<span class="fa fa-star"></span>`
    }
    return star
  }

  let items = []



  for (let i = 0; i < arr.length; i++) {
    
    items += `
    <div class="card__item reveal-bottom">
          <span class="card__item-category">${arr[i].category}</span>
          <div class="card__item-image">
            <img src=${arr[i].image} alt="" />
          </div>
          <span class="card__item-title">${arr[i].title}</span>
          <div class="card__item-price">
            <span class="card__price-left">
              <span>${arr[i].price}</span> ${arr[i].sale}
            </span>
          <div class="card__price-right">
            ${stars(arr[i].star)}
          </div>
        </div>
        <div class="card__hover">
          <a id="detail" class="btn-default btn-1">View Detail</a>
          <a id="add_cart" class="btn-default btn-2 addCart" onclick="">Add To Cart</a>
        </div>
    </div>`;

  }
  return items
}

// href=${'./shopsingle.html'}
export default card_product