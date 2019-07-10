const router = require("express").Router({ mergeParams: true });

/*############# BANKDETAILS DATABASE API CALLS #####################*/
//Add BankDetails for a specific User.
router.post("/bankDetails", (req, res, next) => {});
//Get specific User ContactDetails.
router.get("/getUserActvitydetails/:id", (req, res, next) => {});

module.exports = router;
