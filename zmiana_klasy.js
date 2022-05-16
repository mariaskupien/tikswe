//alert("ok");

function zmianaklasy(idObiektu, nazwaKlasy) {
    let element = document.getElementById(idObiektu);
    element.className = nazwaKlasy; 
}

var napis = "ruchomy tekst..."
var dziala = false;

function ruchomy() {
    let element = document.getElementById('rTekst');
    napis = element.value;
    element = napis.substring(1, napis.length) + napis.substring(0, 1);
    
    element.value = napis;

    if (dziala) {
        setTimeout('ruchomy()', 200);
    }
}
