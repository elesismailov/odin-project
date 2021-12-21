

export default function ReservePage() {

	const wrapper = document.createElement("section");
	const form = document.createElement("form");
	const p = document.createElement("p");
	const email = document.createElement("input");
	const number = document.createElement("input");
	const submit = document.createElement("button");

	wrapper.id = "reserve";

	email.placeholder = "example@email.com"
	email.type = "email";
	email.name = "email";

	number.placeholder = "+123 456 789";
	number.type = "text";
	number.name = "number";

	p.innerHTML = "Please fill out the form so we can contact you."

	submit.type = "submit";
	submit.innerHTML = "Reserve"

	form.appendChild(p);
	form.appendChild(email);
	form.appendChild(number);
	form.appendChild(submit);

	wrapper.appendChild(form)
	return wrapper;
}