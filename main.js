const btnSi = document.querySelector('#btnSi'); // Recupera el primer elemento con la clase "btnSi".
const btnNo = document.querySelector('#btnNo'); // Recupera el primer elemento con la clase "btnNo".

// Crea un evento de click para el elemento "btnSi", donde sale una ventana emergente con texto.
btnSi.addEventListener('click', function () {
    alert('Sabia que ivas a que decir que si uwu')
});

// Crea un evento de mouseover para el elemento "btnNo", si es presionado se mueve aleatoriamente hacia un punto de la pantalla
btnNo.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100); //Elige un numero aleatorio entre 0 y 1
    const randomY = parseInt(Math.random() * 100);
    btnNo.style.setProperty('top', randomY + '%');
    btnNo.style.setProperty('left', randomX + '%');
    btnNo.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});