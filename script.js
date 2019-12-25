const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  // Ask user for a new todo item by sending out a prompt
  let item = prompt("What should be added to the todo list?")

  // Check how many items and unchecked ones at start
  let numItems = itemCountSpan.innerHTML
  let uncheckedItems = uncheckedCountSpan.innerHTML

  // Only if user writes a new todo, add it to the todo list
  if (item){

    // There is now a new item, which is not checked
    numItems++
    uncheckedItems++

    // Create a checkbox for the new todo item
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.className = classNames.TODO_CHECKBOX
    checkBox.id = 'checkbox' + numItems

    // When check box is clicked update the counts shown
    checkBox.addEventListener('click', function(){
      if (checkBox.checked){
        uncheckedItems = parseInt(uncheckedCountSpan.innerHTML) - 1
      }
      else{
        uncheckedItems = parseInt(uncheckedCountSpan.innerHTML) + 1
      }
      uncheckedCountSpan.innerHTML = uncheckedItems
    })

    // Create a label for this checkbox (the actual todo item)
    let checkBoxLabel = document.createElement('label')
    checkBoxLabel.htmlFor = 'checkbox' + numItems
    checkBoxLabel.className = classNames.TODO_TEXT
    let textNode = document.createTextNode(item)
    checkBoxLabel.appendChild(textNode)

    // Create a button to delete the item (and itself)
    const button = document.createElement('button')
    button.innerHTML = 'delete'
    button.className = classNames.TODO_DELETE + 'btn btn-danger btn-sm'

    button.addEventListener('click', function(){
      // Check how many items and unchecked first
      numItems = itemCountSpan.innerHTML
      uncheckedItems = uncheckedCountSpan.innerHTML

      // If the item to be deleted was not checked, decrease number
      // of items that are unchecked
      if (!document.getElementById('checkbox' + numItems).checked){
        console.log("removing unchecked")
        uncheckedItems--
      }
      // When button is clicked, delete the whole item, and update counts
      document.getElementById('listItem' + numItems).remove()
      console.log("removing anything")
      numItems--

      // Update the view
      itemCountSpan.innerHTML = numItems
      uncheckedCountSpan.innerHTML = uncheckedItems
    })

    // Create a list item to hold the checkbox, label and button
    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    li.id = 'listItem' + numItems
    li.appendChild(checkBox)
    li.appendChild(checkBoxLabel)
    li.appendChild(button)

    list.appendChild(li)
    itemCountSpan.innerHTML = numItems
    uncheckedCountSpan.innerHTML = uncheckedItems

  }
}
