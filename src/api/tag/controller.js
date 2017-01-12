import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Tag } from '.'

export const create = ({ bodymen: { body }, user }, res, next) => {
  body.updatedBy = user._id
  body.createdBy = body.updatedBy
  return Tag.create(body)
    .then((tag) => tag.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Tag.find(query, select, cursor)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .then((tags) => tags.map((tag) => tag.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tag.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .then(notFound(res))
    .then((tag) => tag ? tag.view(true) : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params, user }, res, next) => {
  res.updatedBy = user._id
  return Tag.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .then(notFound(res))
    .then((tag) => tag ? _.merge(tag, body).save() : null)
    .then((tag) => tag ? tag.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Tag.findById(params.id)
    .then(notFound(res))
    .then((tag) => tag ? tag.remove() : null)
    .then(success(res, 204))
    .catch(next)
