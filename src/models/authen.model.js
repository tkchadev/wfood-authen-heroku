const { pgDB } = require("../configs/db.connect");

const findUsernameEmp = async (obj) => {
  sql =
    "SELECT id, emp_username, emp_role, emp_password FROM user_emp WHERE emp_username=${emp_username} AND is_deleted != 99";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        message: `ไม่พบผู้ใช้งานนี้`,
        result: null,
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: null,
    };
    return data;
  }
};

const createTokenEmp = async (obj) => {
  sql = "INSERT INTO accesstoken_emp(${this:name}) VALUES(${this:csv}) RETURNING id";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    }else{
      data = {
        status: false,
        message: `Unsuccess`,
        result: result[0],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: null,
    };
    return data;
  }
};

const removeTokenEmp = async (obj) => {
  sql = 'DELETE FROM accesstoken_emp WHERE ref_emp = ${id}';
  const result = await pgDB.query(sql, obj);
  return;
};

const removeTokenLogoutEmp = async (obj) => {
  sql = "DELETE FROM accesstoken_emp WHERE accesstoken=${accesstoken}";
  const result = await pgDB.query(sql,obj);

  return;
};

const findTokenEmp = async (obj) => {
  sql = "SELECT id,ref_emp FROM accesstoken_emp WHERE accesstoken=${accesstoken}";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        result: null,
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      result: null,
    };
    return data;
  }
};

const selectProfileEmp = async (obj) => {
  sql = "SELECT emp_uuid,emp_role FROM user_emp WHERE id=${id}";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        result: [],
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      result: [],
    };
    return data;
  }
};

// Start Rider Authen
const findUsernameRider = async (obj) => {
  sql =
    "SELECT id, rider_username, rider_password FROM user_rider WHERE rider_username=${rider_username} AND is_deleted != 99";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        message: `ไม่พบผู้ใช้งานนี้`,
        result: [],
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const createTokenRider = async (obj) => {
  sql = "INSERT INTO accesstoken_rider(${this:name}) VALUES(${this:csv}) RETURNING id";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    }else{
      data = {
        status: false,
        message: `Unsuccess`,
        result: result[0],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: null,
    };
    return data;
  }
};

const removeTokenRider = async (obj) => {
  sql = 'DELETE FROM accesstoken_rider WHERE ref_rider = ${id}';
  const result = await pgDB.query(sql, obj);
  return;
};

const findTokenRider = async (obj) => {
  sql = "SELECT id FROM accesstoken_rider WHERE accesstoken=${accesstoken}";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        result: null,
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      result: [],
    };
    return data;
  }
};
// End Rider Authen

// Start Customer Authen
const findUsernameCustomer = async (obj) => {
  sql =
    "SELECT id, cus_username, cus_password FROM user_customer WHERE cus_username=${cus_username} AND is_deleted != 99";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        message: `ไม่พบผู้ใช้งานนี้`,
        result: null,
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: null,
    };
    return data;
  }
};

const removeTokenCustomer = async (obj) => {
  sql = 'DELETE FROM accesstoken_cus WHERE ref_cus = ${id}';
  const result = await pgDB.query(sql, obj);
  return;
};

const createTokenCustomer = async (obj) => {
  sql = "INSERT INTO accesstoken_cus(${this:name}) VALUES(${this:csv}) RETURNING id";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result[0],
      };
    }else{
      data = {
        status: false,
        message: `Unsuccess`,
        result: result[0],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: null,
    };
    return data;
  }
};
// Emd Customer Authen

module.exports = {
  findUsernameEmp,
  createTokenEmp,
  removeTokenEmp,
  removeTokenLogoutEmp,
  findTokenEmp,
  selectProfileEmp,
  findUsernameRider,
  createTokenRider,
  removeTokenRider,
  findTokenRider,
  findUsernameCustomer,
  removeTokenCustomer,
  createTokenCustomer
};
