

export default function Sidebar() {

	const wrapper = document.createElement("div");
	const nav = document.createElement("nav");

	wrapper.id = "sidebar";

	nav.appendChild(SidebarIcon("P"))
	nav.appendChild(SidebarIcon("T"))
	nav.appendChild(SidebarIcon("A"))

	wrapper.appendChild(nav)
	return (wrapper);
}

function SidebarIcon(i) {
	const icon = document.createElement("button")
	icon.className = "sidebar-icon";

	icon.innerHTML = i;

	return (icon);
}