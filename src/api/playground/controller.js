import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Playground } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Playground.create(body)
    .then((playground) => playground.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Playground.find(query, select, cursor)
    .then((playgrounds) => playgrounds.map((playground) => playground.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Playground.findById(params.id)
    .then(notFound(res))
    .then((playground) => playground ? playground.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Playground.findById(params.id)
    .then(notFound(res))
    .then((playground) => playground ? _.merge(playground, body).save() : null)
    .then((playground) => playground ? playground.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Playground.findById(params.id)
    .then(notFound(res))
    .then((playground) => playground ? playground.remove() : null)
    .then(success(res, 204))
    .catch(next)
