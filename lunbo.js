window.onload = function() {
    var pic = document.getElementsByClassName("banner-pic")[0];
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    function animate(offset){
        var newLeft = parseInt(pic.style.left) + offset;
        pic.style.left = newLeft + "px";
        pic.style.transition = '300ms ease';  
        if(newLeft<=-1900){
            pic.style.left = 0 +'px';
        }
        /*从第一张偏移值到最后第一张*/
        if(newLeft>0){
            pic.style.left = -1425 +'px';
        }
    }
    prev.onclick = function(){
        animate(475);
    }
    next.onclick = function(){
        animate(-475);
    }
}
var timer;
function autoplay() {
    timer = setInterval(function(){
        next.onclick()
    }, 2000);
}
autoplay();
var banner = document.getElementById('banner');
function stopplay() {
    clearInterval(timer);
}
banner.onmouseover = stopplay;
banner.onmouseout = autoplay;
var buttons = document.getElementsByClassName('banner-btn')[0].getElementsByTagName('span');
var index = 1;
function showButton() {
    for(let i = 0; i<buttons.length; i++){
        if(buttons[i].className == 'on'){
            buttons[i].className = '';
        }
    }
    buttons[index-1].className = 'on';
}
prev.onclick = function() {
    index -= 1;
    if(index < 1){
        index = 4;
    }
    showButton();
    animate(475);
}
next.onclick = function() {
    index += 1;
    if(index > 4){
        index = 1;
    }
    showButton();
    animate(-475);
}
for(var i=0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        var clickIndex = parseInt(this.getAttribute('index'));
        var offset = 400*(index - clickIndex);
        animate(offset);
        index = clickIndex;
        showButton();
    }
}