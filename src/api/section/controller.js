import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Section } from '.'

export const create = ({ bodymen: { body }, params, user }, res, next) => {
  body.course = params.course || body.course
  body.updatedBy = user._id
  body.createdBy = body.updatedBy
  return Section.create(body)
    .then((section) => section.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor }, params }, res, next) =>
  Section.find(Object.assign(params, query), select, cursor)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('level', 'name description color')
    .then((sections) => sections.map((section) => section.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Section.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('level', 'name description color')
    .then(notFound(res))
    .then((section) => section ? section.view(true) : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params, user }, res, next) => {
  res.course = params.course || res.course
  res.updatedBy = user._id
  return Section.findById(params.id)
    .populate('createdBy', 'login')
    .populate('updatedBy', 'login')
    .populate('level', 'name description color')
    .then(notFound(res))
    .then((section) => section ? _.merge(section, body).save() : null)
    .then((section) => section ? section.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Section.findById(params.id)
    .then(notFound(res))
    .then((section) => section ? section.remove() : null)
    .then(success(res, 204))
    .catch(next)
