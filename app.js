// toggle nav code...

const nav = document.querySelector(".nav-container");
const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".links");
var counter = true;

nav.addEventListener("click", function () {

    if (counter == true) {
        closeBtn.style.cssText = "display: flex;";
        menu.style.cssText = "display: flex;";
        counter = false

    } else {
        closeBtn.style.cssText = "display: none;";
        menu.style.cssText = "display: none;";
        counter = true
    }

});

closeBtn.addEventListener("click", function () {

    if (counter == true) {
        closeBtn.style.cssText = "display: flex;";
        menu.style.cssText = "display: flex;";
        counter = false

    } else {
        closeBtn.style.cssText = "display: none;";
        menu.style.cssText = "display: none;";
        counter = true
    }
});



// timer engine...


const toggleTime = document.querySelector(".circle");
const toggleTimeS = document.querySelector(".stopCircle");
const hourSecond = document.getElementById("hour");
const realHour = document.getElementById("hours");
const minet = document.getElementById("minut");


var second = 0,
    minets = 0,
    hours = 0,
    stopBtn = true;

function pad(val) {
    return val > 9 ? val : "0" + val;
};

var objects = ["hello", "lets work", "come on!", "fatboiiizz"];
var randomR = objects[Math.floor(Math.random() * objects.length)];


function interva() {
        document.getElementById("pous").style.display = "flex";
        document.getElementById("start").style.display = "none";
        
        document.querySelector(".stop").removeEventListener("click", stopp, true);
        document.querySelector(".restart").removeEventListener("click", startAgain, true);
        
        document.querySelector(".restart").style.cssText = "transform: scale(1); opacity: 0.2";
        document.querySelector(".stop").style.cssText = "transform: scale(1); opacity: 0.2;";
        myVar = setInterval(() => {
            // time++;
            second++;
            if (second >= 60) {
                second = 0;
                minets++;
            }
            if (minets >= 60) {
                minets = 0;
                hours++;
            }
            if (hours >= 24) {
                clearInterval(myVar);
                console.log("Time is limited!");
            }
            hourSecond.innerHTML = pad(second);
            minet.innerHTML = pad(minets);
            realHour.innerHTML = pad(hours);
            toggleTimeS.style.cssText = "opacity: 0;"; 
            // toggleTime.style.cssText = "background: white; color: #333; ";
            
            // document.querySelector(".km").style.cssText = "transform: scale(0);";
            // document.querySelector(".min").style.cssText = "transform: scale(0);";
            // document.querySelector(".time-counter").style.cssText = " position: absolute; left: 10px; background: lightgreen; padding: 60px; border-radius: 50%; width: 150px; height: 150px; justify-content: center; align-items: center; ";
            // document.querySelector(".resolt").style.cssText = "transform: scale(0);";
        }, 1000);
}



function stopp() {
    second = 0;
    minets = 0;
    hours = 0;
    stopBtn = true
    clearInterval(myVar);
    hourSecond.innerHTML = "00";
    minet.innerHTML = "00";
    realHour.innerHTML = "00";
    document.querySelector(".stop").removeEventListener("click", stopp, true);
    document.querySelector(".restart").removeEventListener("click", startAgain, true);
    document.querySelector(".time-counter").style.cssText = "animation: none;";
    // toggleTime.style.cssText = "background: #bf81ff; color: white;";
    // document.querySelector(".resolt").style.cssText = "transform: scale(0);";
    document.getElementById("start").style.display = "flex";
    document.getElementById("pous").style.display = "none";
    // document.querySelector(".km").style.cssText = "transform: scale(0);";
    // document.querySelector(".min").style.cssText = "transform: scale(0);";
    document.querySelector(".restart").style.cssText = "transform: scale(1); animation: none;";
    document.querySelector(".stop").style.cssText = "opacity: 0.2";
}
function toggleTimer() {
    if (stopBtn == true) {
        document.querySelector(".stop").addEventListener("click", stopp, true);
        document.querySelector(".restart").style.cssText = "transform: scale(1); animation: none;";
        document.querySelector(".stop").style.cssText = "opacity: 0.2;";
        document.querySelector(".restart").addEventListener("click", startAgain, true);
        document.querySelector(".time-counter").style.cssText = "animation: none; ";
        interva();
        stopBtn = false
    } else {
        clearInterval(myVar);
        document.querySelector(".stop").style.cssText = "opacity: 0.2;";
        if (second > 0) {
            stopBtn = true
            clearInterval(myVar);
            // toggleTime.style.cssText = "background: lightcoral; color: white; ";
            // document.querySelector(".km").style.cssText = "transform: scale(1);";
            // document.querySelector(".min").style.cssText = "transform: scale(1);";
            document.querySelector(".restart").addEventListener("click", startAgain, true);
            document.querySelector(".stop").addEventListener("click", stopp, true);
            document.querySelector(".restart").style.cssText = "transform: scale(1); opacity: 1;animation: rest 1s infinite; ";
            document.querySelector(".stop").style.cssText = "opacity: 1;";
            toggleTimeS.style.cssText = "opacity: 1;"; 

            // document.querySelector(".resolt").style.cssText = "transform: scale(1);";
            // document.querySelector(".resolt").innerHTML = randomR;
            document.getElementById("pous").style.display = "none";
            document.getElementById("start").style.display = "flex";
            // document.querySelector(".time-counter").style.cssText = "animation: none;  ";
            // toggleTimeS.style.cssText = "background: lightcoral; padding: 5px; color: white; opacity: 1;";
        } else {
            startAgain();
        }
    }

}

function startAgain() {
    hourSecond.innerHTML = "00";
    minet.innerHTML = "00";
    realHour.innerHTML = "00";
    clearInterval(myVar);
    second = 0;
    minets = 0;
    hours = 0;
    interva();
    stopBtn = false
};


document.querySelector(".stop").addEventListener("click", stopp, true);
const restart = document.querySelector(".restart").addEventListener("click", startAgain, true);
toggleTime.addEventListener("click", toggleTimer);


function nowTime() {

    // klockan


    var clock = setInterval(nowTime, 1000);

    var t = new Date();
    document.getElementById("clockan").innerHTML = t.toLocaleTimeString();

}