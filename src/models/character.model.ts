import { RickAndMortyCollection } from '@/interfaces/rick.interface';
import { Document, model, Schema } from 'mongoose';

const character: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  ref: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  uid:{
    type: String,
    required: true,
  }
});

const characterModel = model<RickAndMortyCollection & Document>('Character', character);

export default characterModel;
