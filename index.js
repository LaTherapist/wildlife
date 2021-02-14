let offset = 0;
let slider = document.querySelector('.slider-line');

prev.onclick = () => {
    offset += 360; 
    if (offset > 0) offset = -720; 
    slider.style.left = offset + 'px';
}
next.onclick = () => {
    offset -= 360; 
    if (offset < -720) offset = 0;
    slider.style.left = offset + 'px';
}  