let list = document.querySelector('.slider .carousel');
let itens = document.querySelectorAll('.slider .carousel .slide');
let nxtButton = document.getElementById("btn_nxt");
let prvButton = document.getElementById("btn_prev")

let active = 0;
let itemLength = itens.length;

nxtButton.onclick = function(){
    if(active + 1 > itemLength){
        active = 0;
    }else{
        active = active+1;
    }
    reloadSlider();
}
prvButton.onclick = function(){
    if(active - 1 < 0){
        active = itemLength;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => {nxtButton.click()}, 3000);

function reloadSlider(){
    let checkLeft = itens[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {nxtButton.click()}, 3000);

}

//Flip Card
function flipCard(element) {
    element.classList.toggle('flipped');
  }
