import mongoose, { Schema } from 'mongoose';
import User from './User.model';

class Replies {
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
    });
    mongoose.model('replies', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('replies');
  }
}

export default Replies;
