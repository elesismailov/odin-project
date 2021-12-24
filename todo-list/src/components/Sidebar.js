

export default function Sidebar() {

	const wrapper = document.createElement("div");
	const nav = document.createElement("nav");

	wrapper.id = "sidebar";

	nav.appendChild(SidebarIcon("P", 'Projects'))
	nav.appendChild(SidebarIcon("T", 'Tasks'))
	nav.appendChild(SidebarIcon("#", 'Tags'))

	wrapper.appendChild(nav)
	return (wrapper);
}

function SidebarIcon(i, ii) {
	const icon = document.createElement("button")
	icon.className = "sidebar-icon";

	icon.innerHTML = i;

	icon.appendChild(IconTooltip("💡 " + ii))

	return (icon);
}


function IconTooltip(i) {
	const span = document.createElement('span');

	span.className = "tooltip";
	span.innerHTML = i;

	return span
}