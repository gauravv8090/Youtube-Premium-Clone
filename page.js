// function play(data){
//     // window.location.href = "./page.html";
    
// //   const ourFrame =   document.getElementById("ourFrame");
// //   ourFrame.src= `https://www.youtube.com/embed/BddP6PYo2gs`
//     // console.log(event.target.id);
//     console.log(data);
//     // disvideo(data);
// }


// console.log(idvid);

function disvideo(){
    
    let idvid = JSON.parse(localStorage.getItem("id"));
    // let video= document.getElementById("video");
    // let h3= document.createElement("h2");
    // h3.style.color = "white"
    // h3.innerText = "heyy";
    let vv = document.getElementById("ourFrame");
    vv.src= `https://www.youtube.com/embed/${idvid}`;
    
    console.log(idvid);

}

disvideo();