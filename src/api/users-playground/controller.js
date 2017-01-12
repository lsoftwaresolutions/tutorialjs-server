import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { UsersPlayground } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  UsersPlayground.create(body)
    .then((usersPlayground) => usersPlayground.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  UsersPlayground.find(query, select, cursor)
    .then((usersPlaygrounds) => usersPlaygrounds.map((usersPlayground) => usersPlayground.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  UsersPlayground.findById(params.id)
    .then(notFound(res))
    .then((usersPlayground) => usersPlayground ? usersPlayground.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  UsersPlayground.findById(params.id)
    .then(notFound(res))
    .then((usersPlayground) => usersPlayground ? _.merge(usersPlayground, body).save() : null)
    .then((usersPlayground) => usersPlayground ? usersPlayground.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  UsersPlayground.findById(params.id)
    .then(notFound(res))
    .then((usersPlayground) => usersPlayground ? usersPlayground.remove() : null)
    .then(success(res, 204))
    .catch(next)
