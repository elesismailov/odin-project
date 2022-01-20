
const EventEmitter = require('events')
const emitter = new EventEmitter()



emitter.on("emited", () => {
	console.log("Event was emited")
})


emitter.emit("emited")