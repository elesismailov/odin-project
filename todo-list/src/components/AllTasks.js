
import {sortByPriority, sortByDateDone, sortByDate, sortByComplete} from "../sort.js"
import QuickTask from './QuickTask.js'
import Task from './Task.js'


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

    function renderUl() {
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
            done.forEach((t) => {
                ul.appendChild(Task(t, renderUl, ));
            });
        }
    }
    renderUl();
    wrapper.appendChild(QuickTask(undefined, renderUl))
    wrapper.appendChild(ul)
    return wrapper;
}
