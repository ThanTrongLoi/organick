import { blog } from "./dataFake.js";

const blogItem = (arr) => {
    let cl = "btn-default btn-2"
    let item = ""
    for (let i = 0; i < arr.length; i++) {
        item += `
        <div class="blog__content-item">
            <div class="blog__content-img">
                <img src=${arr[i].image} alt="" />
            </div>
            <div class="blog__item-date">
              <h6>${arr[i].date.trim('-').slice(0, 2)}<br />${arr[i].date.trim('-').slice(-3)}</h6>
            </div>
            <div class="blog__item-content blog_page">
              <div class="blog__item-admin">
                <img src="../assets/admin.png" alt="" />
                <p style="color: #274c5b">By ${arr[i].admin}</p>
              </div>
              <div class="blog__item-text blog_page">
                <h6>${arr[i].title}</h6>
                <p>
                  ${arr[i].content}
                </p>
              </div>
              <a href="#" class="">Read More <img src="./assets/Aerrow.png"
              /></a>
            </div>
          </div>
        `
    }
    return item
}

const blogPage = (arr,idb) => {
    document.getElementById(idb).innerHTML = `
        <div class="blog__content">
            ${blogItem(arr)}
        </div>
    `
}

export default blogPage