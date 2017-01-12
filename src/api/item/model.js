import mongoose, { Schema } from 'mongoose'

const itemSchema = new Schema({
  section: {
    type: Schema.ObjectId,
    ref: 'Section'
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  order: {
    type: Number
  },
  type: {
    type: Schema.ObjectId,
    ref: 'ItemsType'
  },
  resource: {
    type: String
  },
  level: {
    type: Schema.ObjectId,
    ref: 'Level'
  },
  minTime: {
    type: Number
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

itemSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      section: this.section,
      name: this.name,
      description: this.description,
      order: this.order,
      type: this.type,
      resource: this.resource,
      level: this.level,
      minTime: this.minTime,
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

module.exports = mongoose.model('Item', itemSchema)
export default module.exports
