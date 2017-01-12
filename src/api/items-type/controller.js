import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { ItemsType } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  ItemsType.create(body)
    .then((itemsType) => itemsType.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ItemsType.find(query, select, cursor)
    .then((itemsTypes) => itemsTypes.map((itemsType) => itemsType.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ItemsType.findById(params.id)
    .then(notFound(res))
    .then((itemsType) => itemsType ? itemsType.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ItemsType.findById(params.id)
    .then(notFound(res))
    .then((itemsType) => itemsType ? _.merge(itemsType, body).save() : null)
    .then((itemsType) => itemsType ? itemsType.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ItemsType.findById(params.id)
    .then(notFound(res))
    .then((itemsType) => itemsType ? itemsType.remove() : null)
    .then(success(res, 204))
    .catch(next)
