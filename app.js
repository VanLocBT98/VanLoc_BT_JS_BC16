
var picture = document.getElementById('picture');
document.getElementById('btnTinh').onclick = function(){
    var heightP = document.getElementById('height').value;
var widthP = document.getElementById('width').value;
    document.getElementById('perimeter').value= (Number(widthP) + Number(heightP))*2;
    document.getElementById('acreage').value = widthP*heightP;
    picture.style.width = Number(widthP) +'px';
    picture.style.height = Number(heightP) + 'px'
    picture.style.backgroundColor = 'red'
}
document.getElementById('red').onclick = function(){
    picture.style.backgroundColor = 'red';
}
document.getElementById('orange').onclick = function(){
    picture.style.backgroundColor = 'orange';
}
document.getElementById('green').onclick = function(){
    picture.style.backgroundColor = 'green';
}

