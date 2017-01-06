import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Level } from '.'

export const create = ({ bodymen: { body }, user }, res, next) => {
  body.updatedBy = user._id
  body.createdBy = body.updatedBy
  return Level.create(body)
    .then((level) => level.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Level.find(query, select, cursor)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .then((levels) => levels.map((level) => level.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Level.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .then(notFound(res))
    .then((level) => level ? level.view(true) : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params, user }, res, next) => {
  res.updatedBy = user._id
  return Level.findById(params.id)
    .then(notFound(res))
    .then((level) => level ? _.merge(level, body).save() : null)
    .then((level) => level ? level.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Level.findById(params.id)
    .then(notFound(res))
    .then((level) => level ? level.remove() : null)
    .then(success(res, 204))
    .catch(next)
