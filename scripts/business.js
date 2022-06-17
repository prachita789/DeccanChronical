import navbar from "../components/navbar.js"

document.getElementById("toparea").innerHTML = navbar();


import last from "../components/footer.js";

document.getElementById("low").innerHTML = last();


let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01420e1a7bfd4618af006747c28399be";

let container = document.getElementById("box");

import { getData ,append } from "./fetch.js";

getData(url).then((res)=>{
    append(res, container);
})