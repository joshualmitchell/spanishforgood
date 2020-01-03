const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/user_services/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/user_services/logout", (req, res) => {
    req.logout(); // attached to the request object by passport that kills the current cookie.
    res.redirect("/");
  });
};
