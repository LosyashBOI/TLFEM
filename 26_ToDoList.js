const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
}

DEFAULT_STATUS = STATUS.TO_DO;
DEFAULT_PRIORITY = PRIORITY.LOW;

const list = [
    {name: 'play the piano', status: STATUS.TO_DO, priority: PRIORITY.LOW},
    {name: 'pet a cat', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'write some code', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
]


function changeStatus(name, status) {
    let position = list.findIndex(item => item.name == name);
    list[position].status = status;
}

function addTask(name) {
    list.push({name: name, status: DEFAULT_STATUS, priority: DEFAULT_PRIORITY});
}

function deleteTask(exTask) {
    let position = list.findIndex(item => item.name == exTask);
    list.splice(position, 1);
}

function showCategory(status) {
    const tasks = {
        [STATUS.TO_DO]: list.filter(item => item.status === STATUS.TO_DO),
        [STATUS.IN_PROGRESS]: list.filter(item => item.status === STATUS.IN_PROGRESS),
        [STATUS.DONE]: list.filter(item => item.status === STATUS.DONE),
    }

    console.log(status + ':');
    if (tasks[status] != '') {
        tasks[status].forEach((item) => {
            console.log(` ${item.name}`);
        });
    } else {
        console.log('-');
    }
}

function showBy() {
    showCategory(STATUS.TO_DO);
    showCategory(STATUS.IN_PROGRESS);
    showCategory(STATUS.DONE);
}

addTask('have a walk');
// addTask('pet a cat');
changeStatus('play the piano', STATUS.DONE);
changeStatus('pet a cat', STATUS.DONE);
changeStatus('write some code', STATUS.DONE);
// changeStatus('have a walk', 'Done');
deleteTask('have a walk');
showBy();

// console.log(list);