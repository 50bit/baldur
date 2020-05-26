import Controller from './Controller';
import UserService from '../services/UserService';
import User from '../models/User.model';
import bcrypt from 'bcrypt';
import Utils from '../../lib/utils';

const userService = new UserService(new User().getInstance());

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.service = service;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  async register(req, res) {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body['password'] = hashPassword;
    return await this.insert(req, res);
  }
  async login(req, res) {
    let user = await this.service.findOne({ userName: req.body.userName });
    if (user.statusCode == 200) {
      const isValid = await Utils.comparePasswords(
        req.body.password,
        user.data.password,
      );

      if (isValid) {
        const jwtToken = Utils.getJWT(user.data);

        const newData = {
          error: user.error,
          statusCode: user.statusCode,
          data: {
            _id: user.data._id,
            firstName: user.data.firstName,
            lastName: user.data.lastName,
            userName: user.data.userName,
            token: jwtToken.token,
          },
        };
        return res.status(user.statusCode).send(newData);
      } else {
        user.data = {};
        user.statusCode = 401;
        return res.status(user.statusCode).send(user);
      }
    } else {
      return res.status(user.statusCode).send(user);
    }
  }
}

export default new UserController(userService);
