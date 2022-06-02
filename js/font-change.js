// Font Changer //
var content = document.getElementById("content");
function changeFontSize(change_id) {
    style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    size = parseFloat(style);
    if (change_id == "increase") {
        content.style.fontSize = (size + 5) + 'px';
        size = size + 5;
    } if (change_id == "decrease") {
        content.style.fontSize = (size - 5) + 'px';
        size = size - 5;
    }
}

