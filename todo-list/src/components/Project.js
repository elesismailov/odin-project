


export default function ProjectComponent(project) {

	const wrapper = document.createElement("div");
	const h1 = document.createElement('h1');
	const ul = document.createElement('ul');
	const backBtn = document.createElement('button');

	backBtn.innerHTML = "<";
	backBtn.className = "back"
	wrapper.appendChild(backBtn);

	backBtn.onclick = () => wrapper.remove();

	h1.innerHTML = project.title

	wrapper.appendChild(h1)
	wrapper.appendChild(ul)


	project.tasks.forEach(t => {
		ul.appendChild(task(t))
	})

	wrapper.id = 'project-page';

	return wrapper;
}

function task(t) {
	const li = document.createElement('li')
	li.innerHTML = `
		<div class='task'>
			<span class="priority priority-${t.priority}"></span>
			<input type="checkbox" ${t.isComplete ? 'checked':""}>
			<p class="task-title ${t.isComplete ? 'line-through':""}">${t.title}</p>
			<button class="edit-task"></button>
			<button class="delete-task"></button>
		</div>
	`;

	return li
}