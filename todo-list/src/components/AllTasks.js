
import {sortByPriority, sortByDateDone, sortByDate, sortByComplete} from "../sort.js"
import QuickTask from './QuickTask.js'


export default function AllTasks(projects, rerender) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const msg = document.createElement("h2");
    h1.innerHTML = "All Tasks";
    wrapper.appendChild(h1);
    wrapper.id = "all-tasks";

    msg.className = "msg"
    msg.innerHTML = "No tasks yet!";
    
    const tasks = [];
    Object.keys(projects).forEach((key) => tasks.push(...projects[key].tasks));

    function renderUl() {
        ul.innerHTML = "";
        if (!tasks.length) {
            wrapper.appendChild(msg);
        } else {
            msg.remove()
            wrapper.appendChild(ul);
            let done = sortByDateDone(sortByComplete(tasks)[1]);
            let undone = sortByPriority(
                sortByDate(sortByComplete(tasks)[0])
            );
            undone.forEach((t) => {
                ul.appendChild(task(t, renderUl, ));
            });
            done.forEach((t) => {
                ul.appendChild(task(t, renderUl, ));
            });
        }
    }
    renderUl();
    wrapper.appendChild(ul)
    wrapper.appendChild(ul)
    return wrapper;
}


function task(t, rerender, pr) {
    const li = document.createElement("li");
    li.innerHTML = `
		<div class='task'>
			<span class="priority priority-${t.priority}"></span>
			<input type="checkbox" ${t.isComplete ? "checked" : ""}>
			<p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
			<p class="project-title">${t.project}</p>
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
