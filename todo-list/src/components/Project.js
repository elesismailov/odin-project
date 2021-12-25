
import {sortByPriority, sortByDateDone, sortByDate, sortByComplete} from "../sort.js"

export default function ProjectComponent(project) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const backBtn = document.createElement("button");

    backBtn.innerHTML = "<";
    backBtn.className = "back";
    wrapper.appendChild(backBtn);

    backBtn.onclick = () => {
        document.body.style.overflow = "auto";
        wrapper.remove();
    };

    h1.innerHTML = project.title;

    wrapper.appendChild(h1);
    wrapper.id = "project-page";

    function renderUl() {
        ul.innerHTML = "";
        if (!project.tasks.length) {
            let msg = document.createElement("h2");
            msg.innerHTML = "No tasks yet!";
            wrapper.appendChild(msg);
        } else {
            wrapper.appendChild(ul);
            let done = sortByDateDone(sortByComplete(project.tasks)[1]);
            let undone = sortByPriority(
                sortByDate(sortByComplete(project.tasks)[0])
            );
            undone.forEach((t) => {
                ul.appendChild(task(t, renderUl));
            });
            done.forEach((t) => {
                ul.appendChild(task(t, renderUl));
            });
        }
    }
    renderUl();

    return wrapper;
}

function task(t, rerender) {
    const li = document.createElement("li");
    li.innerHTML = `
		<div class='task'>
			<span class="priority priority-${t.priority}"></span>
			<input type="checkbox" ${t.isComplete ? "checked" : ""}>
			<p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
			<button class="edit-task"></button>
			<button class="delete-task"></button>
		</div>
	`;
    li.querySelector("input").addEventListener("change", function (event) {
        t.markComplete(this.checked);
        rerender();
    });
    return li;
}

