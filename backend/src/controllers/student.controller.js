const {
  getStudent,
  getActiveStudents,
} = require("../services/student.service");
const teamLeadService = require("../services/teamLead.service");
const studentService = require("../services/student.service");

//Obtener todos los estudiantes activos
const getAllActiveStudents = async (req, res, next) => {
  try {
    const activeStudents = await getActiveStudents();
    res.status(200).json({ success: true, data: activeStudents });
  } catch (error) {
    next(error);
  }
};

//Obtener un estudiante en particular por id
const getOneStudent = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    // buscar al estudiante por id
    const student = await getStudent(studentId);
    res.status(200).json({ success: true, student });
  } catch (error) {
    next(error);
  }
};

//Obtener un estudiante en particular por nombre o email
const searchStudent = async (req, res, next) => {  
  try {
    const term = req.params.term;   
    const students = await studentService.searchStudent(term);
    res.status(200).json({ success: true, students })
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllActiveStudents,
  getOneStudent,
  searchStudent,
};
