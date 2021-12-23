

export default function ProjectsComponent(projects) {

	const wrapper = document.createElement("div");
	const ul = document.createElement("ul")

	const keys = Object.keys(projects);

	wrapper.id = "all-projects";

	keys.forEach( key => {
		const li = document.createElement("li");
		const project = document.createElement("div");
		const title = document.createElement("h2");

		project.className = "project";
		title.innerHTML = projects[key].title;
		console.log(projects[key])
		project.appendChild(title);
		li.appendChild(project)
		ul.appendChild(li)
	})
	wrapper.appendChild(ul);
	return wrapper;

}