"use stricit"

let number = document.getElementById("number")
let saved = document.getElementById("saved")
let count = 0

function increase() {
    count += 1
    number.textContent = count
}

function save() {
    saved.textContent += count + " - "
    number.textContent = 0
    count = 0
}