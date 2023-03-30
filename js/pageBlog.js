import { blog } from "./dataFake.js";


const blogItem = (arr) => {
  let cl = "btn-default btn-2"
  let item = ""
  for (let i = 0; i < arr.length; i++) {
    item += `
        <div class="blog__content-item ${i % 2 == 0 ? "reveal-left" : "reveal-right"}">
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
              <a id="read-more">Read More <img src="./assets/Aerrow.png"
              /></a>
            </div>
          </div>
        `
  }
  return item
}

const blogPage = (arr, idb) => {

  document.getElementById(idb).innerHTML = `
        <div class="blog__content">
            ${blogItem(arr)}
        </div>
    `

  for(let i = 0; i < arr.length; i++){
    document.querySelectorAll("#read-more")[i].addEventListener('click',()=>{

      let img = arr[i].image
      let date = arr[i].date
      let admin = arr[i].admin
      let title=  arr[i].title

      localStorage.setItem("img",img)
      localStorage.setItem("date",date)
      localStorage.setItem("admin",admin)
      localStorage.setItem("title",title)

      location.href = "blog_single.html"

    })
  }
}

export default blogPage