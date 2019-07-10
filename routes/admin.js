const router = require("express").Router({ mergeParams: true });

/*############# SUPERADMIN DATABASE API CALLS #####################*/
//To Login as a SuperAdmin.
router.post("/superAdminLogin", (req, res, next) => {});
//To change SuperAdmin password.
router.put("/superAdmimChangePassword", (req, res, next) => {});
//Logout for SuperAdmin.
router.get("/superAdminLogout", (req, res, next) => {});

module.exports = router;
