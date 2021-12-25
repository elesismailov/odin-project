

export default function Task(t, rerender, pr) {
    const li = document.createElement("li");
    li.innerHTML = `
		<div class='task'>
			<span class="priority priority-${t.priority}"></span>
			<input type="checkbox" ${t.isComplete ? "checked" : ""}>
			<p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
			${!pr ? `<p class="project-title">${t.project}</p>`: ''}
			<button class="edit-task"></button>
			<button class="delete-task" data-id="${t.id}"></button>
		</div>
	`;
    li.querySelector("input").addEventListener("change", function (event) {
        t.markComplete(this.checked);
        rerender();
    });
    li.querySelector('.delete-task').addEventListener('click', function(event) {
        pr.deleteTask(+this.dataset.id)
        rerender()
    })
    
    return li;
}