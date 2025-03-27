/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

--section-bg-color: #F4F4F4;
--div-bg-color: #FFFFFF;
--h2-color: #5A537B;
--span-color: #353535;
*/

const mode = document.getElementById("toggleSwitch")
const root = document.documentElement

mode.addEventListener("change", (e) => {
    if (e.target.checked) {
        console.log("Dark Mode")
        root.style.setProperty("--section-bg-color", "#1F2937")
        root.style.setProperty("--div-bg-color", "#273549")
        root.style.setProperty("--h2-color", "#CCC1FF")
        root.style.setProperty("--span-color", "#FFFFFF")
    } else {
        console.log("Light Mode")
        root.style.setProperty("--section-bg-color", "#F4F4F4")
        root.style.setProperty("--div-bg-color", "#FFFFFF")
        root.style.setProperty("--h2-color", "#5A537B")
        root.style.setProperty("--span-color", "#353535")
    }
})

let meter = 0
let liters = 0
let kilos = 0
let feet = 0
let gallons = 0
let pounds = 0

const number = document.getElementById("number")
const btnConvert = document.getElementById("btn-convert")

const lengths = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

btnConvert.addEventListener("click", () => {
    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */
    console.log(number.value)

    // Metric
    meter = (number.value / 3.281).toFixed(3)
    liters = (number.value / 0.264).toFixed(3)
    kilos = (number.value / 2.204).toFixed(3)

    // Imperial
    feet = (number.value * 3.281).toFixed(3)
    gallons = (number.value * 0.264).toFixed(3)
    pounds = (number.value * 2.204).toFixed(3)

    lengths.textContent = `${number.value} meters = ${feet} feet | ${number.value} feet = ${meter} meters`
    volume.textContent = `${number.value} liters = ${gallons} gallons | ${number.value} gallons = ${liters} liters`
    mass.textContent = `${number.value} kilos = ${pounds} pounds | ${number.value} pounds = ${kilos} kilos`
})