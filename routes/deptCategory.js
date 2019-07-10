const router = require("express").Router({ mergeParams: true });

/*############# DEPARTMENTCATEGORY DATABASE API CALLS #####################*/
//Add DepartmentCatgeory and category.
router.post("/departCat", (req, res, next) => {});
//Add a Departmentcategory.
router.post("/departmentCategory", (req, res, next) => {});
//Get a list of DepartmentCategories.
router.get("/getDepartmentCategories/:_id", (req, res, next) => {});
//Get a list of DepartmentRestCategory.
router.get("/getRestCategories/:_id", (req, res, next) => {});
// Update specific Departmentcategory.
router.put("/departmentCategory/:_id", (req, res, next) => {});
//Delete specific Departmentcategory.
router.delete("/departmentCategory/:_id", (req, res, next) => {});

module.exports = router;
