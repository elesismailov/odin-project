
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";

document.body.style.background = "rgb(163, 0, 255)";
document.body.innerHTML = "<div id='root'></div>"


const projects = {
	personal: Project("personal", [1,2,3]),
	perso2nal: Project("personal", [1,2,3]),
	pe1rsonal: Project("personal", [1,2,3]),
	perso3nal: Project("personal", [1,2,3]),
};


// console.log(Project())
// console.log(projects)
// console.table(projects)
console.log()

console.log(Todo())