const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')

//uri connection
const uri =
  "mongodb+srv://pixan99947:KXomEGdnJhJ9nVng@cluster0.lzk31.mongodb.net/";  
const dbname = "ecommerce";


// mongoose status connected to database
mongoose
  .connect(uri, { dbName: dbname })
  .then(async() => {
    console.log("mongoDB connected");    
  })
  .catch((err) => {
    console.log(err.message);
  });

// mongoose.connection.on("connected", () => {
//   console.log("mongoose connected to DB");
//   ProductCategory.find()
// });

mongoose.connection.on("error", () => {
  console.log(error.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose connection got disconnected");
});

//initializing express app
const app = express();
app.use(cors())

//initialize sever
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

//importing schema model
// const ProductCategory = require("./models");
// const SignUp = require("./SignupModel");pm 

//parsing the data when being communicated with express to mongoDB
const bodyParser = require("body-parser");
const SignUp = require("./model/SignUpModels");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
//adding user to Ecommerce DB

// check qs ,urlencoded,body  in request
app.post("/user", (request, response) => {
  email = request.body.email;
  password = request.body.password;
  displayName = request.body.displayName;
  //constructor based Schema
  let newSignUp = new SignUp({
    email: email,
    password: password,
    displayName : displayName
  });
  newSignUp
    .save()
    .then((user) => {
      console.log("user: ",user)
      response.send(user);
    })
    .catch((err) => console.log(err));
});

app.post("/signin", async (request, response) => {
  try {
    const {email,password} = request.body;
    console.log("body :",request.body);
    const user = await SignUp.findOne({email,password});
    console.log("user: ",user);
    response.send(user);
  } catch (err) {
    console.log(err);
    response
      .status(500)
      .json({ error: "An error occurred while fetching categories." });
  }
});


app.get("/shop", async (request, response) => {
  try {
    const categories = await ProductCategory.find();
    response.json(categories);
  } catch (err) {
    console.log(err);
    response
      .status(500)
      .json({ error: "An error occurred while fetching categories." });
  }
});

app.get("/product", async (request, response) => {
  try {
    const products = await product.find();
    response.send(products);
  } catch (err) {
    console.log(err);
    response
      .status(500)
      .json({ error: "An error occurred while fetching categories." });
  }
});



//nodejs process for running ot to get exit
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

//mongoose is interface between nodejs and mongo DB Mongo DB is unstructured
//nodejs completely asynchronous (for machine calculation)
//express for server communication from nodejs (Virtual machine)
