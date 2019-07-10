const router = require("express").Router({ mergeParams: true });

/*############# DEPARTMENTOPTION DATABASE API CALLS #####################*/
//Add a DepartmentOPtion & option.
router.post("/departOption/:_id", (req, res, next) => {});
//Add a departmentOption.
router.post("/departmentOption", (req, res, next) => {});
//Get a list of DepartmentOptions.
router.get("/getDepartmentOptions/:_id", (req, res, next) => {});
//Get a list of DepartmentRestOption by departmentsubcategory id.
router.get("/getRestDepartmentOption/:_id", (req, res, next) => {});
// Update specific Option.
router.put("/option/:_id", (req, res, next) => {});
//Delete specific DepartmentOption.
router.delete("/departmentOption/:_id", (req, res, next) => {});

module.exports = router;
