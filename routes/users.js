const router = require("express").Router({ mergeParams: true });

//router.get('/profile', (req, res, next) =>{
//res.send();
//});

/*############# USER DATABASE API CALLS #####################*/
//Get User login.
router.post("/login", (req, res, next) => {});
// User login through google plus.
router.get("/loginGoogle/:gtoken", (req, res, next) => {});
//User Logout.
router.get("/userLogout", (req, res, next) => {
  res.send("Testing hellollllll");
});
//To change User password.
router.put("/changepwd/:email", (req, res, next) => {});
//Function to upload user profic picture.
router.post("/users/:_id", (req, res, next) => {});

//Function to upload logo.
router.post("/logo/:_id", (req, res, next) => {});

module.exports = router;
