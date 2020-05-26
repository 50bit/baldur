import UserController from './../src/controllers/UserController';
import MessagesController from './../src/controllers/MessagesController';
import passport from 'passport';
import './passport';

export default (server) => {
  // User ROUTES
  server.get(
    `/api/user/:id`,
    passport.authenticate('jwt', { session: false }),
    UserController.get,
  );
  server.post(`/api/user/register`, UserController.register);
  server.post(`/api/user/login`, UserController.login);

  // Message ROUTES
  server.get(
    `/api/messages`,
    passport.authenticate('jwt', { session: false }),
    MessagesController.getAll,
  );
  server.get(
    `/api/messages/:id`,
    passport.authenticate('jwt', { session: false }),
    MessagesController.get,
  );
  server.post(
    `/api/messages`,
    passport.authenticate('jwt', { session: false }),
    MessagesController.insert,
  );
  server.put(
    `/api/messages/:id`,
    passport.authenticate('jwt', { session: false }),
    MessagesController.update,
  );
  server.delete(
    `/api/messages/:id`,
    passport.authenticate('jwt', { session: false }),
    MessagesController.delete,
  );

  // Message ROUTES
  server.get(
    `/api/replies`,
    passport.authenticate('jwt', { session: false }),
    Replies.getAll,
  );
  server.post(
    `/api/messages`,
    passport.authenticate('jwt', { session: false }),
    Replies.insert,
  );
};
