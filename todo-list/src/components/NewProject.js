
import state from "../state";

export default function NewProject(rerender) {

    const wrapper = document.createElement("div");
    wrapper.id = 'new-project';

    let html = `
        <form>
            <label>
                <input name='title' type="text" placeholder="New Project..." maxlength="25"/>
            </label>
            <button class="plus" type="submit">+</button>
        </form>
    `;
    wrapper.innerHTML = html;


    wrapper.querySelector("form").addEventListener('submit', function(event) {
        event.preventDefault()
        if (this.title.value.trim()) {
            try{state.addProject(this.title.value.trim())}
            catch (err) {console.info('it says', err)}
            this.title.value = '';
            rerender()
            state.saveState()
        }
    })
    
    return wrapper;
}