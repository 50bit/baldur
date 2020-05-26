import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-jwt';
import User from '../src/models/User.model';
import passport from 'passport';
import UserService from '../src/services/UserService';

const options = {
  secretOrKey: 'baldur',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(options, (payload, done) => {
    const userService = new UserService();
    userService
      .findOne({ _id: payload.sub })
      .then((user) => {
        if (user) return done(null, user);
        return done(null, false);
      })
      .catch((err) => console.log(err));
  }),
);
