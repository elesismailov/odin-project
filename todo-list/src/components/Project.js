export default function ProjectComponent(project) {
    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const backBtn = document.createElement("button");

    backBtn.innerHTML = "<";
    backBtn.className = "back";
    wrapper.appendChild(backBtn);

    backBtn.onclick = () => {
        document.body.style.overflow = "auto";
        wrapper.remove();
    };

    h1.innerHTML = project.title;

    wrapper.appendChild(h1);
    wrapper.id = "project-page";

    function renderUl() {
        ul.innerHTML = "";
        if (!project.tasks.length) {
            let msg = document.createElement("h2");
            msg.innerHTML = "No tasks yet!";
            wrapper.appendChild(msg);
        } else {
            wrapper.appendChild(ul);
            const allTasks = [];
            project.tasks.forEach((t) => {
                allTasks.push(t)
                ul.appendChild(task(t, renderUl));
            });
            // let done = sortByComplete(allTasks)[1]
            // let undone = sortByComplete(allTasks)[0]
            // console.log(sortByDate(undone))
        }
    }
    renderUl()

    return wrapper;
}

function task(t, rerender) {
    const li = document.createElement("li");
    li.innerHTML = `
		<div class='task'>
			<span class="priority priority-${t.priority}"></span>
			<input type="checkbox" ${t.isComplete ? "checked" : ""}>
			<p class="task-title ${t.isComplete ? "line-through" : ""}">${t.title}</p>
			<button class="edit-task"></button>
			<button class="delete-task"></button>
		</div>
	`;
    li.querySelector("input").addEventListener("change", function(event) {
        t.markComplete(this.checked)
        rerender()
    })
    return li;
}


function sortByComplete(arr) {
    let arr1 = arr.filter(task => !task.isComplete)
    let arr2 = arr.filter(task => task.isComplete)
    return [arr1, arr2]
}

function sortByDate(arr) {
    return arr.sort((a,b) => a.date.getTime() - b.date.getTime())
}