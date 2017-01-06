import mongoose, { Schema } from 'mongoose'

const sectionSchema = new Schema({
  courseId: {
    type: String,
    ref: 'Course'
  },
  name: {
    type: String
  },
  description: {
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

sectionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      courseId: this.courseId,
      name: this.name,
      description: this.description,
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

module.exports = mongoose.model('Section', sectionSchema)
export default module.exports
