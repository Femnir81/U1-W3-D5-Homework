function addToDisplay(element) {
    document.getElementById('display').innerHTML += element
}

function displayResult() {
    let result = eval(document.getElementById('display').innerHTML)
    document.getElementById('display').innerHTML = result
}

function deleteDisplay() {
    document.getElementById('display').innerHTML = ' '
}
  
function backspace() {
    var input = document.getElementById("display")
    input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1)
}
  