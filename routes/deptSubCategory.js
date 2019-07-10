const router = require("express").Router({ mergeParams: true });

/*############# DEPARTMENTSUBCATEGORY DATABASE API CALLS #####################*/
//Add a Departmentsubcategories.
router.post("/departSubCat/:_id", (req, res, next) => {});
//Add a DepartmentSubCategory.
router.post("/departmentSubCategory", (req, res, next) => {});
//Get a list of DepartmentSubCategories.
router.get("/getDepartmentSubCategories/:_id", (req, res, next) => {});
//Get a list of DepartmentSubCategoriesWithOptions.
router.get(
  "/getDepartmentSubCategoriesWithOptions/:_id",
  (req, res, next) => {}
);
//Get a list of DepartmentActiveSubCategoriesWithOptions.
router.get(
  "/getDepartmentActiveSubCategoriesWithOptions/:_id",
  (req, res, next) => {}
);
//Get a list of DepartmentRestCategory by department_category_id.
router.get("/getRestSubCategories/:_id", (req, res, next) => {});
// Update specific Subcategory.
router.put("/subcategory/:_id", (req, res, next) => {});
//Delete  specific DepartmentSubcategory.
router.delete("/departmentSubCategory/:_id", (req, res, next) => {});

module.exports = router;
