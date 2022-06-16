


 import navbar from "../components/navbar.js"

document.getElementById("toparea").innerHTML = navbar();

import last from "../components/footer.js";

document.getElementById("low").innerHTML = last();


// let getData = async() =>{
//     try{
//       let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=841ebc4df4914ade8383d62fc0473be6`)
//       let data = await res.json();
//       append(data.articles)
//       console.log(data.articles);
//     }catch(err){
//       console.log(err)
//     }
  
//    }  
//    getData();


   
//     let append = (data) =>{
//         let container = document.getElementById("box");
//         data.forEach((el)=>{
//             let date = el.publishedAt.split("T");

//             let div = document.createElement("div");
//             div.setAttribute("id","d1");

//             let div1 = document.createElement("div");
//             div1.setAttribute("id","d2");

//             let image = document.createElement("img");
//             image.src = el.urlToImage;
//             image.setAttribute("id","img1")

//             let div2 = document.createElement("div");

//             let newsHeading = document.createElement("h2");
//             newsHeading.innerHTML = el.title;

//             let  dateHeading = document.createElement("h4");
//             dateHeading.innerHTML = date[0];

//             let content = document.createElement("p");
//             content.innerHTML = el.content

//             let discription = document.createElement("p");
//             discription.innerHTML=el.description;

//             let link = document.createElement("a");
//             link.href = el.url;
//             link.innerHTML = "Read More";

//             let source = document.createElement("h3");
//             source.innerHTML = el.source.name;

//             div2.appendChild(newsHeading);
//             div2.appendChild(dateHeading);
//             div2.appendChild(content);
//             div2.appendChild(discription);
//             div2.appendChild(source);
//             div2.appendChild(link);

//             div1.appendChild(image);
//             div1.appendChild(div2);

//             div.appendChild(div1);

//             container.appendChild(div);

//         });
      
//     }


let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=841ebc4df4914ade8383d62fc0473be6";

let container = document.getElementById("box");

import { getData ,append } from "./fetch.js";

getData(url).then((res)=>{
    append(res, container);
})














    //https://newsapi.org/v2/top-headlines?country=in&apiKey=841ebc4df4914ade8383d62fc0473be6


   // https://newsapi.org/v2/top-headlines?sources=bbc-news&country=in&category=business&apiKey=841ebc4df4914ade8383d62fc0473be6