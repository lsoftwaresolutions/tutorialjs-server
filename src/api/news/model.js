import mongoose, { Schema } from 'mongoose'

const newsSchema = new Schema({
  name: {
    type: String
  },
  text: {
    type: String
  },
  image: {
    type: String
  },
  isAvailable: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

newsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      text: this.text,
      image: this.image,
      isAvailable: this.isAvailable,
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('News', newsSchema)
export default module.exports
