import mongoose from 'mongoose';
export default mongoose.model(
  'User',
  new mongoose.Schema({
  username: {type:  String, required: true},
  password: {type: String, required: true},
  hash: {type: String, required: true}
}));

