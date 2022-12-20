import db from "../models/index";

const getTopDoctorHome = (limitInput) => {
  console.log("limir", limitInput);
  return new Promise(async (resolve, reject) => {
    try {
      const doctors = await db.User.findAll({
        where: { roleId: "R2" },
        limit: +limitInput,
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password", "image"],
        },
        // include: [
        //   {
        //     model: db.Allcode,
        //     as: "positionData",
        //     attributes: ["valueEn", "valueVi"],
        //   },
        //   {
        //     model: db.Allcode,
        //     as: "genderData",
        //     attributes: ["valueEn", "valueVi"],
        //   },
        // ],
        raw: true,
        nest: true,
      });
      resolve({
        errCode: 0,
        data: doctors,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllDoctors = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doctors = await db.User.findAll({
        where: { roleId: "R2" },
        attributes: {
          exclude: ["password", "image"],
        },
      });
      resolve({
        errCode: 0,
        data: doctors,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const saveDetailInforDoctor = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputData.id || inputData.contentHTML || inputData.contentMarkdown) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters",
        });
      } else {
        await db.Markdown.create({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          doctorId: inputData.doctorId,
        });
        resolve({
          errCode: 0,
          errMessage: "successfully",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailDoctorById = (idInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!idInput) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters",
        });
      } else {
        const data = await db.User.findOne({
          where: {
            id: idInput,
          },
          attributes: {
            exclude: ["password", "image"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
            {
              model: db.Allcode,
              as: "positionData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: true,
          nest: true,
        });
        resolve({
          errCode: 0,
          data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getTopDoctorHome,
  getAllDoctors,
  saveDetailInforDoctor,
  getDetailDoctorById,
};
