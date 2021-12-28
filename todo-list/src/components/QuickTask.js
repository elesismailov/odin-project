
import state from "../state.js";
import Todo from "../todo-factory.js";

export default function QuickTask(project, rerender) {

    const wrapper = document.createElement("div");
    wrapper.id = 'quick-task';

    let html = `
        <form>
			<span class="priority"></span>
            <label>
                <span class="plus">+</span>
                <input name='title' type="text" placeholder="New Task..."/>
            </label>
            ${!project ? `
            <div class="dropdown" >
                <button name='project' data-value='${state.projects[0].title}' class="select-project" aria-expanded="false">${state.projects[0].title}</button>
                <ul>
                    ${state.projects.map(p => {
                        return `<li><button data-value='${p.title}' class='project-option'>${p.title}</button></li>`
                    }).join('')}
                </ul>
            </div>
            ` : ''}
			<input name='isComplete' type="checkbox">
            <select name='priority'>
                <option value='0'>None</option>
                <option value='1'>!</option>
                <option value='2'>!!</option>
                <option value='3' selected>!!!</option>
            </select>
        </form>
    `;
    wrapper.innerHTML = html;
    try{
    wrapper.querySelector('.select-project').addEventListener('click', function(event) {
        if (event.explicitOriginalTarget !== this) return 
        event.preventDefault()
        wrapper.querySelector('.select-project').setAttribute("aria-expanded", true)

    })
    wrapper.querySelectorAll('.project-option').forEach(opt => {
        opt.addEventListener('click', function(event) {
            event.preventDefault()
            wrapper.querySelector('.select-project').dataset.value = this.dataset.value;
            wrapper.querySelector('.select-project').innerHTML = this.dataset.value;
            wrapper.querySelector('.select-project').setAttribute("aria-expanded", false)
        })
    })} catch {}
    
    wrapper.querySelector("form").onsubmit = function(event) {
        event.preventDefault()
        project = !project
            ? state.projects.find(p => this.project.dataset.value === p.title)
            : project;
        project.addTask(
            Todo(
                this.title.value.trim() ? this.title.value : "New Task",
                undefined,
                this.priority.value,
                this.isComplete.checked,
                project.title,
            )
        );
        this.title.value = '';
        rerender()
        state.saveState()
        project = null;
    }
    return wrapper
}

// bug: the checked='' attribute is not being added to the input, 
// but the 'checked' value changes