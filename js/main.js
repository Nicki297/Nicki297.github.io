"use strict";
// let t = 1000;
// let i = 1;
// let currend_star = document.getElementById("star_0")

// function randomTick() {
//     setTimeout(() => {
//         t = Math.random() * 5000;
//         // console.log(`Delay: ${t}`);
//         let newStar = currend_star.cloneNode(true);
//         newStar.id = "star_" + i;
//         currend_star.before(newStar);
//         currend_star = newStar;
//         ++i;
//         randomTick();  // set up the next tick
//     }, t);
// }
// randomTick();      // start the first tick

let img_list = [
    "https://upload.wikimedia.org/wikipedia/commons/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg",
    "https://us.123rf.com/450wm/smilyk/smilyk1611/smilyk161100036/65602872-gl%C3%BChender-realistischer-blauer-stern-stilisiertes-objekt-kosmisches-konzept-.jpg",
    "https://qph.cf2.quoracdn.net/main-qimg-769c79fe317d0cc35d2413c578bb8211-lq"
]

let star_list = []

function create_star() {
    const el = document.createElement("div");
    el.setAttribute("class", "star_img");
    // el.setAttribute("src", img_list[~~(Math.random()*img_list.length)]);
    el.style.background = `black url(${img_list[~~(Math.random()*img_list.length)]}) center no-repeat`
    // el.style.backgroundImage = `url(${img_list[~~(Math.random()*img_list.length)]})`
    el.style.top = `${Math.random() * 100}vh`; 
    el.style.left = `${Math.random() * 100}vw`;
    el.style.transform = `rotate(${Math.random()*360}deg)`;
    el.style.scale = (Math.random() * 0.5)  + 0.1;
    // el.innerHTML = `test ${i}`
    el.style.opacity = (Math.random() * 0.5) + 0.5;
    document.body.append(el);
    star_list.push(el);    
}

let t = 1000;
function create_star_rnd() {
    setTimeout(() => {
        create_star();
        t = Math.random() * 3000;
        create_star_rnd();
    },t)
}

let t2 = 2000;

function remove_rnd_star() {
    setInterval(() => {
        if (star_list.length>10) {
            star_list[~~(Math.random()*star_list.length)].style.opacity = 0;
            star_list[~~(Math.random()*star_list.length)].remove();
        }
    }, t2)  
}

create_star_rnd();
remove_rnd_star();

// setInterval(( => {remove_star()},2000))
