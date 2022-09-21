
export default class CountryItem{
    constructor( _item, displayBorder,doApi){
        let languages = Object.values(_item.languages);
        let corrency = Object.values(_item.currencies);
   

this.flag = _item.flags.png || _item.flags.svg
this.name = _item.name.common ;
this.population = _item.population ;
this.region = _item.region ;
this.languages= languages;
this.currency = `${Object.keys(_item.currencies)}, ${corrency[0].name} ${corrency[0].symbol}`;
this.capital = _item.capital ;
this.latlng = _item.latlng ;
this.borders = _item.borders ;
this.displayBorder = displayBorder ;
this.doApi = doApi ;

};



render(){
    
    let myDiv = document.createElement("div");
    myDiv.className = "d-flex flex-wrap align-content-center justify-content-center text-center";
    myDiv.id = "myDiv"
    document.querySelector("#result").append(myDiv);

    myDiv.innerHTML = `  
    <div class="info d-flex flex-wrap align-items-center mx-auto justify-content-between justify-content-sm-center">
    <div class="txt_info col-md-6 col-sm-12 flex-sm-column text-center">
    <h1 class="mx-auto display-3 col-12" >${this.name}</h1>
    <img src="${this.flag}" class="flagImg  col-sm-12 p-2 img-fluid">

        <p>Capital:  <span>${this.capital}</span> </p>
        
        
        <p>Population: <span>${this.population}</span></p>
        <p>Region: <span>${this.region}</span></p>
        
        <p>Currency:  <span>${this.currency}</span></p>
        
        <p> Languages:  <span>${(this.languages)}</span></p>

        <p class="borders"> </p>
    </div>
    <iframe id="map" frameborder="0" scrolling="no" class="col-6" src="https://maps.google.com/maps?q=${this.latlng[0]},${this.latlng[1]}&hl=en&z=5&amp;output=embed"></iframe> 
</div>
</div>
                `

                let borders = myDiv.querySelector(".borders");
                let borders_ar =  this.borders;
                if (borders_ar!= "No Borders") {
                    borders_ar.forEach(async (item, i) => {
                      if(i >= 0){
                        borders.innerHTML = "Borders:"
                      }
                      const borderName = await this.displayBorder(item)
        
                      let border = document.createElement("span");
                      border.className = "sBorder col-auto p-1"
                      border.style = "cursor: pointer;";
                      border.style.textDecoration = "underline ";
                      border.innerHTML = `${borderName} `;
                      borders.append(border);
                      border.addEventListener("click", () => {
                       document.querySelector("#country-inp").value ="";
                        this.doApi(borderName);
                      })
                    })
                  }
    }
}

