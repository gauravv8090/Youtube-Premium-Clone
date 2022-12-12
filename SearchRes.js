



function displayData(){
    // window.location.href = "./searchRes.html";
    let data= JSON.parse(localStorage.getItem("data"));
    
    display.innerHTML= null;
    data.map(el => {
        let display= document.getElementById("display");
        let card1= document.createElement("div");
        let divimg = document.createElement("div");
        divimg.setAttribute("id", "img")
        var image= document.createElement("img");
        image.setAttribute("class", "immgg")
        image.src= el.snippet.thumbnails.high.url;
        divimg.append(image);
        var h3= document.createElement("h3");
        h3.innerText = el.snippet.title;
        h3.setAttribute("id", "h2tag");
        card1.addEventListener("click", function(){
            play(el.id.videoId);
        })
        card1.append(divimg, h3);
        display.append(card1);
    })
}

displayData();


function play(elem){

    localStorage.setItem("id", JSON.stringify(elem));
    window.location.href = "./page.html"
    // console.log(elem);
}
//  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=international&key=[YOUR_API_KEY] HTTP/1.1

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=football&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
