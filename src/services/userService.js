import db from "../models/index";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
          raw: true,
          // attributes: {
          //   include: ["email", "roleId"],
          // },
          attributes: ["email", "roleId", "password"],
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = `Ok`;
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = `Wrong password or email`;
          }
        } else {
          userData.errData = 2;
          userData.errMessage = `User isn't not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your email isn't exist in system.Try other email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};
// let compareUserPassword = (password) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let hashPassword = await bcrypt.hashSync(password, salt);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
        raw: true,
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { handleUserLogin, checkUserEmail };
