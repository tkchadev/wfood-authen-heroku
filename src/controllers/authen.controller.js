const authenServies = require("../services/authen.service");

const postLoginEmp = async (req, res) => {
  const obj = {
    emp_username: req.body.username,
    emp_password: req.body.password,
  };
  const result = await authenServies.loginEmp(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

const postLogoutEmp = async (req, res) => {
  const token = req.headers["authorization"]
  const obj = {
    accesstoken: token
  }
  const result = await authenServies.logoutEmp(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const getProfileEmp = async (req, res) => {
  const obj = {
    accesstoken: req.headers["authorization"]
  };
  const result = await authenServies.getProfileEmp(obj)
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const postLoginRider = async (req, res) => {
  const obj = {
    rider_username: req.body.username,
    rider_password: req.body.password,
  };
  const result = await authenServies.loginRider(obj)
  if (!result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

const postLoginCustomer = async (req, res) => {
  const obj = {
    cus_username: req.body.username,
    cus_password: req.body.password,
  };
  const result = await authenServies.loginCustomer(obj)
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({});
  }
};

module.exports = {
  postLoginEmp,
  postLogoutEmp,
  getProfileEmp,
  postLoginRider,
  postLoginCustomer
};
