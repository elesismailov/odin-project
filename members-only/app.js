require('dotenv').config()

const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoDb = process.env.MONGODB_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
db.on("open", () => console.log("Database is ready for interactions..."));

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
  })
);
const Message = mongoose.model(
  "Message",
  new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    // title: {type: String, required: true},
    body: {type: String, required: true},
  })
);

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { 
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return done(null, user)
        } else {
          // passwords do not match!
          return done(null, false, { message: "Incorrect password" })
        }
      })
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

const app = express();
app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log(req.path)
  next()
})

app.get("/", (req, res) => {
  Message.find()
  .exec((err, message_list) => {
    if (req.user) {
      User.find().exec((err, user_list) => {
        res.render('index', {user: req.user, messages: message_list, users: user_list})
      })
    } else {
      res.render("index", { user: req.user, messages: message_list });
    }
  })
});

app.post("/sign-up", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
  // if err, do something
  if (err) { 
    return next(err);
  }

  // otherwise, store hashedPassword in DB
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    }).save(err => {
      if (err) { 
        return next(err);
      }
      res.redirect("/");
    });
  });

});

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
);

app.get("/log-out", (req, res) => {
  console.log(req.user)
  req.logout();
  res.redirect("/");
});

app.get('/new-message', (req, res) => {
  if (!req.user) res.redirect('/');
  else res.render('new-message-form', {user: req.user});
})
app.post('/new-message', (req, res) => {
  console.log(req.body.message)
  console.log(req.user)
  const message = new Message({
    body: req.body.message,
    user: req.user.id
  }).save(err => {
    if (err) { 
      return next(err);
    }
    res.redirect("/");
  });
})
app.listen(3000, () => console.log("app listening on port 3000!"));