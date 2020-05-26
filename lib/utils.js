import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import passport from 'passport';

class Utils {
  constructor() {
    this.comparePasswords = this.comparePasswords.bind(this);
    this.getJWT = this.getJWT.bind(this);
  }
  async comparePasswords(password, originalPassword) {
    try {
      const match = await bcrypt.compare(password, originalPassword);
      return match;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getJWT(user) {
    const _id = user._id;
    const expiresIn = '2d';
    const payload = {
      sub: _id,
    };

    const signedToken = jwt.sign(payload, 'baldur');

    return {
      token: signedToken,
    };
  }
}

export default new Utils();
