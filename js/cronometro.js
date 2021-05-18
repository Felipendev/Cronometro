"use strict"

var hora = 0;
var min = 0;
var seg = 0;

var tempo = 1000; //Quantos misésimos valem 1 segundo?
var cronometro;

const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");

function btnInvisible() {
    const btnStart = document.getElementById("btn-start");
    btnStart.classList.add('invisible');
}

btnStart.addEventListener('click', btnInvisible);

function btnVisible() {
    const btnStart = document.getElementById("btn-start");
    btnStart.classList.remove('invisible');
}

btnPause.addEventListener('click', btnVisible);
btnStop.addEventListener('click', btnVisible);

function start() {
    cronometro = setInterval(() => { timer(); }, tempo);

}

function pause() {
    clearInterval(cronometro);
}

function stop() {
    clearInterval(cronometro);
    hora = 0;
    min = 0;
    seg = 0;

    document.getElementById("counter").innerHTML = "00:00:00";
}

function timer() {

    seg++;
    if (seg == 60) {
        seg = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hora++
    }

    var format =
        (hora < 10 ? '0' + hora : hora) +
        ':' + (min < 10 ? '0' + min : min) +
        ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById("counter").innerHTML = format;
}