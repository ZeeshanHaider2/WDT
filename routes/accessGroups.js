const router = require("express").Router({ mergeParams: true });

/*############# ACCESS_GROUPS DATABASE API CALLS #####################*/
//Add an Accessgroup to the Company.
router.post("/accessgroups", (req, res, next) => {});
//Get a list of Accessgroups for a specific Company.
router.get("/getAccessGroups", (req, res, next) => {});
//Update specific Accessgroup.
router.put("/accessgroups/:_id", (req, res, next) => {});
//Delete specific Accessgroup.
router.delete("/accessgroups/:_id", (req, res, next) => {});
// Update specific viewaccessgroup.
router.put("/viewAccess/:_id", (req, res, next) => {});

module.exports = router;
