

export default function NewProject() {

    const wrapper = document.createElement("div");
    wrapper.id = 'new-project';

    let html = `
        <form>
            <label>
                <span class="plus">+</span>
                <input name='title' type="text" placeholder="New Project..."/>
            </label>
            <button type="submit">Add</button>
        </form>
    `;
    wrapper.innerHTML = html;

    
    return wrapper;
}