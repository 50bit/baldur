import UserController from './../src/controllers/UserController';
import MessagesController from './../src/controllers/MessagesController';

export default (server) => {
  // User ROUTES
  server.get(`/api/user`, UserController.getAll);
  //   server.get(`/api/post/:params`, UserController.get);
  server.get(`/api/user/:id`, UserController.get);
  server.post(`/api/user`, UserController.insert);
  server.put(`/api/user/:id`, UserController.update);
  server.delete(`/api/user/:id`, UserController.delete);

  // Message ROUTES
  server.get(`/api/messages`, MessagesController.getAll);
  server.get(`/api/messages/:id`, MessagesController.get);
  server.post(`/api/messages`, MessagesController.insert);
  server.put(`/api/messages/:id`, MessagesController.update);
  server.delete(`/api/messages/:id`, MessagesController.delete);
};
