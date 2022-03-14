const router = require("express").Router();
const authenController = require("../controllers/authen.controller");
const jwt = require("../helper/jwt");

router.post("/emp/login", authenController.postLoginEmp);
router.get("/emp/logout", authenController.postLogoutEmp);
// for Nuxt Login
router.get("/emp/profile", jwt.verifyToken, authenController.getProfileEmp);

router.post("/rider/login", authenController.postLoginRider);

router.post("/customer/login", authenController.postLoginCustomer);

module.exports = router;
