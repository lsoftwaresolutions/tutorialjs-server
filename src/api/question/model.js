import mongoose, { Schema } from 'mongoose'

const questionSchema = new Schema({
  text: {
    type: String
  },
  weight: {
    type: Number
  },
  createdBy: {
    type: String
  },
  updatedBy: {
    type: String
  }
}, {
  timestamps: true
})

questionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      text: this.text,
      weight: this.weight,
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

module.exports = mongoose.model('Question', questionSchema)
export default module.exports
