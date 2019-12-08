import User from '../models/User';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const isAdmin = await User.findByPk(req.userId);

    if (!isAdmin) {
      return res
        .status(401)
        .json({ error: 'User not permitted to signup students' });
    }

    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExist) {
      return res.status(401).json({ error: 'Student already exits' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const student = await Student.findOne({
      where: { email: req.body.email },
    });

    if (!student) {
      return res.status(401).json({ erro: 'Student not found' });
    }

    const updatedStudent = await student.update(req.body);

    return res.status(401).json(updatedStudent);
  }
}

export default new StudentController();
