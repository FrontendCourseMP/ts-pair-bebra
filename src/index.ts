const actualHourOutput: HTMLElement | null = document.querySelector('.actual_hour__output')
const arrivalHourInput: HTMLInputElement | null = document.querySelector('.arrival_hour__input')
const delayHourInput: HTMLInputElement | null = document.querySelector('.delay_hour__input')

function getActualTime(arrivalHour: number, delayHour: number): number {
    return (arrivalHour + delayHour) % 24
}

function updateActualHour(): void {
    if (actualHourOutput && arrivalHourInput && delayHourInput) {
        const arrival = Number(arrivalHourInput.value)
        const delay = Number(delayHourInput.value)
        actualHourOutput.textContent = String(getActualTime(arrival, delay))
    }
}

arrivalHourInput?.addEventListener('input', updateActualHour)
delayHourInput?.addEventListener('input', updateActualHour)

updateActualHour()

console.log(1)
