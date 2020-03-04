import { model, Schema } from 'mongoose';

const Crud = new Schema({
  name: String,
  age: Number,
  city: String,
  state: String,
});

export default model('Crud', Crud);
