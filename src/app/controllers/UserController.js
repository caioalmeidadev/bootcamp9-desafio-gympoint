import User from '../models/User';

class UserController {
  async show(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(401).json({ error: 'User not Found' });
    }
    const { id, name, email, studant } = user;

    return res.json({ id, name, email, studant });
  }
}

export default new UserController();
