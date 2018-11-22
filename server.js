const express = require("express");
const passport =require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bodyParser = require("body-parser");

const app = express();

passport.use(new GoogleStrategy());

//client id 432524600262-h8tivped6ak4sc9i62ohpgjd209u5jfl.apps.googleusercontent.com
//client secret VDCFXAAl6Z6I4omFaw6JsiY_


const PORT = process.env.PORT || 5000;
app.listen(PORT);
