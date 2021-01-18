window.onload = function () {
    console.log('Dokument geladen');
    datedisplay()

}

function datedisplay() {

    let datumspan = document.getElementById("datum");
    let now = new Date()
    datumspan.innerText = now.toString();

}