
import ProjectComponent from "./Project.js";
import NewProject from "./NewProject.js";
import { sortByComplete } from "../sort.js";


export default function AllProjects(projects) {

	const wrapper = document.createElement("div");
	const ul = document.createElement("ul");
	const h1 = document.createElement('h1');

	wrapper.id = "all-projects";
	
	h1.innerHTML = "All Projects";

	function renderUl() {
		wrapper.innerHTML = '';
		ul.innerHTML = '';

		wrapper.appendChild(h1)
		wrapper.appendChild(NewProject(renderUl))

		projects.forEach( pr => {
			const li = document.createElement("li");
			const project = document.createElement("div");
			const title = document.createElement("h2");
			const taskUl = document.createElement("ul");
			const tasks = sortByComplete(pr.tasks)[0].slice(0, 8);
			
			project.onclick = ()=> {
				wrapper.innerHTML = '';
				wrapper.appendChild(ProjectComponent(pr, renderUl))
			}

			project.className = "project";
			title.innerHTML = pr.title;
			project.appendChild(title);

			if (tasks.length === 0) {
				const msg = document.createElement('h3')
				msg.className = "msg"
				msg.textContent = "No Tasks Here!";
				project.appendChild(msg)
			} else {
				tasks.forEach(task => {
					const title = document.createElement("p");
					const taskLi = document.createElement("li");
					title.innerHTML = task.title;
					taskLi.appendChild(title)
					taskUl.appendChild(taskLi);
				})
				project.appendChild(taskUl);
			}


			li.appendChild(project)
			ul.appendChild(li)
			wrapper.appendChild(ul);
		})
	}
	renderUl()
	wrapper.render = renderUl;
	return wrapper;

}