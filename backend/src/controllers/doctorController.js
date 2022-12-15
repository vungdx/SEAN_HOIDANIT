import userService from "../services/userService";

const getDetailDoctorById = async (req, res)=> {
  try {
    const infor = await doctorService.getDetailDoctorById(req.query.id)
    return res.status(200).json(infor)
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server'
    })
  }
}

module.exports = {
  getTopDoctorHome,
  getAllDoctors,
  postInforDoctor,
  getDetailDoctorById
};
