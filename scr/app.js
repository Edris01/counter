"use stricit"

const number = document.querySelector("#number")
const data = document.querySelector(".data")
const saveBtn = document.querySelector("#save-btn")
const increaseBtn = document.querySelector("#increase-btn")
let count = 0

increaseBtn.addEventListener("click", function(){
    count += 1
    number.textContent = count
})

saveBtn.addEventListener("click", function() {
    data.textContent += count + " - "
    number.textContent = 0
    count = 0
})