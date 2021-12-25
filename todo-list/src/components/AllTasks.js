


export default function AllTasks(projects, rerender) {

    const wrapper = document.createElement("div");
    const h1 = document.createElement("h1")
    h1.innerHTML = "All Tasks"
    wrapper.appendChild(h1)
    wrapper.id = "all-tasks";

    const tasks = [];
    Object.keys(projects).forEach(key => tasks.push(...projects[key].tasks));
    
    console.log(tasks)

    return wrapper;

}