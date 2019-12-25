const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let checkedItems = 0

function newTodo() {

  // Ask user for a new todo item by sending out a prompt
  let item = prompt("What should be added to the todo list?")

  let numItems = itemCountSpan.innerHTML

  // Only if user writes a new todo, add it to the todo list
  if (item){

    numItems++
    uncheckedCountSpan.innerHTML = numItems

    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.className = classNames.TODO_CHECKBOX
    checkBox.id = 'checkbox' + numItems
    checkBox.addEventListener('click', function(){
      if (checkBox.checked){
        checkedItems = parseInt(uncheckedCountSpan.innerHTML) - 1
      }
      else{
        checkedItems = parseInt(uncheckedCountSpan.innerHTML) + 1
      }
      uncheckedCountSpan.innerHTML = checkedItems
    })

    let checkBoxLabel = document.createElement('label')
    checkBoxLabel.htmlFor = 'checkbox' + numItems
    checkBoxLabel.className = classNames.TODO_TEXT

    let textNode = document.createTextNode(item)

    checkBoxLabel.appendChild(textNode)

    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    li.appendChild(checkBox)
    li.appendChild(checkBoxLabel)

    list.append(li)
    itemCountSpan.innerHTML = numItems
  }


}
