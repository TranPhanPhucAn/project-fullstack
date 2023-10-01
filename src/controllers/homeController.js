// import { render } from "ejs";
import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    // console.log(data);
    // let temp = data.dataValues;
    // console.log(temp);
    return res.render("homepage.ejs", { dataUser: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};
let getCrud = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  return res.send("dfsad");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  // console.log(data);
  return res.render("display-crud.ejs", { dataUser: data });
};
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // console.log("data:", userData);
    return res.render("editCRUD.ejs", { data: userData });
  } else {
    return res.send("User not found");
  }
};
let putCRUD = async (req, res) => {
  // console.log(req.body);
  let message = await CRUDService.updateUser(req.body);
  console.log(message);
  return res.redirect("/get-crud");
};
let deleteCRUD = async (req, res) => {
  await CRUDService.deleteUser(req.query.id);
  return res.redirect("/get-crud");
};
module.exports = {
  getHomePage,
  getCrud,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
