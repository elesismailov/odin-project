import state from "../state.js";


export default function Task(t, rerender, pr) {
    const li = document.createElement("li");
    li.innerHTML = `
        <details class="details-task">
            <summary class='task'>
                <span class="priority priority-${t.priority}"></span>
                <input type="checkbox" ${t.isComplete ? "checked" : ""}>
                <p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
                ${!pr ? `<p class="project-title">${t.project}</p>`: ''}
                <button class="edit-task  ${pr ? 'special' : ''}"></button>
                <button class="delete-task" data-id="${t.id}"></button>
            </summary>
            <div>
                <form class="edit-form">
                    <textarea name="description" id=""></textarea>
                    <div>
                        <label><input type="radio" name="priority" id="" value="0"/></label>
                        <label><input type="radio" name="priority" id="" value="1"/></label>
                        <label><input type="radio" name="priority" id="" value="2"/></label>
                        <label><input type="radio" name="priority" id="" value="3"/></label>
                    </div>
                    <select name="project" id="">
                        <option value="">Hello</option>
                        <option value="">Hell</option>
                        <option value="">Hel</option>
                    </select>
                </form>
            </div>
        </details>
	`;
    let keys = Object.keys(state.projects)
    let name = keys.filter(key => state.projects[key].title === t.project)
    let project = !pr ? state.projects[name] : pr;

    li.querySelector("input").addEventListener("change", function (event) {
        t.markComplete(this.checked);
        rerender();
    });
    li.querySelector('.delete-task').addEventListener('click', function(event) {
        project.deleteTask(+this.dataset.id)
        rerender()
    })
    
    return li;
}