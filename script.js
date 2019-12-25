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
  let item = prompt("What should be added to the todo list?")

  let numItems = parseInt(itemCountSpan.innerHTML)
  numItems++

  let checkBox = document.createElement('input')
  checkBox.type = 'checkbox'
  checkBox.id = 'checkbox' + numItems

  let checkBoxLabel = document.createElement('label')
  checkBoxLabel.htmlFor = 'checkbox' + numItems

  let textNode = document.createTextNode(item)

  checkBoxLabel.appendChild(textNode)

  const li = document.createElement('li')
  li.appendChild(checkBox)
  li.appendChild(checkBoxLabel)

  list.append(li)
  itemCountSpan.innerHTML = numItems

  document.addEventListener('click', function(e){
    console.log("POLICE", e.target.id)
    //if (e.target && e.target.id === )
  })

  for (let i = 0; i < numItems; i++){
    //if document
  }

}
