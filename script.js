function showAndHide() {
    for (let n = 1; n < 6; n++) {
        var x = document.getElementById('#answer' + n);
    }
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function recordEvent(event) {
    let e = event.target.id;
    return e;
}