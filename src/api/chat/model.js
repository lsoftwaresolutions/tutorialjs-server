import mongoose, { Schema } from 'mongoose'

const chatSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String
  }
}, {
  timestamps: true
})

chatSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user,
      message: this.message,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('Chat', chatSchema)
export default module.exports
