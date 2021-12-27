import ProjectComponent from "./Project.js";


export default function ProjectsComponent(projects) {

	const wrapper = document.createElement("div");
	const ul = document.createElement("ul");
	const h1 = document.createElement('h1');

	wrapper.id = "all-projects";
	h1.innerHTML = "All Projects";
	wrapper.appendChild(h1)

	// wrapper.appendChild(ProjectComponent(projects[keys[0]], renderUl))
	// document.body.style.overflow = "hidden";

	function renderUl() {
		ul.innerHTML = '';
		projects.forEach( pr => {
			const li = document.createElement("li");
			const project = document.createElement("div");
			const title = document.createElement("h2");
			const taskUl = document.createElement("ul");
			const tasks = pr.tasks.slice(0,8);
			
			project.onclick = ()=> {
				wrapper.appendChild(ProjectComponent(pr, renderUl))
				document.body.style.overflow = "hidden";
			}

			tasks.forEach(task => {
				const title = document.createElement("p");
				const taskLi = document.createElement("li");
				title.innerHTML = task.title;
				taskLi.appendChild(title)
				taskUl.appendChild(taskLi);
			})

			project.className = "project";
			title.innerHTML = pr.title;
			project.appendChild(title);
			project.appendChild(taskUl);

			li.appendChild(project)
			ul.appendChild(li)
		})
	}
	renderUl()
	wrapper.appendChild(ul);
	return wrapper;

}

function Project() {

}
