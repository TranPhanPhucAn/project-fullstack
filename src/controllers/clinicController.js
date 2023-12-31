import clinincService from "../services/clinincService";
let createClinic = async (req, res) => {
  try {
    let data = await clinincService.createClinic(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getAllClinic = async (req, res) => {
  try {
    let data = await clinincService.getAllClinic();
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getDetailClinicById = async (req, res) => {
  try {
    let data = await clinincService.getDetailClinicById(req.query.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
module.exports = {
  createClinic,
  getAllClinic,
  getDetailClinicById,
};
