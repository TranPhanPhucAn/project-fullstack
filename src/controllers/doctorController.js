import doctorService from "../services/doctorService";
let getTopDoctorHome = async (req, res) => {
  // console.log("limit: ", limit);
  let limit = req.query.limit;
  if (!limit) {
    limit = 10;
  }
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};
let getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctors();
    res.status(200).json(doctors);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let postInforDoctor = async (req, res) => {
  try {
    // console.log(req.body);
    let response = await doctorService.saveDetailInforDoctor(req.body);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getDetailDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let editDetailDoctorById = async (req, res) => {
  try {
    let data = req.body;
    let response = await doctorService.updateDetailDoctorById(data);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let bulkCreateSchedule = async (req, res) => {
  try {
    let infor = await doctorService.bulkCreateSchedule(req.body);
    res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getScheduleByDate = async (req, res) => {
  try {
    let response = await doctorService.getScheduleByDate(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(response);
  } catch {
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getExtraInforDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getExtraInforDoctorById(req.query.doctorId);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getProfileDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getProfileDoctorById(req.query.doctorId);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
let getListPatientForDoctor = async (req, res) => {
  try {
    let data = await doctorService.getListPatientForDoctor(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};
module.exports = {
  getTopDoctorHome,
  getAllDoctors,
  postInforDoctor,
  getDetailDoctorById,
  editDetailDoctorById,
  bulkCreateSchedule,
  getScheduleByDate,
  getExtraInforDoctorById,
  getProfileDoctorById,
  getListPatientForDoctor,
};
