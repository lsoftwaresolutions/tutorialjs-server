import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema({
  name: {
    type: String
  },
  text: {
    type: String
  },
  isAvailable: {
    type: String
  },
  createdBy: {
    type: String
  }
}, {
  timestamps: true
})

reviewSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      text: this.text,
      isAvailable: this.isAvailable,
      createdBy: this.createdBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('Review', reviewSchema)
export default module.exports
