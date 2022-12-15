import db from "../models/index";

const getTopDoctorHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doctors = await db.User.findAll({
        where: {roleId: 'R2'},
        limit: limitInput,
        order: [['createdAt', 'DESC']],
        attributes: {
          exclude: ['password', 'image']
        },
        include: [
          { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi']},
          { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi']}
        ],
        raw: true,
        nest: true
      })
      resolve({
        errCode: 0,
        data: doctors
      })
    } catch (error) {
      reject(error)
    }
  })
} 

const getAllDoctors = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doctors = await db.User.findAll({
        where: { roleId: 'R2' }, 
        attributes: {
          exclude: ['password', 'image']
        }
      })
      resolve({
        errCode: 0,
        data: doctors
      });
    } catch (error) {
      reject(error);
    }
  });
};

const postInforDoctor = () => {
  return new Promise(async (resolve, reject) => {
    try {
      
    } catch (error) {
      
    }
  })
}

const getDetailDoctorById =  (idInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!idInput) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameters'
        })
      } else {
        const data = await db.User.findOne({
          where: {
            id: idInput
          }, 
          attributes: {
            exclude: ['password', 'image']
          },
          include: [
            { mode: db.Markdown, attributes: ['description', 'contentHTML', 'contentMarkdown'] },
            {model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi']}
          ], 
          raw: true,
          nest: true
        })
        resolve({
          errCode: 0,
          data
        })
      }
    } catch (error) {
      reject(e)
    }
  })
}

module.exports = {
  getTopDoctorHome,
  getAllDoctors,
  postInforDoctor,
  saveDetailInforDoctor,
  getDetailDoctorById
};
