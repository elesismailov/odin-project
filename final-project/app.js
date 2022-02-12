
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}


const express = require("express");
const app = express();


app.use(function(req, res, next) {
  console.log(req.path)		// log the path
  next()
})

app.get("/", (req, res) => {
	res.send("hello world")
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
