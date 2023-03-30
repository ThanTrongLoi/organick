
const blogSG = () => {
    const dataAdmin = document.querySelector("[blsg-admin]")
    const dataTitle = document.querySelector("[blsg-title]")


    let img = localStorage.getItem("img")
    let date = localStorage.getItem("date")
    let admin = localStorage.getItem("admin")
    let title = localStorage.getItem("title")

    document.getElementById("bl-single__img").innerHTML = `<img src=${img}>`
    dataAdmin.textContent = "By " + admin
    dataTitle.textContent = title
}

export default blogSG