
import Project from "./project-factory.js";

const state = {
	activeTab: 1,
	setTab(tab) {
		this.activeTab = tab;
	},

	projects: [
		Project("First Project"),
		Project("Second"),
		Project("Third"),
		Project("Forth"),
	],
}
state.setTab = state.setTab.bind(state);

export default state;