import db from "../models";
import doctorService from "../services/doctorService";

const getTopDoctorHome = async (req, res) => {
  const limit = req.query.limit;
  if (!limit) limit = 10
  try {
    const response = await doctorService.getTopDoctorHome(limit)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      message: 'Error from server'
    })
  }
}

const getAllDoctors = async (req, res) => {
  try {
    const doctors = doctorService.getAllDoctors()
    return res.status(200).json(doctors)
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server'
    })
  }
}

const postInforDoctor = async (req, res) => {
  try {
    const response = await doctorService.saveDetailInforDoctor(req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from the server'
    })
  }
}

const saveDetailInforDoctor = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.id || inputData.contentHTML || inputData.contentMarkdown) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameters'
        })
      } else {
        await db.Markdown.save({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          doctorId: inputData.doctorId
        })
        resolve({
          errCode: 0,
          errMessage: 'successfully'
        })
      }
    } catch (error) {
      reject(error)
    }
  })
}

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
  saveDetailInforDoctor,
  getDetailDoctorById
};
