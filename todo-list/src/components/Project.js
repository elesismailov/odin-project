
import {sortByPriority, sortByDateDone, sortByDate, sortByComplete} from "../sort.js"
import QuickTask from './QuickTask.js'

export default function ProjectComponent(project) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const backBtn = document.createElement("button");
    wrapper.id = "project-page";

    backBtn.onclick = () => {
        document.body.style.overflow = "auto";
        wrapper.remove();
    };


    backBtn.innerHTML = "<";
    backBtn.className = "back";
    wrapper.appendChild(backBtn);


    h1.innerHTML = project.title;

    wrapper.appendChild(h1);
    wrapper.appendChild(QuickTask(project, renderUl));

    function renderUl() {
        ul.innerHTML = "";
        if (!project.tasks.length) {
            let msg = document.createElement("h2");
            msg.className = "msg"
            msg.innerHTML = "No tasks yet!";
            wrapper.appendChild(msg);
        } else {
            wrapper.appendChild(ul);
            let done = sortByDateDone(sortByComplete(project.tasks)[1]);
            let undone = sortByPriority(
                sortByDate(sortByComplete(project.tasks)[0])
            );
            undone.forEach((t) => {
                ul.appendChild(task(t, renderUl, project));
            });
            done.forEach((t) => {
                ul.appendChild(task(t, renderUl, project));
            });
        }
    }
    renderUl();

    return wrapper;
}

function task(t, rerender, pr) {
    const li = document.createElement("li");
    li.innerHTML = `
		<div class='task'>
			<span class="priority priority-${t.priority}"></span>
			<input type="checkbox" ${t.isComplete ? "checked" : ""}>
			<p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
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

