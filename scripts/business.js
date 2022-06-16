import navbar from "../components/navbar.js"

document.getElementById("toparea").innerHTML = navbar();


import last from "../components/footer.js";

document.getElementById("low").innerHTML = last();


let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=841ebc4df4914ade8383d62fc0473be6";

let container = document.getElementById("box");

import { getData ,append } from "./fetch.js";

getData(url).then((res)=>{
    append(res, container);
})