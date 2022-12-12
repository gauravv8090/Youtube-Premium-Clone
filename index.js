async function getdata(){
    let val= document.getElementById("searchINP").value;
    const APIkey = "AIzaSyCLFrq5nzKA0-ws8ykdvtI7Itt3hBuh8FE";
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${val}&key=${APIkey}`;
    var res= await fetch(url);
    var res2= await res.json();
    console.log(res2.items);
    // displayData(res2.items);
    
    localStorage.setItem("data", JSON.stringify(res2.items))
    window.location.href = "./searchRes.html";
    }
    

   async function pop(){
    let res =await fetch(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=topicDetails&chart=mostPopular&maxResults=20&key=AIzaSyCLFrq5nzKA0-ws8ykdvtI7Itt3hBuh8FE")
    let res2 = await res.json();
    console.log(res2.items, "res");
    displaypop(res2.items);
  }
  pop();


  function displaypop(data){
    // window.location.href = "./searchRes.html";
    // let data= JSON.parse(localStorage.getItem("data"));
    var display= document.getElementById("popular");
    // display.innerHTML= null;
    data.map(el => {
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
            playd(el.id);
        })
        card1.append(divimg, h3);
        display.append(card1);
    })
}


function playd(elem){

    localStorage.setItem("id", JSON.stringify(elem));
    window.location.href = "./page.html"
    // console.log(elem);
}

    //  https://youtube.googleapis.com/youtube/v3/videos?part=topicDetails&chart=mostPopular&key=[YOUR_API_KEY] HTTP/1.1
    //  https://youtube.googleapis.com/youtube/v3/videos?part=topicDetails&chart=mostPopular&key=[YOUR_API_KEY] HTTP/1.1  
    
    //  https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=topicDetails&chart=mostPopular&maxResults=20&key=[YOUR_API_KEY] HTTP/1.1




    //  https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=[YOUR_API_KEY] HTTP/1.1
