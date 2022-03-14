const authenModel = require("../models/authen.model");
const bcrypt = require("bcryptjs");
const jwt = require("../helper/jwt");

// const create = async (obj) => await regsystemModel.createSuperAdminModel(obj);
const loginEmp = async (obj) => {
  let res = await authenModel.findUsernameEmp(obj);
  if (!res.status) {
    return res;
  }
  if (await bcrypt.compare(obj.emp_password, res.result.emp_password)) {
    const payload = {
      sub: res.result.emp_username,
      role: res.result.emp_role,
    };

    await authenModel.removeTokenEmp(res.result);
    const token = await jwt.generateToken(payload);
    let objToken = {
      accesstoken: token,
      ref_emp: res.result.id,
    };
    const resToken = await authenModel.createTokenEmp(objToken);
    if (resToken.status) {
      let data = {
        status: true,
        message: `Login Success`,
        result: token,
      };
      return data;
    } else {
      let data = {
        status: false,
        message: `Error Create Token`,
        result: [],
      };
      return data;
    }
  } else {
    let data = {
      status: false,
      message: `รหัสผ่านไม่ถูกต้อง`,
      result: [],
    };
    return data;
  }
};
const logoutEmp = async (obj) => {
  obj.accesstoken = obj.accesstoken && obj.accesstoken.split(" ")[1];
  await authenModel.removeTokenLogoutEmp(obj);
  let data = {
    status: true,
    message: `Logout Success`,
    result: [],
  };
  return data
};

const getProfileEmp = async (obj) => {
  obj.accesstoken = obj.accesstoken && obj.accesstoken.split(" ")[1];
  let res = await authenModel.findTokenEmp(obj);
  if (!res.status) {
    return res;
  }

  let objEmp = {
    id: res.result.ref_emp,
  };
  let resToken = await authenModel.selectProfileEmp(objEmp);

  if (resToken.status) {
    let data = {
      status: true,
      message: `Get Profile Success`,
      result: resToken.result,
    };
    return data;
  } else {
    let data = {
      status: false,
      message: `Error Get Profile`,
      result: [],
    };
    return data;
  }
};

const loginRider = async (obj) => {
  let res = await authenModel.findUsernameRider(obj);
  if (!res.status) {
    return res;
  }
  if (await bcrypt.compare(obj.rider_password, res.result.rider_password)) {
    const payload = {
      sub: res.result.rider_username,
    };
    await authenModel.removeTokenRider(res.result);
    const token = await jwt.generateToken(payload);
    let objToken = {
      accesstoken: token,
      ref_rider: res.result.id,
    };
    const resToken = await authenModel.createTokenRider(objToken);
    if (resToken.status) {
      let data = {
        status: true,
        message: `Login Success`,
        result: token,
      };
      return data;
    } else {
      let data = {
        status: false,
        message: `Error Create Token`,
        result: [],
      };
      return data;
    }
  } else {
    let data = {
      status: false,
      message: `รหัสผ่านไม่ถูกต้อง`,
      result: [],
    };
    return data;
  }
};

const loginCustomer = async (obj) => {
  let res = await authenModel.findUsernameCustomer(obj)
  if (!res.status) {
    return res;
  }
  if (await bcrypt.compare(obj.cus_password, res.result.cus_password)) {
    const payload = {
      sub: res.result.cus_username,
    };

    await authenModel.removeTokenCustomer(res.result);
    const token = await jwt.generateToken(payload);
    let objToken = {
      accesstoken: token,
      ref_cus: res.result.id,
    };
    const resToken = await authenModel.createTokenCustomer(objToken);
    if (resToken.status) {
      let data = {
        status: true,
        message: `Login Success`,
        result: token,
      };
      return data;
    } else {
      let data = {
        status: false,
        message: `Error Create Token`,
        result: [],
      };
      return data;
    }
  } else {
    let data = {
      status: false,
      message: `รหัสผ่านไม่ถูกต้อง`,
      result: [],
    };
    return data;
  }
};

module.exports = {
  loginEmp,
  logoutEmp,
  getProfileEmp,
  loginRider,
  loginCustomer
  
};
