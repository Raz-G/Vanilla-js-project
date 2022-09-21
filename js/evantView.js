import { doApi } from "./countryManger.js";


export const declaraEvant = () => { 
    let searchBtn = document.querySelector("#search-btn");
    let countryInp = document.querySelector("#country-inp");
let countryName = countryInp.value;


document.querySelectorAll(`.navA`).forEach(item =>{ 
item.addEventListener(`click`, () => { 
    doApi(item.id)
    
})
})
    searchBtn.addEventListener("click", () => { 
        doApi(countryName)
    })
}