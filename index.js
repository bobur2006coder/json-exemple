"use strict";

let row = document.querySelector(".row")
row.style.display = "flex"
row.style.alignItems = "center";
row.style.justifyContent = "space-between";
row.style.flexWrap = "wrap"
row.style.gap = "100px"


let ftch = fetch("http://localhost:3000/one")
    .then(res => res.json())
    .then(function (data) {

        row.innerHTML = `
    <div>
    <img width=300;  height="300"; src="${data[0].img}" alt="png">
    <h2>${data[0].name + " " + data[0].lastName}<h2>
    
    </div>
    <div>
    
    <img width=300; height="300"; src="${data[1].img}" alt="png">
    <h2>${data[1].name + " " + data[1].lastName}<h2>
    </div>

    <div>
    
    <img width=300; height="300"; src="${data[2].img}" alt="png">
    <h2>${data[2].name + " " + data[2].lastName}<h2>
    </div> 

      <div>
    
    <img width=300; height="300"; src="${data[3].img}" alt="png">
    <h2>${data[3].name + " " + data[3].lastName}<h2>
    </div>

    <div>
    
    <img width=300; height="300"; src="${data[4].img}" alt="png">
    <h2>${ data[4].name +" "+data[4].lastName}<h2>
    </div>

    <div>
    
    <img width=300; height="300"; src="${data[5].img}" alt="png">
    <h2>${ data[5].name +" "+data[5].lastName}<h2>
    </div>
    `
    })






