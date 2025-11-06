"use strict";
const actualHourOutput = document.querySelector('.actual_hour__output');
const arrivalHourInput = document.querySelector('.arrival_hour__input');
const delayHourInput = document.querySelector('.delay_hour__input');
function getActualTime(arrivalHour, delayHour) {
    return (arrivalHour + delayHour) % 24;
}
function updateActualHour() {
    if (actualHourOutput && arrivalHourInput && delayHourInput) {
        const arrival = Number(arrivalHourInput.value);
        const delay = Number(delayHourInput.value);
        actualHourOutput.textContent = String(getActualTime(arrival, delay));
    }
}
arrivalHourInput?.addEventListener('change', updateActualHour);
delayHourInput?.addEventListener('change', updateActualHour);
updateActualHour();
