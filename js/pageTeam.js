import { team } from "./dataFake.js";


const teamItem = (arr) => {
    let item = ""
    for (let i = 0; i < arr.length; i++){
        item += `
        <div class="team__card--item reveal-bottom">
            <div class="team__card--img">
              <img src=${arr[i].image} alt=${arr[i].name}>
            </div>
            <div class="team__card--content">
              <div class="team__card--heading">
                <h6>${arr[i].name}</h6>
                <h4>${arr[i].profession}</h4>
              </div>
              <div class="team__card--social">
                <a href="#">${arr[i].social.insta !== "" ? `<img src="./assets/Insta.png" alt="">` : ""}</a>
                <a href="#">${arr[i].social.Fb !== "" ? `<img src="./assets/Fb.png" alt="">` : ""}</a>
                <a href="#">${arr[i].social.Twiter !== "" ? `<img src="./assets/Twiter.png" alt="">` : ""}</a>
                </div>
            </div>
        </div>
        `
    }
    return item
}

const teamPage = (arr,idt) => {
    document.getElementById(idt).innerHTML = `
        <div class="team__card">
            ${teamItem(arr)}
        </div>
    `

}

export default teamPage