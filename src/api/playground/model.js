import mongoose, { Schema } from 'mongoose'

const playgroundSchema = new Schema({
  text: {
    type: String
  },
  tries: {
    type: Number
  },
  loadCPU: {
    type: Number
  },
  loadMemory: {
    type: Number
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

playgroundSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      text: this.text,
      tries: this.tries,
      loadCPU: this.loadCPU,
      loadMemory: this.loadMemory,
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

module.exports = mongoose.model('Playground', playgroundSchema)
export default module.exports
