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
                <button class="delete-task  ${pr ? 'special' : ''}" data-id="${t.id}">x</button>
            </summary>
            <div>
                <form class="edit-form">
                    <div class="priority-select">
                        <label>None<input type="radio" name="priority" id="" value="0"/></label>
                        <label>!<input type="radio" name="priority" id="" value="1"/></label>
                        <label>!!<input type="radio" name="priority" id="" value="2"/></label>
                        <label>!!!<input type="radio" name="priority" id="" value="3"/></label>
                    </div>
                    <select name="project" id="">
                    </select>
                    <textarea spellcheck="false" placeholder="Description..." name="description" id=""></textarea>
                    <button type="submit">Save</button>
                </form>
            </div>
        </details>
	`;

    let form = li.querySelector(".edit-form");
    form.description.value = t.description;

    form.oninput = function (event) {
        if (t.project !== this.project.value) t.changeProject(this.project.value);

        t.edit(
            this.priority.value, 
            this.project.value, 
            this.description.value,
        );
    }
    form.onsubmit = function(event) {
        event.preventDefault()
        rerender()
    }

    // set the priority checkbox
    form.querySelector(`input[value='${t.priority}']`).checked = "true"

    // add projects to form project dropdown
    state.projects.forEach(project => {
        form.project.innerHTML +=
         `<option value="${project.title}" ${t.project === project.title ? "selected" : ""}>${project.title}</option>`;
    })

    // set project if not defined
    let name = state.projects.find(project => project.title === t.project)
    let project = !pr ? state.projects.find(project => project.title === t.project) : pr;

    li.querySelector("input").addEventListener("change", function (event) {
        t.markComplete(this.checked);
        rerender();
        state.saveState()
    });
    li.querySelector('.delete-task').addEventListener('click', function(event) {
        project.deleteTask(+this.dataset.id)
        rerender()
        state.saveState()
    })
    
    return li;
}