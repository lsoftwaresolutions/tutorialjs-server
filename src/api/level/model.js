import mongoose, { Schema } from 'mongoose'

const levelSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  color: {
    type: String
  },
  points: {
    type: Number,
    required: true,
    min: 0
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

levelSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      color: this.color,
      points: this.points,
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

module.exports = mongoose.model('Level', levelSchema)
export default module.exports
