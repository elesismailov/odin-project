
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
			<input name='isComplete' type="checkbox" ${0 ? "checked" : ""}>
            <select name='priority'>
                <option value='0'>None</option>
                <option value='1'>!</option>
                <option value='2'>!!</option>
                <option value='3' selected>!!!</option>
            </select>
        </form>
    `;
    wrapper.innerHTML = html;

    wrapper.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()
        console.log(project)
        console.log(this.isComplete.checked)
        console.log(this.priority.value)
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
    })
    return wrapper
}