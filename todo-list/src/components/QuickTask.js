

export default function QuickTask() {

    const wrapper = document.createElement("div");
    wrapper.id = 'quick-task';

    wrapper.innerHTML = `
        <form>
			<span class="priority"></span>
			<span class="plus">+</span>
            <input type="text" placeholder="New Task..."/>
			<input type="checkbox" ${0 ? "checked" : ""}>
            <select>
                <option>None</option>
                <option>!</option>
                <option>!!</option>
                <option selected>!!!</option>
            </select>
        </form>
    `;
    return wrapper
}