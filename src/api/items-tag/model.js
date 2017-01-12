import mongoose, { Schema } from 'mongoose'

const itemsTagSchema = new Schema({
  item: {
    type: String
  },
  tag: {
    type: String
  },
  order: {
    type: Number
  }
}, {
  timestamps: false
})

itemsTagSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      item: this.item,
      tag: this.tag,
      order: this.order
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

module.exports = mongoose.model('ItemsTag', itemsTagSchema)
export default module.exports
