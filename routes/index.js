const router = require("express").Router({ mergeParams: true });

const userRoutes = require("./users.js");
const companyRoutes = require("./company.js");
const emailRoutes = require("./email.js");
const superAdminRoutes = require("./superAdmin.js");
const accessGroupRoutes = require("./accessGroups.js");
const companyUserRoutes = require("./companyUser.js");
const userAccountRoutes = require("./userAccount.js");
const workDetailsRoutes = require("./workDetails.js");
const bankDetailsRoutes = require("./bankDetails.js");
const clientRoutes = require("./client.js");
const departmentRoutes = require("./department.js");
const deptCategoryRoutes = require("./deptCategory.js");
const deptSubCategoryRoutes = require("./deptSubCategory.js");
const deptOptionRoutes = require("./deptOption.js");

router.use("/users", userRoutes); // myapi.com/users

router.use("/company", companyRoutes); // myapi.com/company

router.use("/email", emailRoutes); //

router.use("/superAdmin", superAdminRoutes); //

router.use("/accessGroups", accessGroupRoutes);

router.use("/companyUser", companyUserRoutes);

router.use("/userAccount", userAccountRoutes);

router.use("/workDetails", workDetailsRoutes);

router.use("/bankDetails", bankDetailsRoutes);

router.use("/client", clientRoutes);

router.use("/department", departmentRoutes);

router.use("/deptCategory", deptCategoryRoutes);

router.use("/deptSubCategory", deptSubCategoryRoutes);

router.use("/deptOption", deptOptionRoutes);

module.exports = router;
