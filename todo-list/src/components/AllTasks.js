
import {sortByPriority, sortByDateDone, sortByDate, sortByComplete} from "../sort.js"
import QuickTask from './QuickTask.js'


export default function AllTasks(projects, rerender) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    h1.innerHTML = "All Tasks";
    wrapper.appendChild(h1);
    wrapper.id = "all-tasks";

    const tasks = [];
    Object.keys(projects).forEach((key) => tasks.push(...projects[key].tasks));

    let done = sortByDateDone(sortByComplete(tasks)[1]);
    let undone = sortByPriority(
        sortByDate(sortByComplete(tasks)[0])
    );
    console.log(done);
    console.log(undone);

    return wrapper;
}

