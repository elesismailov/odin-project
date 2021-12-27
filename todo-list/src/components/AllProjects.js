
import ProjectComponent from "./Project.js";
import NewProject from "./NewProject.js";


export default function AllProjects(projects) {

	const wrapper = document.createElement("div");
	const ul = document.createElement("ul");
	const h1 = document.createElement('h1');

	wrapper.id = "all-projects";
	
	h1.innerHTML = "All Projects";
	wrapper.appendChild(h1)

    wrapper.appendChild(NewProject(renderUl))


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
		})
	}
	renderUl()
	wrapper.appendChild(ul);
	wrapper.render = renderUl;
	return wrapper;

}