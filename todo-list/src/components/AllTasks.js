
import {sortByPriority, sortByDateDone, sortByDate, sortByComplete} from "../sort.js"
import QuickTask from './QuickTask.js'
import Task from './Task.js'


export default function AllTasks(projects, rerender) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const msg = document.createElement("h2");
    const header = document.createElement('header')
    const quickTask = QuickTask(undefined, renderUl)
    wrapper.id = "all-tasks";

    h1.innerHTML = "All Tasks";

    header.appendChild(h1);
    header.appendChild(quickTask)
    
    msg.className = "msg"
    msg.innerHTML = "No tasks here!";
    
    const tasks = [];

    function renderUl() {
        quickTask.render()
        tasks.length = 0;
        projects.forEach(project => tasks.push(...project.tasks))
        
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
                ul.appendChild(Task(t, renderUl, ));
            });
            ul.lastElementChild
                ? ul.lastElementChild.classList.add("last-active")
                : 0;
            done.forEach((t) => {
                ul.appendChild(Task(t, renderUl, ));
            });
        }
    }
    renderUl();
    wrapper.appendChild(header)
    wrapper.appendChild(ul)
	wrapper.render = renderUl;
    return wrapper;
}
