// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./services/passport");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./routes/authRoutes")(app);
require("./routes/fibRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // make sure express serves up production assets like main.js or main.css
  app.use(express.static("client/build"));

  // express serves index.html file if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  console.log("Listening");
});
