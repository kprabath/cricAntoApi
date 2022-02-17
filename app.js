const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

// Middleware configuration
app.use(cors);
app.use("postUploads", express.static("postUploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const urlDB =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWD +
  "@solitarit.yh2j2.mongodb.net/SOLITARIT?retryWrites=true&w=majority";

// database connections
mongoose
  .connect(urlDB, { useNewUrlParser: true }, { useUnifiedTopology: false })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });


// Root Route
app.get("/", (req, res) => {
  res.status(200).send(`Welcome to SOLITAR IT Api`);
});

const productsRoutes = require("./api/routes/shopService/products");
const orderRoute = require("./api/routes/shopService/order");
const registerRoute = require("./api/routes/userService/register");
const loginRoute = require("./api/routes/userService/login");
const loginOAuthRoute = require("./api/routes/userService/googleOAuth/OAuth");
const logoutRoute = require("./api/routes/userService/logout");
const userRoute = require("./api/routes/userService/user");
const tournamentRoute = require("./api/routes/tournamentServices/tournament");
const fixtureRoute = require("./api/routes/tournamentServices/fixtures");
const newPostRoute = require("./api/routes/newsServices/newsFeed");
const responseRoute = require("./api/routes/newsServices/communityResponse");
const managePostsRoute = require("./api/routes/newsServices/communityManagement/managePosts");
const manageMembershipRoute = require("./api/routes/membership/membership");
const donationsRoute = require("./api/routes/donations/donations");

// Routes
app.use("/shop/products", productsRoutes);
app.use("/shop/order", orderRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/login/OAuth", loginOAuthRoute);
app.use("/logout", logoutRoute);
app.use("/user", userRoute);
app.use("/tournament", tournamentRoute);
app.use("/fixtures", fixtureRoute);
app.use("/newpost", newPostRoute);
app.use("/response", responseRoute);
app.use("/managePosts", managePostsRoute);
app.use("/membership", manageMembershipRoute);
app.use("/donations", donationsRoute);

//listening from the server_error
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
