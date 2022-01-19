const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const passport = require("passport");
const bodyParser = require("body-parser");
const User = require("./db/models/user");
const Product = require("./db/models/product");


const port = process.env.PORT || 3366;

const staticpath = path.join(__dirname, "../public");
const temppath = path.join(__dirname, "../templates/views");
const partpath = path.join(__dirname, "../templates/partials");
const Brand = require("./db/models/product");

app.use(
  "/jq",
  express.static(path.join(__dirname, "../node_modules/jquery/dist"))
);

app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);

app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", temppath);
hbs.registerPartials(partpath);

app.get("/", async(req, res) => {
  const item=await Brand.find().lean().exec();
  return res.render("index",{item:item});
  //res.render("index",{user:"Seema",login:false});
});

app.get("/brands/:id", async(req, res) => {
  const item=await Brand.findById(req.params.id);
  return res.status(200).send({item});
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.get("/order", (req, res) => {
  res.render("order");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/brands", async (req, res) => {
  const item=await Brand.find().lean().exec();
  return res.render("brands",{item:item});
});

app.post("/index", async (req, res) => {
  try {
    const pass=req.body.password;
    const cpass=req.body.confirmpassword;
    if(pass===cpass)
    {
    const usetData = new User(req.body);
    await usetData.save();
    return res.status(201).render("index");
    }
    else{
     return res.render("account");
    }
  } catch (err) {
   return res.render("account");
  }
});

app.get("/brand", async (req, res) => {
  try{
    const item=await Brand.find().lean().exec();
    return res.status(200).send({item});
    }catch(err){
        return res.status(400).send(err.message);
    }
});

app.get("/login", async (req, res) => {
  try{
  const data=await User.find().lean().exec();
  return res.send(data);
}catch(err){
  return res.status(400).send(err.message);
}
});


app.listen(port, () => {
  console.log(`running on port ${port}`);
});