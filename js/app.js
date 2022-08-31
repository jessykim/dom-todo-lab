const inputElement = document.getElementById("input")
const btnElement = document.getElementById("submit-button")
const listElement = document.getElementById("todo-list")
const resetBtn = document.getElementById("reset")
document.querySelector('ul').addEventListener('click', handleClick)


btnElement.addEventListener('click', function(evt){
  // create a new li element
  const li = document.createElement('li')
  // console.log(li);

  // don't allow empty items to be added to the to-do list
  if (input.value === '' || input.value === 'type something!') {
    inputElement.style.backgroundColor = "lightgray";
    input.value = 'type something!'

    inputElement.addEventListener('click', function(evt) {
      input.value = ""
      inputElement.style.backgroundColor = "white";

    })

  } else {
    // take the user's input value and set it equal to the new li element
    li.textContent = input.value
    // console.log(li.textContent);
    
    // reset the text in input field to an empty string
    input.value = ''
    
    // add a new li element to the page INSIDE the ul element
    document.querySelector('ul').appendChild(li)
  }
  
  resetBtn.addEventListener('click', function(evt){
    listElement.removeChild(li)
  })
})

function handleClick(evt){
  evt.target.remove()
}


