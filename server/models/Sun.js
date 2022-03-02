import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SunSchema = new Schema({

  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  imgUrl: { type: String, default: 'https://placehold.id/200x200' },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }

},
  { timestamps: true, toJSON: { virtuals: true } }
)

SunSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})