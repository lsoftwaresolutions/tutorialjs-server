import mongoose, { Schema } from 'mongoose'

const answerSchema = new Schema({
  question: {
    type: String,
    ref: 'Question'
  },
  text: {
    type: String
  },
  points: {
    type: Number
  },
  order: {
    type: Number
  }
}, {
  timestamps: true
})

answerSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      question: this.question,
      text: this.text,
      points: this.points,
      order: this.order,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('Answer', answerSchema)
export default module.exports
