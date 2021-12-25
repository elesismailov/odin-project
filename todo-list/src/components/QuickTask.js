

export default function QuickTask() {

    const wrapper = document.createElement("div");
    wrapper.id = 'quick-task';

    wrapper.innerHTML = `
        <form>
			<span class="priority priority-new"></span>
			<input type="checkbox" ${0 ? "checked" : ""}>
            <input type="text" placeholder="New Task..."/>
            <select>
                <option>None</option>
                <option>!</option>
                <option>!!</option>
                <option>!!!</option>
            </select>
        </form>
    `;
    return wrapper
}