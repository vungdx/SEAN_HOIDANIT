import db from "../models/index";
require("dotenv").config();
import _ from 'lodash'

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE

const getTopDoctorHome = (limitInput) => {
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
      if (
        !inputData.id ||
        !inputData.contentHTML ||
        !inputData.contentMarkdown ||
        !inputData.action
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters",
        });
      } else {
        if (inputData.action === "CREATE") {
          await db.Markdown.create({
            contentHTML: inputData.contentHTML,
            contentMarkdown: inputData.contentMarkdown,
            description: inputData.description,
            doctorId: inputData.doctorId,
          });
        } else if (inputData.action === "EDIT") {
          const doctorMarkdown = await db.Markdown.findOne({
            where: { doctorId: inputData.doctorId },
            raw: false,
          });
          if (doctorMarkdown) {
            doctorMarkdown.contentHTML = inputData.contentHTML;
            doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
            doctorMarkdown.description = inputData.description;
            await doctorMarkdown.save();
          }
        }
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

const bulkCreateSchedule = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const schedule = data.arrSchedule;
      if (!data.arrSchedule) {
        resolve({
          errCode: 1,
          errMessage: ' Missing required parameters'
        })
      } else {
        if (schedule && schedule.length>0) {
          schedule = schedule.map(item => {
            item.maxNumber = MAX_NUMBER_SCHEDULE
            return item
          })
        }
        console.log("đặt log ở đây", schedule)
        await db.Schedule.bulkCreate(schedule)
        resolve({
          errCode: 0,
          errMessage: 'Successfully'
        })
      }
    } catch (error) {
      
    }
  })
}

const getScheduleByDate = (doctorId, date) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doctorId || !date) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameters'
        })
      } else {
        const dataSchedule = await db.Schedule.findAll({
          where: {
            doctorId: doctorId,
            date: date
          }
        })
        if (!dataSchedule) dataSchedule = []
        resolve({
          errCode: 0,
          data: dataSchedule
        })
      }
    } catch (error) {
      
    }
  })
}

module.exports = {
  getTopDoctorHome,
  getAllDoctors,
  saveDetailInforDoctor,
  getDetailDoctorById,
  bulkCreateSchedule,
  getScheduleByDate
};
