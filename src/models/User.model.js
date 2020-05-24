import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class User {
  initSchema() {
    const schema = new Schema({
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      userName: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    });
    schema.plugin(uniqueValidator);
    mongoose.model('user', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('user');
  }
}

export default User;
