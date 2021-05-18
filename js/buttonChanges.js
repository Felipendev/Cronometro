"use strict"

const btnMb = document.getElementById("btn-mobile");
const sidBarHidden = document.getElementById("sidebar-hidden");

function toggleButton(event) {
    if(event.type === 'touchstart') event.preventDefault();

    const sidBarHidden = document.getElementById("sidebar-hidden");
    sidBarHidden.classList.toggle('show');

    const btnMb = document.getElementById("btn-mobile");
    btnMb.classList.toggle('changePosition');
}

btnMb.addEventListener('click', toggleButton);

btnMb.addEventListener('touchstart', toggleButton);

sidBarHidden.addEventListener('click', toggleButton);