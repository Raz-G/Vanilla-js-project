import CountryItem from "./countryItem.js";

let sColor = "#9AE19D"
let yellow = "#f1c40f"
let orange = "#d35400"
let blue = "#3498db"
let purple = "#8e44ad"
let red = "#c0392b"

let As = document.querySelectorAll(".navA");
let searchBtn = document.querySelector("#search-btn");


let result = document.querySelector("#result");
let countryInp = document.querySelector("#country-inp");
let colorArr = [yellow,orange,blue,purple,red];
let sWrapper = document.querySelector("#country-inp");
let s = document.querySelector(".start");

let y= window.matchMedia("(max-width: 750px)")
let x = window.matchMedia("(max-width: 804px)")
let z = window.matchMedia("(max-height: 804px)")





 const chngBg = () => { 
   for(let i = 0 ; i < colorArr.length;i++){
      let changingColor = _.sample(colorArr)
      document.body.style.background = changingColor;
      searchBtn.style.background = changingColor;
      result.style.color = changingColor;
      console.log(sWrapper);
      

     As.forEach(item => {
      let item_id = item.id ;
      document.getElementById(item_id).style.color = changingColor;
      
     })
   }
   
}


const createCountries = (data) => { 
   console.log();
   
   result.innerHTML = "";
   data.forEach(item => {
      console.log(item);
      let country = new CountryItem(item,displayBorder,doApi);
      country.render();
   });

   let colorCng = setInterval(chngBg,500);
      sizeUp(colorCng)
   } 
   
   
   export const doApi = async(name) => { 
      let countryName = countryInp.value;
      try{
         let url = `https://restcountries.com/v3.1/name/${name||countryName}?fullText=true`;
         let resp = await fetch(url)
         let data = await resp.json()
         createCountries(data)
      }
      catch {
         if (countryName.length == 0) {
            sizeDown()
            result.innerHTML += `<h4 class="col-6">The input field cannot be empty</h4>`;
            
         } else {
            sizeDown()
            result.innerHTML = `<h4 class="col-6" >Please enter a valid country name.</h4>`;
         }
      }
   }
   
   
   
   const sizeUp = (colorCng) => { 
      result.className = "d-none";
      
      s.style.transition =  "2s ease-in-out";
   s.style.width = "80vw"
   if(x.matches||z.matches||y.matches){
      s.style.top = "75%"
      s.style.height = "110vh"
   }
   else{
      s.style.height = "95vh"
      s.style.top = "60%" 
      
   }
    
   
   setTimeout(seeResult,2000,colorCng);
   
}



const sizeDown = () => { 
   document.body.style.background = sColor;
      document.body.style.background = sColor;
      searchBtn.style.background = sColor;
      result.style.color = sColor;

     As.forEach(item => {
      let item_id = item.id ;
      document.getElementById(item_id).style.color = sColor;
      
     })
   result.className = "d-none";
   s.style.transition =  "2s ease-in-out";
   if(x.matches||y.matches){
      s.style.width = "80vw"
      s.style.height = "22vh"
   }
   else{
      s.style.width = "35vw"
      s.style.height = "17vh"
   }
   s.style.top = "50%" 
   setTimeout(seeResult,2000);
}



const seeResult = (colorCng) => { 
   clearInterval(colorCng)
   result.className = "";
}



const displayBorder = async (code) =>{
   let url = `https://restcountries.com/v3.1/alpha/${code.toLowerCase()}`;
   let resp = await fetch(url);
   let data = await resp.json();
   let {name} = data[0];
   
   return name.common;
}

