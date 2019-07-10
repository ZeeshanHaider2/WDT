const router = require("express").Router({ mergeParams: true });

/*############# CLIENT DATABASE API CALLS #####################*/
//Add a client to the Company.
router.post("/client", (req, res, next) => {});
//Get a list of clients for a specified Company.
router.get("/getCompanyClients", (req, res, next) => {});
//Get a list of Active clients for a specified Company.
router.get("/getCompanyActiveClients", (req, res, next) => {});
//Update specific Client details
router.put("/client/:_id", (req, res, next) => {});
//Delete specific Client.
router.delete("/client/:_id", (req, res, next) => {});
//Add a Project to the Client.
router.post("/clientprojects", (req, res, next) => {});
//Get a list of Projects for a specific Client.
router.get("/getClientProjects", (req, res, next) => {});
//Update specific Project.
router.put("/clientprojects/:_id", (req, res, next) => {});
//Delete specific Project
router.delete("/clientprojects/:_id", (req, res, next) => {});

module.exports = router;
