import state from "../state.js";


export default function Task(t, rerender, pr) {
    const li = document.createElement("li");
    li.innerHTML = `
        <details class="details-task" open>
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
                    <div class="priority-select">
                        <label>None<input type="radio" name="priority" id="" value="0"/></label>
                        <label>!<input type="radio" name="priority" id="" value="1"/></label>
                        <label>!!<input type="radio" name="priority" id="" value="2"/></label>
                        <label>!!!<input type="radio" name="priority" id="" value="3"/></label>
                    </div>
                    <select name="project" id="">
                        <option value="">Hello</option>
                        <option value="">Hell</option>
                        <option value="">Hel</option>
                    </select>
                    <textarea spellcheck="false" placeholder="Description..." name="description" id=""></textarea>
                </form>
            </div>
        </details>
	`;

    let form = li.querySelector(".edit-form");
    form.oninput = function (event) {
        console.log(this.priority.value)
        console.log(this.description.value)
        console.log(this.project.value)
        t.edit(
            this.priority.value, 
            this.project.value, 
            this.description.value, 
        //     t.title, 
        //     isComplete, 
        //     subtasks
        );
    }

    // set the priority checkbox
    form.querySelector(`input[value='${t.priority}']`).checked = "true"
    

    state.projects.forEach(project => {
        // console.log(project)
    })

    // set object if not defined
    let name = state.projects.find(project => project.title === t.project)
    let project = !pr ? state.projects.find(project => project.title === t.project) : pr;

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