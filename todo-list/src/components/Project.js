import {
    sortByPriority,
    sortByDateDone,
    sortByDate,
    sortByComplete,
} from "../sort.js";
import QuickTask from "./QuickTask.js";
import Task from "./Task.js";
import state from "../state.js";

export default function ProjectComponent(project, rerender) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const backBtn = document.createElement("button");
    const msg = document.createElement("h2");
    const h1wrapper = document.createElement("div")

    const header = document.createElement("header");
    const del = document.createElement("button");
    wrapper.id = "project-page";

    backBtn.onclick = () => {
        document.body.style.overflow = "auto";
        wrapper.remove();
        rerender();
    };
    del.onclick = () => {
        state.deleteProject(+del.dataset.id);
        state.saveState();
        wrapper.remove();
        rerender();
    };

    backBtn.innerHTML = "<";
    backBtn.className = "back";

    h1.innerHTML = project.title;
    del.textContent = "Delete";
    del.dataset.id = project.id;
    h1wrapper.className = 'title-wrapper'
    
    h1wrapper.appendChild(h1);
    project.title !== "Personal" ? h1wrapper.appendChild(del) : 0;

    header.appendChild(backBtn);
    header.appendChild(h1wrapper)
    header.appendChild(QuickTask(project, renderUl));

    wrapper.appendChild(header);

    msg.className = "msg";
    msg.innerHTML = "No tasks Here!";

    function renderUl() {
        ul.innerHTML = "";
        if (!project.tasks.length) {
            wrapper.appendChild(msg);
        } else {
            msg.remove();
            wrapper.appendChild(ul);

            let done = sortByDateDone(sortByComplete(project.tasks)[1]);
            let undone = sortByPriority(
                sortByDate(sortByComplete(project.tasks)[0])
            );

            undone.forEach((t) => {
                ul.appendChild(Task(t, renderUl, project));
            });
            ul.lastElementChild
                ? ul.lastElementChild.classList.add("last-active")
                : 0;
            done.forEach((t) => {
                ul.appendChild(Task(t, renderUl, project));
            });
        }
    }
    renderUl();

    return wrapper;
}
