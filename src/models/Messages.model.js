import mongoose, { Schema } from 'mongoose';
import Replies from './Replies.model';
import User from './User.model';

const replies = new Replies().getInstance().schema;
const user = new User().getInstance().schema;

class Messages {
  initSchema() {
    const schema = new Schema({
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: String,
        required: true,
      },
      replies: [replies],
      user: user,
    });
    mongoose.model('Messages', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('Messages');
  }
}

export default Messages;
