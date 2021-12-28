
import debouncer from "./debouncer.js";
import Project from "./project-factory.js";
import Todo from "./todo-factory.js";

const state = {
	activeTab: 0,
	setTab(tab) {
		this.activeTab = tab;
	},

	addProject(title) {
		if (!this.projects.every(p => p.title !== title)) throw new Error()
		this.projects.push(Project(title))
	},
	deleteProject(id) {
		const index = this.projects.indexOf(this.projects.find(p => p.id === id));
		this.projects.splice(index, 1)
	},

	saveState() {
		localStorage.setItem('state', JSON.stringify(this))
	},
	retrieveState() {
		// console.log(localStorage.state)
		if (!localStorage.state) {
			localStorage.setItem('state', JSON.stringify(this))
			return
		}
		let data = JSON.parse(localStorage.state);
		
		let projects = [];
		data.projects.forEach(p => {		// p - is just a shell of data, no methods
			let tasks = [];
			p.tasks.forEach(t => {		// t - is just a shell of data, no methods
				tasks.push(
                    Todo(
                        t.title,
                        new Date(t.date),
                        t.priority,
                        t.isComplete,
                        t.project,
                        t.description,
                        new Date(t.dateDone),
                        t.subtasks,
                        t.id
                    )
                );
			})
			projects.push(Project(p.title, tasks, p.id))
		})
		Object.defineProperty(this, 'activeTab', {'value': data.activeTab})
		Object.defineProperty(this, 'projects', {'value': projects})

	},
	projects: [
		Project("Personal"),
		// Project("Second"),
		// Project("Third"),
		// Project("Forth"),
	],
}
// state.setTab = state.setTab.bind(state);

state.retrieveState()

state.saveState = state.saveState.bind(state)
state.saveState = debouncer(state.saveState, 400)

export default state;