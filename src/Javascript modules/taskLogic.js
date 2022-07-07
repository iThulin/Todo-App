let activeTasks = []


function newTask(title, project, priority, dueDate, recurring, notes) {
    return {
        title: title,
        project: project,
        priority: priority,
        dueDate: dueDate,
        recurring: recurring,
        notes: notes, 
        setTitle(title) {
            this.title = title;
        },
    }
}

export { newTask };