import mongoose, { Schema } from 'mongoose'

const usersPlaygroundSchema = new Schema({
  userId: {
    type: String
  },
  playgroundId: {
    type: String
  },
  text: {
    type: String
  }
}, {
  timestamps: true
})

usersPlaygroundSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      playgroundId: this.playgroundId,
      text: this.text,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('UsersPlayground', usersPlaygroundSchema)
export default module.exports
