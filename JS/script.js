let cols = document.getElementsByClassName("col");
let pins = document.getElementsByClassName("pins");
let gyn = document.getElementById("gyn");
let dots = document.getElementsByClassName("dots");

Array.from(cols).forEach((e, i) => {
    var t = (-15 * Math.abs(-i + 3)) + 15;
    e.style.transform = `translatey(${t}vh)`;
})

function textChange(chngdText, chngdColor){
    setTimeout(function fade(){
        gyn.innerHTML = chngdText + " idea";
        gyn.style.color = chngdColor;
        gyn.style.transform = "translatey(30px)";
    }, 500)
    gyn.style.transform = "translatey(-30px)";
    gyn.style.opacity = "0";
    setTimeout(function unfade(){
        gyn.style.transform = "translatey(0px)";
        gyn.style.opacity = "100%";
    }, 750)
}

function dotChange(dotNum, dotColor){
    Array.from(dots).forEach((e)=>{
        e.style.backgroundColor = "#e1e1e1"
    })
    dots[dotNum].style.backgroundColor = dotColor;
}

function changePhotos(chngdDir){
    setTimeout(function fade(){
        Array.from(cols).forEach((e, i)=>{
            var t = (-15 * Math.abs(-i + 3)) + 15;
            e.style.transform = `translatey(calc(${t}vh + 50px))`;
        })
        Array.from(pins).forEach((e, i)=>{
            e.setAttribute("src", `static/${chngdDir}/${i+1}.jpg`);
        })
    }, 500)
    Array.from(cols).forEach((e, i)=>{
        var t = (-15 * Math.abs(-i + 3)) + 15;
        e.style.transform = `translatey(calc(${t}vh - 50px))`;
        e.style.opacity = "0";
    })
    setTimeout(function unfade(){
        Array.from(cols).forEach((e, i)=>{
            var t = (-15 * Math.abs(-i + 3)) + 15;
            e.style.transform = `translatey(calc(${t}vh + 0px))`;
            e.style.opacity = "100%";
        })
    }, 750)

}


setInterval(function change(){
    if(gyn.innerHTML == "home decor idea"){
        textChange("outfit", "#0b8763");
        dotChange(1, "#0b8763");
        changePhotos("outfit");
    }
    else if(gyn.innerHTML == "outfit idea"){
        textChange("evening snacks", "#de9f00");
        dotChange(2, "#de9f00");
        changePhotos("snacks");
    }
    else if(gyn.innerHTML == "evening snacks idea"){
        textChange("DIY", "#e35412");
        dotChange(3, "#e35412");
        changePhotos("diy");
    }
    else{
        textChange("home decor", "#2088FF");
        dotChange(0, '#2088ff')
        changePhotos("homedecor");
    }
}, 5000);

Array.from(dots).forEach((e, i)=>{
    e.addEventListener("click", ()=>{
        if(i == 0){
            textChange("home decor", "#2088FF");
            dotChange(i, '#2088ff')
            changePhotos("homedecor");
        }
        else if(i == 1){
            textChange("outfit", "#0b8763");
            dotChange(i, "#0b8763");
            changePhotos("outfit");
        }
        else if(1 == 2){
            textChange("evening snacks", "#de9f00");
            dotChange(i, "#de9f00");
            changePhotos("snacks");
        }
        else{
            textChange("DIY", "#e35412");
            dotChange(i, "#e35412");
            changePhotos("diy");
        }
    })
})
