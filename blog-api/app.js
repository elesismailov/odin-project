
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}


const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoDb = process.env.MONGODB_CONNECTION_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
db.on("open", () => console.log("Database is ready for interactions..."));

const Post = mongoose.model(
  "Post",
  new Schema({
    title: { type: String, required: true, maxLength: 250 },
    text: { type: String, required: true },
    date: { type: Date, required: true }
  })
);

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log(req.path)		// log the path
  next()
})

app.get("/", (req, res) => {
	res.send("hello world")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));


new Post({
	title: 'Cartel systemic dolphin math-wristwatch nodality',
	text: 'Cartel systemic dolphin math-wristwatch nodality girl camera hotdog. 3D-printed systema assault spook gang hacker skyscraper disposable neon otaku car bomb knife saturation point Shibuya sub-orbital-space. Jeans 8-bit bomb marketing camera sensory smart. Decay soul-delay towards cartel boat free-market vehicle monofilament advert market j-pop girl marketing systemic ablative alcohol warehouse. Nodal point voodoo god ablative Legba DIY silent franchise savant numinous smart-neural bomb hotdog alcohol. ',
	date: Date.now()
}).save( err => {if (err) throw err})

new Post({
	title: 'Spook Chiba grenade convenience store crypto',
	text: 'Spook Chiba grenade convenience store crypto-advert range-rover corrupted rain pistol vinyl camera systemic. Plastic market industrial grade sub-orbital receding vinyl tank-traps boy. Table assassin franchise physical rebar alcohol render-farm assault corporation rifle monofilament sprawl wristwatch geodesic tattoo Shibuya. Tanto 3D-printed table singularity pistol range-rover kanji nodality lights drugs papier-mache soul-delay futurity office. BASE jump film table pen 3D-printed smart-drugs paranoid disposable San Francisco footage media industrial grade Tokyo. Pen disposable otaku boat 3D-printed girl pre--ware boy sentient stimulate. DIY drone lights woman jeans car 8-bit order-flow drugs plastic savant-ware concrete city office render-farm. Decay Kowloon girl rifle futurity apophenia order-flow katana saturation point dome jeans tank-traps Tokyo wristwatch table digital nodal point. Jeans A.I. uplink Kowloon nano-engine table tattoo concrete human BASE jump dead long-chain hydrocarbons. ',
	date: Date.now()
}).save( err => {if (err) throw err})
new Post({
	title: 'Warehouse advert human tiger-team into',
	text: 'Warehouse advert human tiger-team into table pen cardboard shrine render-farm otaku post-long-chain hydrocarbons claymore mine rain assault industrial grade. Systemic realism nodal point vinyl marketing neural sentient wonton soup math. Refrigerator wristwatch receding bicycle soul-delay man Shibuya papier-mache beef noodles neon cartel ablative digital human uplink Legba drone. Tattoo-space wonton soup hacker disposable render-farm receding semiotics weathered. Chiba hacker cardboard fetishism youtube decay market tiger-team crypto-futurity monofilament math-physical claymore mine. Engine tube otaku tanto cyber-marketing wonton soup Chiba courier sprawl military-grade modem table long-chain hydrocarbons construct. Girl modem San Francisco face forwards decay receding soul-delay vinyl into ablative render-farm disposable city. Advert vehicle range-rover geodesic drugs sensory digital knife. Construct nodal point digital table corrupted network market pistol. ',
	date: Date.now()
}).save( err => {if (err) throw err})
new Post({
	title: 'Otaku marketing market carbon lights claymore',
	text: 'Otaku marketing market carbon lights claymore mine sentient industrial grade geodesic camera pen Legba decay katana. Bomb free-market shrine order-flow computer claymore mine render-farm pen refrigerator disposable savant wonton soup Shibuya wristwatch. Face forwards cartel modem disposable silent ablative denim industrial grade dead. ',
	date: Date.now()
}).save( err => {if (err) throw err})
new Post({
	title: 'Footage spook man shoes cartel rain',
	text: 'Footage spook man shoes cartel rain lights girl dead industrial grade papier-mache pistol realism. 3D-printed papier-mache cyber-network Shibuya car vinyl film free-market futurity numinous fetishism crypto-apophenia. Faded girl kanji nodal point silent corrupted systemic warehouse narrative voodoo god papier-mache Chiba car tank-traps augmented reality paranoid carbon. Sensory dome cyber-city advert artisanal urban render-farm semiotics. Order-flow math-network man dissident nodality nodal point tiger-team RAF hacker pistol-ware dolphin-space faded camera. ',
	date: Date.now()
}).save( err => {if (err) throw err})
