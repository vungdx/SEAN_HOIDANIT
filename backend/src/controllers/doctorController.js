import doctorService from "../services/doctorService";

const getTopDoctorHome = async (req, res) => {
  const limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    const doctors = await doctorService.getTopDoctorHome(limit);
    return res.status(200).json(doctors);
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = doctorService.getAllDoctors();
    return res.status(200).json(doctors);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

const postInforDoctor = async (req, res) => {
  try {
    const response = await doctorService.saveDetailInforDoctor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

const getDetailDoctorById = async (req, res) => {
  try {
    const infor = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(infor);
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

module.exports = {
  getTopDoctorHome,
  getAllDoctors,
  postInforDoctor,
  getDetailDoctorById,
};
