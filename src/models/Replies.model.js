import mongoose, { Schema } from 'mongoose';
import User from './User.model';

const user = new User().getInstance().schema;

class Replies {
  intiSchema() {
    const schema = new Schema({
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: String,
        required: true,
      },
      user: user,
    });
    mongoose.model('replies', schema);
  }

  getInstance() {
    this.intiSchema();
    return mongoose.model('replies');
  }
}

export default Replies;
