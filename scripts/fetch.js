let getData = async (url) =>{

    let res = await fetch(url);
    let data = await res.json();

    return data;

    

}

let append = (data, container)=>{

    data.articles.forEach((el)=>{
        let date = el.publishedAt.split("T");

        let div = document.createElement("div");
        div.setAttribute("id","d1");

        let div1 = document.createElement("div");
        div1.setAttribute("id","d2");

        let image = document.createElement("img");
        image.src = el.urlToImage;
        image.setAttribute("id","img1")

        let div2 = document.createElement("div");

        let newsHeading = document.createElement("h2");
        newsHeading.innerHTML = el.title;

        let  dateHeading = document.createElement("h4");
        dateHeading.innerHTML = date[0];

        // let content = document.createElement("p");
        // content.innerHTML = el.content

        let discription = document.createElement("p");
        discription.innerHTML=el.description;

        let link = document.createElement("a");
        link.href = el.url;
        link.innerHTML = "Read More";

        let source = document.createElement("h3");
        source.innerHTML = el.source.name;

        div2.appendChild(newsHeading);
        div2.appendChild(dateHeading);
        // div2.appendChild(content);
        div2.appendChild(discription);
        div2.appendChild(source);
        div2.appendChild(link);

        div1.appendChild(image);
        div1.appendChild(div2);

        div.appendChild(div1);

        container.appendChild(div);

    });

}

export { getData, append}