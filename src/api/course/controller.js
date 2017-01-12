import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Course } from '.'

export const create = ({ bodymen: { body }, user }, res, next) => {
  body.updatedBy = user._id
  body.createdBy = body.updatedBy
  return Course.create(body)
    .then((course) => course.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Course.find(query, select, cursor)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('level', 'name description color')
    .then((courses) => courses.map((course) => course.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Course.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('level', 'name description color')
    .then(notFound(res))
    .then((course) => course ? course.view(true) : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params, user }, res, next) => {
  res.updatedBy = user._id
  return Course.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('level', 'name description color')
    .then(notFound(res))
    .then((course) => course ? _.merge(course, body).save() : null)
    .then((course) => course ? course.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Course.findById(params.id)
    .then(notFound(res))
    .then((course) => course ? course.remove() : null)
    .then(success(res, 204))
    .catch(next)
