const form = document.getElementById('send-form');

let formEValido = false;

function numeroEValido(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();

    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);

    if (numeroEValido(campoA, campoB)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        document.getElementById('campoA').value = "";
        document.getElementById('campoB').value = "";
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
});