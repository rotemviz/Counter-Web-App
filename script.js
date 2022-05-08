let counter=0;
function clickPlus() {
    if(document.getElementById("select-counter").selectedIndex == 0){
        counter++;
        document.getElementById("number").innerHTML = counter;
    }
    if(document.getElementById("select-counter").selectedIndex == 1) {
        counter+=5;
        document.getElementById("number").innerHTML = counter;
    }
    if(document.getElementById("select-counter").selectedIndex == 2) {
        counter+=10;
        document.getElementById("number").innerHTML = counter;
    }
}

function clickMinus() {
    if(document.getElementById("select-counter").selectedIndex == 0) {
        counter--;
        document.getElementById("number").innerHTML = counter;
    }
    if(document.getElementById("select-counter").selectedIndex == 1) {
        counter-=5;
        document.getElementById("number").innerHTML = counter;
    }
    if(document.getElementById("select-counter").selectedIndex == 2) {
        counter-=10;
        document.getElementById("number").innerHTML = counter;
    }
}

document.getElementById("minus").addEventListener("click", clickMinus);
document.getElementById("plus").addEventListener("click", clickPlus);


