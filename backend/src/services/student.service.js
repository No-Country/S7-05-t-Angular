const { Op } = require("sequelize");
const { TeamLead, Student, Team } = require("../database/models");
const { StudentSchema } = require("../database/models/student.model");
const { models } = require("../database/db");

//Obtener todos los estudiantes activos
const getActiveStudents = async () => {
  const activeStudents = await models.Student.findAll({
    where: { isActive: true },
  });
  return activeStudents;
};

async function getStudent(studentId) {
  // Verificar que el estudiante existe en la base de datos
  const student = await models.Student.findByPk(studentId);
  if (!student) {
    throw new Error("El estudiante no existe en la base de datos");
  }
  const { adminId, password, ...studentData } = student.dataValues;
  //Devolvemos el student sin el adminId ni el password
  return studentData;
}

//Buscar estudiante activo por nombre o correo electrónico
const searchStudent = async (term) => {
  const students = await models.Student.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.iLike]: `%${term}%` } },
        { email: { [Op.iLike]: `%${term}%` } },
      ],
    },
    attributes: ["id", "name", "email", "phone", "isTeamLead", "isActive"],
  });
  return students;
};

//Obtener estudiantes con equipos
async function getStudentsWithTeams() {
  const students = await models.TeamStudent.findAll({});
  return students;
}

//Crear un estudiante

async function createStudent() {}
module.exports = {
  getActiveStudents,
  getStudent,
  searchStudent,
  getStudentsWithTeams,
};
