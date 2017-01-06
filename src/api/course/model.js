import mongoose, { Schema } from 'mongoose'

const courseSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  },
  levelId: {
    type: String,
    ref: 'Level'
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

courseSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      image: this.image,
      order: this.order,
      levelId: this.levelId,
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

module.exports = mongoose.model('Course', courseSchema)
export default module.exports
