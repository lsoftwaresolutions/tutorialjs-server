import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
  userId: {
    type: String
  },
  message: {
    type: String
  },
  recipientId: {
    type: String
  }
}, {
  timestamps: true
})

messageSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      message: this.message,
      recipientId: this.recipientId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('Message', messageSchema)
export default module.exports
