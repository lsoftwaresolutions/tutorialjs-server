import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Chat } from '.'

export const create = ({ bodymen: { body }, user }, res, next) => {
  body.user = user._id
  return Chat.create(body)
    .then((chat) => chat.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Chat.find(query, select, cursor)
    .populate('user', 'login picture')
    .then((chats) => chats.map((chat) => chat.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Chat.findById(params.id)
    .populate('user', 'login picture')
    .then(notFound(res))
    .then((chat) => chat ? chat.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Chat.findById(params.id)
    .populate('user', 'login picture')
    .then(notFound(res))
    .then((chat) => chat ? _.merge(chat, body).save() : null)
    .then((chat) => chat ? chat.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Chat.findById(params.id)
    .then(notFound(res))
    .then((chat) => chat ? chat.remove() : null)
    .then(success(res, 204))
    .catch(next)
