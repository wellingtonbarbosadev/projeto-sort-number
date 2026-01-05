const inputs = document.querySelectorAll("input")
const form = document.querySelector("form")
const formNumber = document.querySelector(".form")
const result = document.querySelector(".result")
const resultNumbers = document.querySelector(".result .result-numbers")
const newSort = document.querySelector(".newSort")

const numbers = document.querySelector("#numbers")
const fromNumber = document.querySelector("#fromNumber")
const toNumber = document.querySelector("#toNumber")
const repeatNumber = document.querySelector("#repeatNumber")

inputs.forEach(input => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "")
  })
})

function sortNumbers() {
  
  let number = []
  for (let i = 0; i < numbers.value; i++) {
    const numberRandom = Math.floor(Math.random() * (Number(toNumber.value) - Number(fromNumber.value) + 1)) + Number(fromNumber.value);
    if (repeatNumber.checked) {
      if (number.includes(numberRandom)) {
        i--
        continue
      }
    }
    
    setTimeout(() => {
      number.push(numberRandom)
      const number_element = document.createElement("span")
      number_element.textContent = numberRandom
    
      resultNumbers.appendChild(number_element)
    }, 1000 * (i + 1));
    
  }
  console.log(number)
}

form.addEventListener("submit", (e) => {
  e.preventDefault()

  formNumber.classList.add("hidden")
  result.classList.remove("hidden")
  sortNumbers()
  
})

newSort.addEventListener("click", () => {
  resultNumbers.innerHTML = ""
  sortNumbers()

})