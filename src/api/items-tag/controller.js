import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { ItemsTag } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ItemsTag.create(body)
    .then((itemsTag) => itemsTag.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ItemsTag.find(query, select, cursor)
    .then((itemsTags) => itemsTags.map((itemsTag) => itemsTag.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ItemsTag.findById(params.id)
    .then(notFound(res))
    .then((itemsTag) => itemsTag ? itemsTag.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ItemsTag.findById(params.id)
    .then(notFound(res))
    .then((itemsTag) => itemsTag ? _.merge(itemsTag, body).save() : null)
    .then((itemsTag) => itemsTag ? itemsTag.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ItemsTag.findById(params.id)
    .then(notFound(res))
    .then((itemsTag) => itemsTag ? itemsTag.remove() : null)
    .then(success(res, 204))
    .catch(next)
