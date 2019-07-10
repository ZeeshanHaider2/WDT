const router = require("express").Router({ mergeParams: true });

/*############# COMPANYUSER DATABASE API CALLS #####################*/
//Add a companyUser to the Company.
router.post("/addCompanyUser", (req, res, next) => {});
//Get a list of Companies for a specific User.
router.get("/getCompanyUser/:_id", (req, res, next) => {});
//Update specific CompanyUser.
router.put("/companyUser/:_id", (req, res, next) => {});
//To set Company user inactive
router.put("/setToDeactive/:_id", (req, res, next) => {});

// Active isOwner
router.put("/isOwnerActive/:_id/:company_id", (req, res, next) => {});
//Delete specific CompanyUser
router.delete("/companyUser/:_id", (req, res, next) => {});
//verifyEmail
router.get("/verify-email", (req, res, next) => {});
// Update specific User.
router.put("/users/:_id", (req, res, next) => {});

module.exports = router;
