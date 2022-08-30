const inputElement = document.getElementById("input")
const btnElement = document.getElementById("submit-button")
const listElement = document.getElementById("todo-list")
const resetBtn = document.getElementById("reset")

btnElement.addEventListener('click', function(evt){
  // create a new li element
  const li = document.createElement('li')
  // console.log(li);
  
  // take the user's input value and set it equal to the new li element
  li.textContent = input.value
  // console.log(li.textContent);
  
  // reset the text in input field to an empty string
  input.value = ''

  // add a new li element to the page INSIDE the ul element
  document.querySelector('ul').appendChild(li)
})

resetBtn.addEventListener('click', function(evt){
  listElement.remove()
})
