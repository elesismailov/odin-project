
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";


document.body.innerHTML = "<div id='root'></div>"


const projects = {
	personal: {
		title: "Personal",
		tasks: [],
	},
};


console.log(Project().addTask())


// console.log(Todo(1, 2, 3, {g:1}, [], {}))