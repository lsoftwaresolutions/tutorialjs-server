import mongoose, { Schema } from 'mongoose'

const itemsTypeSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: false
})

itemsTypeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('ItemsType', itemsTypeSchema)
export default module.exports
