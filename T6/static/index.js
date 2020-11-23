function renderTaskInnerHTML(task){
    const timeNow = new Date().getTime()
    const [icon,color] = task.completed ? 
                    ['checkmark-outline','text-success'] : 
                    timeNow <= new Date(task.due).getTime() ?
                        ['ellipse',''] :
                        ['warning-outline','text-danger']

    return `
                <h1 class="display-5 d-flex align-items-center justify-content-around" style="width:66%">
                    <div style="width: 60%"> 
                        <ion-icon name=${icon} class="pr-4 ${color}" style="font-size:0.6em;"></ion-icon>
                        ${task.title}
                    </div> 
                    <div style="width: 40%">
                    ${task.completed?task.completed:task.due}
                    </div>
                </h1>
                <div class="btn-group display-5" style="width:33%" role="group" aria-label="Basic example">
                    ${task.completed===undefined?
                        `<button type="button" style="width:33%" onclick="completeTask('${task.id}','${task.title}','${task.due}')" class="btn btn-lg btn-success display-4">Completar</button>
                         <button type="button" style="width:33%" onclick="updateTask('${task.id}','${task.title}','${task.due}')" class="btn btn-lg btn-warning .text-light display-4">Editar</button>`:
                        ""
                    }
                    
                    <button type="button" style="width:33%" onclick="deleteTask('${task.id}')" class="btn btn-lg btn-danger  display-4">Apagar</button>
                </div>`
}

function addTask(task) {
    const taskList = document.getElementById("task-list")
    const lastChild = taskList.lastElementChild
    const taskLi = document.createElement("li")
    taskLi.classList.add("list-group-item", "list-group-item-action", "d-flex")
    taskLi.setAttribute("id", task.id);

    taskLi.innerHTML=renderTaskInnerHTML(task);
    
    taskList.insertBefore(taskLi, lastChild)
}

async function completeTask(id,title,due){
    const today = new Date();
    const completed = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const updatedTask = {id,title,due,completed}

    const resp = await fetch(`\/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({completed})
    })
    if (resp.ok) {
        const taskLi = document.getElementById(id)
        taskLi.innerHTML = renderTaskInnerHTML(updatedTask)
    }
    else 
        alert("Occorreu um erro ao completar a tarefa")
}

async function deleteTask(id){
    const resp = await fetch(`\/tasks/${id}`, {
        method: 'DELETE',
    })
    if (resp.ok) {
        const taskLi = document.getElementById(id)
        taskLi.parentNode.removeChild(taskLi)
    }
    else 
        alert("Occorreu um erro ao remover a tarefa")
}

function updateTask(id, title,due){
    showUpdateTaskModal({id,title,due})
}

async function fillTasks() {
    const taskData = await fetch("/tasks").then(resp => resp.json())

    const timeNow = new Date().getTime()
    tasksToDo = taskData.filter(task => !task.completed && (timeNow <= new Date(task.due).getTime()))
    tasksLate = taskData.filter(task => !task.completed && timeNow > new Date(task.due).getTime())
    tasksDone = taskData.filter(task => task.completed)

    tasksLate.forEach(task => {addTask(task)})
    tasksToDo.forEach(task => {addTask(task)})
    tasksDone.forEach(task => {addTask(task)})
    
}

function showNewTaskModal() {
    const modal = document.getElementById('modal')
    modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Adicionar Tarefa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="new-form">
                        <label for="formGroupExampleInput">Titulo</label>
                        <input type="text" class="form-control" name="title" placeholder="Passear o cão">
                        <label for="formGroupExampleInput2">Data Limite</label>
                        <input type="text" class="form-control" name="due" placeholder="aaaa-mm-dd">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="submit" form="new-form" value="Submit" class="btn btn-primary">Adicionar</button>
            </div>
        </div>
    </div>`

    document.getElementById('new-form').addEventListener('submit', async (e) => {
        e.preventDefault()
        const dateInserted = Date.parse(e.target.due.value)
        const uniqueId = Math.random().toString(36).substr(2, 9)

        if (dateInserted) {
            const newTask = {
                id: uniqueId,
                title: e.target.title.value,
                due: e.target.due.value
            }
            const resp = await fetch(`\/tasks/${uniqueId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(newTask)
            })

            if (resp.ok) {
                addTask(newTask);
                $('#modal').modal('hide')
            }
            else {
                alert("Occorreu um erro ao inserir a tarefa")
            }
        }
        else
            alert("A data limite inserida não é valida")
    })

    $('#modal').modal('show')
}

function showUpdateTaskModal(task) {
    const modal = document.getElementById('modal')
    modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Tarefa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="new-form">
                        <label for="formGroupExampleInput">Titulo</label>
                        <input type="text" class="form-control" name="title" value="${task.title}" placeholder="Passear o cão">
                        <label for="formGroupExampleInput2">Data Limite</label>
                        <input type="text" class="form-control" name="due" value="${task.due}" placeholder="aaaa-mm-dd">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="submit" form="new-form" value="Submit" class="btn btn-primary">Editar</button>
            </div>
        </div>
    </div>`

    document.getElementById('new-form').addEventListener('submit', async (e) => {
        e.preventDefault()
        const dateInserted = Date.parse(e.target.due.value)

        if (dateInserted) {
            const updatedTask = {
                id: task.id,
                title: e.target.title.value,
                due: e.target.due.value
            }
            const resp = await fetch(`\/tasks/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(updatedTask)
            })

            if (resp.ok) {
                const taskLi = document.getElementById(task.id)
                taskLi.innerHTML = renderTaskInnerHTML(updatedTask)
                $('#modal').modal('hide')
            }
            else {
                alert("Occorreu um erro ao editar a tarefa")
            }
        }
        else
            alert("A data limite inserida não é valida")
    })

    $('#modal').modal('show')
}

fillTasks();