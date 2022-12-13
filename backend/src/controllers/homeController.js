import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll({ raw: true });
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console(error);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let editCRUD = (req, res) => {
  const id = req.query.id;
  if (id) {
    let userData = CRUDService.getUserInfoById(id);
    return res.send("Found a user");
  } else {
    return res.send("User not found");
  }
};

let displayCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("table.ejs", {
    data,
  });
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  return res.send("post crul from server");
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD,
  postCRUD,
  displayCRUD,
  editCRUD,
};
