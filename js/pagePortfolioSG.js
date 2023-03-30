const dataImg = document.getElementById("data-img")
const dataTitle = document.querySelector("[data-title]")

function getItem(){
    let img = localStorage.getItem("img")
    let title = localStorage.getItem("title")

    // console.log(img)
    dataTitle.textContent = title
    dataImg.innerHTML = `<img src=${img}>`
}

const portSingle = () => {
    getItem()
}

export default portSingle