// Font Increase //

function increaseFontSize() {
    text = document.getElementById("content");
    style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if (currentSize<20){
        text.style.fontSize = (currentSize + 1) + 'px';
    }
}

function decreaseFontSize() {
    text = document.getElementById("content");
    style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if (currentSize>2){
        text.style.fontSize = (currentSize - 1) + 'px';
    }
}
