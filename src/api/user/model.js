import crypto from 'crypto'
import bcrypt from 'bcrypt'
import randtoken from 'rand-token'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'

const compare = require('bluebird').promisify(bcrypt.compare)
const roles = ['user', 'admin']

const userSchema = new Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  login: {
    type: String,
    unique: true,
    index: true,
    trim: true,
    required: true,
    minlength: 6
  },
  firstname: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  birthday: {
    type: Date
  },
  levelId: {
    type: String,
    ref: 'Level'
  },
  points: {
    type: Number,
    default: 0
  },
  reputation: {
    type: Number,
    default: 0
  },
  services: {
    facebook: String,
    github: String,
    google: String
  },
  role: {
    type: String,
    enum: roles,
    default: 'user'
  },
  picture: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

userSchema.path('email').set(function (email) {
  if (!this.picture || this.picture.indexOf('https://gravatar.com') === 0) {
    const hash = crypto.createHash('md5').update(email).digest('hex')
    this.picture = `https://gravatar.com/avatar/${hash}?d=identicon`
  }

  if (!this.login) {
    this.login = email.replace(/^(.+)@.+$/, '$1')
  }

  return email
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  /* istanbul ignore next */
  const rounds = env === 'test' ? 1 : 9

  bcrypt.hash(this.password, rounds, (err, hash) => {
    /* istanbul ignore next */
    if (err) return next(err)
    this.password = hash
    next()
  })
})

userSchema.methods = {
  view (full) {
    let view = {}
    let fields = ['id', 'login', 'firstname', 'lastname']

    if (full) {
      fields = [...fields, 'email', 'birthday', 'levelId', 'points', 'reputation', 'role', 'picture', 'createdAt', 'updatedAt']
    }

    fields.forEach((field) => { view[field] = this[field] })

    return view
  },

  authenticate (password) {
    return compare(password, this.password).then((valid) => valid ? this : false)
  }
}

userSchema.statics = {
  roles,

  createFromService ({ service, id, email, login, firstname, lastname, birthday, levelId, points, reputation, picture }) {
    return this.findOne({ $or: [{ [`services.${service}`]: id }, { email }] }).then((user) => {
      if (user) {
        user.services[service] = id
        user.login = login
        user.firstname = firstname
        user.lastname = lastname
        user.birthday = birthday
        user.levelId = levelId
        user.points = points
        user.reputation = reputation
        user.picture = picture
        return user.save()
      } else {
        const password = randtoken.generate(16)
        return this.create({ services: { [service]: id }, email, password, login, firstname, lastname, birthday, levelId, points, reputation, picture })
      }
    })
  }
}

userSchema.plugin(mongooseKeywords, { paths: ['email', 'login'] })

module.exports = mongoose.model('User', userSchema)
export default module.exports
