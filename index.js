


function addTodo (e) {
    
    e.preventDefault()
    e.stopImmediatePropagation()
    const newLi = document.createElement('li')
    newLi.innerText = document.getElementById('item').value

    newLi.addEventListener('click',completeTodo)
    const xbut = document.createElement('button')
    const unlist = document.querySelector('ul')
    xbut.innerText = "X"      
   
    unlist.appendChild(newLi)
    
    newLi.append(xbut)  
    document.getElementById('item').value= ""
    console.log(e)

   
  xbut.addEventListener("click",removeTodo)
    
    
}

function removeTodo (e){
    e.target.parentNode.remove()
}

function completeTodo(e) {
    const att= e.target.getAttribute('aria-checked')
    if(att!=='true'){
        e.target.setAttribute("aria-checked","true")
    }
    else{
    e.target.setAttribute("aria-checked","false")
    }
}


document.getElementsByTagName('form')[0].addEventListener("submit",addTodo)

function completeTodo(event) {
    const value = event.target.getAttribute("aria-checked");
    if (value !== "true") {
      event.target.setAttribute("aria-checked", "true");
    } else {
      event.target.setAttribute("aria-checked", "false");
    }
  }