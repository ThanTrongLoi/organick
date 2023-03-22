import { team } from "./dataFake.js";

const teamItem = () => {
    let item = ""
    for (let i = 0; i < team.length; i++){
        item += `
        <div class="team__card--item">
            <div class="team__card--img">
              <img src=${team[i].image} alt="">
            </div>
            <div class="team__card--content">
              <div class="team__card--heading">
                <h6>${team[i].name}</h6>
                <h4>${team[i].profession}</h4>
              </div>
              <div class="team__card--social">
                ${team[i].social.insta !== "" ? `<img src="./assets/Insta.png" alt="">` : ""}
                ${team[i].social.Fb !== "" ? `<img src="./assets/Fb.png" alt="">` : ""}
                ${team[i].social.Twiter !== "" ? `<img src="./assets/Twiter.png" alt="">` : ""}
                </div>
            </div>
        </div>
        `
    }
    return item
}

const teamPage = () => {
    document.getElementById("teamId").innerHTML = `
        <div class="team__card">
            ${teamItem()}
        </div>
    `

}

export default teamPage