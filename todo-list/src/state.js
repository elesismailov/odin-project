
import Project from "./project-factory.js";

const state = {
	activeTab: 0,
	setTab(tab) {
		this.activeTab = tab;
	},

	addProject(title) {
		this.projects.push(Project(title))
	},
	
	
	projects: [
		Project("First Project"),
		// Project("Second"),
		// Project("Third"),
		// Project("Forth"),
	],
}
state.setTab = state.setTab.bind(state);

export default state;