const list = {
    'play the piano': 'Done',
    // 'clean the room': 'In Progress',
    'write some code': 'To Do',
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(newTask) {
    list[newTask] = 'To Do';
}

function deleteTask(exTask) {
    delete list[exTask];
}


function showList() {
    let toDo = '';
    let inProgress = '';
    let done = '';

    for (task in list) {
        if (list[task] == 'To Do') {
            toDo += ` "${task}"\n`;

        } else if (list[task] == 'In Progress') {
            inProgress += ` "${task}"\n`;

        } else if (list[task] == 'Done') {
            done += ` "${task}"\n`;
        }
    }

    if (toDo) {
        console.log(`Todo:\n${toDo}`)

    } else {
        console.log('Todo:\n -');
    }

    if (inProgress) {
        console.log(`In Progress:\n${inProgress}`)
        
    } else {
        console.log('In Progress:\n -');
    }

    if (done) {
        console.log(`Done:\n${done}`)
        
    } else {
        console.log('Done:\n -');
    }
}

addTask('have a walk');
addTask('pet the cat');
changeStatus('have a walk', 'In Progress');
changeStatus('pet the cat', 'Done');
changeStatus('have a walk', 'Done');
// deleteTask('have a walk');
showList();