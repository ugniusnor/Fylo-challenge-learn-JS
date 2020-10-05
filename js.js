let a;
function showHide () {
    if (a==1) {
        document.querySelector(".speech-bubble").style.display="flex";
        return a=0;
    }
    else {
        document.querySelector(".speech-bubble").style.display="none";
        return a=1;
    }
}
let b;
function showHide2() {
    if (b==1) {
        
        document.querySelector(".author").style.display="none";
        return a=0;
    }
    else {
       
        document.querySelector(".author").style.display="flex";
        return b=1;
    }
}