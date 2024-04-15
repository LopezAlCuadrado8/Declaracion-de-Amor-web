const btnSi = document.querySelector('#btnSi'); // Recupera el primer elemento con la clase "btnSi".
const btnNo = document.querySelector('#btnNo'); // Recupera el primer elemento con la clase "btnNo".

// Crea un evento de click para el elemento "btnSi", donde sale una ventana emergente con texto.
btnSi.addEventListener('click', function () {
    alert('Sabia que ivas a que decir que si uwu')
});

// Crea un evento de click para el elemento "btnNo", si es presionado se mueve aleatoriamente hacia un punto de la pantalla
btnNo.addEventListener('click', function () {
    const randomX = parseInt(Math.random() * 200); //Elige un numero aleatorio entre 0 y 1
    const randomY = parseInt(Math.random() * 200);
    btnNo.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});