let layer1 = document.getElementById('layer1');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3');
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');
let title = document.getElementById('title');

window.addEventListener('scroll', function (){
    let value = window.scrollY;

    layer1.style.top = value * 0.3 + 'px';
    layer2.style.top = value * 0.7 + 'px';
    layer3.style.top = value * 0.8 + 'px';
    layer4.style.top = value * 0.9 + 'px';
    layer5.style.top = value * 1 + 'px';
    title.style.top = value * 1 + 'px';

})