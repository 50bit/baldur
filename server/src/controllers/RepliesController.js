import Controller from './Controller';
import RepliesService from '../services/RepliesService';
import Replies from '../models/Replies.model';

const repliesService = new RepliesService(new Replies().getInstance());

class RepliesController extends Controller {
  constructor(service) {
    super(service);
  }
}

export default new RepliesController(repliesService);
