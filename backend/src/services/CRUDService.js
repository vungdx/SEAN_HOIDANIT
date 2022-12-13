import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1",
        roleId: data.roleId,
      });
      resolve("Create User successfully");
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll();
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

let getUserInfoById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = db.User.findOne({ where: { id: id }, raw: true });
      if (user) {
        resolve(user);
      } else {
        resolve({});
      }
    } catch (error) {
      reject(error);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hassPassword = await bcrypt.hashSync(password, salt);
      resolve(hassPassword);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserInfoById,
};
