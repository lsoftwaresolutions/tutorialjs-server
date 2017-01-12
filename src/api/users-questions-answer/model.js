import mongoose, { Schema } from 'mongoose'

const usersQuestionsAnswerSchema = new Schema({
  userId: {
    type: String
  },
  questionId: {
    type: String
  },
  answerId: {
    type: String
  }
}, {
  timestamps: true
})

usersQuestionsAnswerSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      questionId: this.questionId,
      answerId: this.answerId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('UsersQuestionsAnswer', usersQuestionsAnswerSchema)
export default module.exports
