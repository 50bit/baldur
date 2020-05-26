import Controller from './Controller';
import MessageService from '../services/MessageService';
import Messages from '../models/Messages.model';

const messageService = new MessageService(new Messages().getInstance());

class MessagesController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new MessagesController(messageService);
