
import Project from "./project-factory.js";

const state = {
	activeTab: 0,
	setTab(tab) {
		this.activeTab = tab;
	},

	addProject(title) {
		this.projects.push(Project(title))
	},
	deleteProject(id) {
		const index = this.projects.indexOf(this.projects.find(p => p.id === id));
		this.projects.splice(index, 1)
	},

	
	projects: [
		Project("Personal"),
		// Project("Second"),
		// Project("Third"),
		// Project("Forth"),
	],
}
state.setTab = state.setTab.bind(state);

let proxy = new Proxy(state.projects, {
	// get : (target, key) => {
	// 	return target[key]
	// },
	set: (target, key, value) => {
		console.log("setting", key, ' to ', value)
		target[key] = value;
		return true
	}
})
state.projects = proxy;

export default state;