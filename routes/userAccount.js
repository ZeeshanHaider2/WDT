const router = require("express").Router({ mergeParams: true });

/*############# USER ACCOUNT DATABASE API CALLS #####################*/
//Add ContactDetails for a specific User.
router.post("/details", (req, res, next) => {});

//Get specific User ContactDetails.
router.get("/getDetails", (req, res, next) => {});
//Get Position by CompanyUser.
router.get("/getuserPosition", (req, res, next) => {});

module.exports = router;
