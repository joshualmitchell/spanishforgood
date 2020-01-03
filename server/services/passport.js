const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true // if our request runs through any proxy, it's fine, make it secure (https)
    },
    accessToken => {
      console.log(accessToken);
    }
  )
); // creates a new instance of GoogleStrategy
