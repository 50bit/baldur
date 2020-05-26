import mongoose, { Schema } from 'mongoose';
import Replies from './Replies.model';
import User from './User.model';

class Messages {
  initSchema() {
    const schema = new Schema({
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now(),
      },
      user: {
        type: String,
        required: true,
      },
    });
    mongoose.model('Messages', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('Messages');
  }
}

export default Messages;
