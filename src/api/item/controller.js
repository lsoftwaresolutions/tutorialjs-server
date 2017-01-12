import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Item } from '.'

export const create = ({ bodymen: { body }, params, user }, res, next) => {
  body.section = params.section || body.section
  body.updatedBy = user._id
  body.createdBy = body.updatedBy
  return Item.create(body)
    .then((item) => item.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor }, params }, res, next) => {
  if (params.course) {
    delete params.course
  }
  Item.find(Object.assign(params, query), select, cursor)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('type', 'name description')
    .populate('level', 'name description color')
    .then((items) => items.map((item) => item.view()))
    .then(success(res))
    .catch(next)
}

export const show = ({ params }, res, next) =>
  Item.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('type', 'name description')
    .populate('level', 'name description color')
    .then(notFound(res))
    .then((item) => item ? item.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params, user }, res, next) => {
  res.section = params.section || res.section
  res.updatedBy = user._id
  return Item.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('type', 'name description')
    .populate('level', 'name description color')
    .then(notFound(res))
    .then((item) => item ? _.merge(item, body).save() : null)
    .then((item) => item ? item.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Item.findById(params.id)
    .then(notFound(res))
    .then((item) => item ? item.remove() : null)
    .then(success(res, 204))
    .catch(next)
