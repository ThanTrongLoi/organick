const card_product = (arr) => {
  const stars = (n) => {
    let star = "";
    for (let i = 0; i < n; i++){
      star += `<span class="fa fa-star"></span>`
    }
    return star
}

  let items = ""
  for(let i = 0; i < arr.length; i++){
    items += `
    <a href=${'./shopsingle.html'} class="card__item">
          <span class="card__item-category">${arr[i].category}</span>
          <div class="card__item-image">
            <img src=${arr[i].image} alt="" />
          </div>
              <span class="card__item-title">${arr[i].title}</span>
              <div class="card__item-price">
                  <span class="card__price-left">
                    <span>${arr[i].price}</span> ${arr[i].sales}
                  </span>
                  <div class="card__price-right">
                      ${stars(arr[i].star)}
                  </div>
              </div>
    </a>`;
  }
  return items
}

export default card_product