const router = require("express").Router({ mergeParams: true });

/*############# DEPARTMENT DATABASE API CALLS #####################*/
//Add a Department to the Company.
router.post("/department", (req, res, next) => {});
//Get a list of Departments for a specified Company.
router.get("/getCompanyDepartments", (req, res, next) => {});
//Get a list of Active Departments for a specified Company.
router.get("/getCompanyActiveDepartments", (req, res, next) => {});
//Get active departmentsby companyuser id
router.get("/getActiveDepartmentByCompanyUser/:_id", (req, res, next) => {});
//Update specific Department.
router.put("/department/:_id", (req, res, next) => {});
//Delete specific Departments
router.delete("/department/:_id", (req, res, next) => {});

module.exports = router;
