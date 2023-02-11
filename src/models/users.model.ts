import { User } from '@interfaces/users.interface';
import { Document, model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: false,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
