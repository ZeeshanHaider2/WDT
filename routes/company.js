const router = require("express").Router({ mergeParams: true });

//router.get('/profile', (req, res, next) => {
//res.send();
//});

/*############# COMPANY DATABASE API CALLS #####################*/
//To Register a Company.
router.post("/company", (req, res, next) => {});
//Get a list of Companies.
router.get("/getAllCompanies", (req, res, next) => {});
//Update specific Company.
router.put("/company/:_id", (req, res, next) => {});
//Delete specific Company
router.delete("/company/:_id", (req, res, next) => {});
//Company Change
router.post("/companyChange", (req, res, next) => {});

module.exports = router;
