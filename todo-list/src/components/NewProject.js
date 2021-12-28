
import state from "../state";

export default function NewProject(rerender) {

    const wrapper = document.createElement("div");
    wrapper.id = 'new-project';

    let html = `
        <form>
            <label>
                <span class="plus">+</span>
                <input name='title' type="text" placeholder="New Project..." maxlength="25"/>
            </label>
            <button type="submit">Add</button>
        </form>
    `;
    wrapper.innerHTML = html;


    wrapper.querySelector("form").addEventListener('submit', function(event) {
        event.preventDefault()
        if (this.title.value.trim()) {
            try{state.addProject(this.title.value.trim())}
            catch (err) {console.log('it says', err)}
            this.title.value = '';
            rerender()
            state.saveState()
        }
    })
    
    return wrapper;
}