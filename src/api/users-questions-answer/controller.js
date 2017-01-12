import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { UsersQuestionsAnswer } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  UsersQuestionsAnswer.create(body)
    .then((usersQuestionsAnswer) => usersQuestionsAnswer.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  UsersQuestionsAnswer.find(query, select, cursor)
    .then((usersQuestionsAnswers) => usersQuestionsAnswers.map((usersQuestionsAnswer) => usersQuestionsAnswer.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  UsersQuestionsAnswer.findById(params.id)
    .then(notFound(res))
    .then((usersQuestionsAnswer) => usersQuestionsAnswer ? usersQuestionsAnswer.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  UsersQuestionsAnswer.findById(params.id)
    .then(notFound(res))
    .then((usersQuestionsAnswer) => usersQuestionsAnswer ? _.merge(usersQuestionsAnswer, body).save() : null)
    .then((usersQuestionsAnswer) => usersQuestionsAnswer ? usersQuestionsAnswer.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  UsersQuestionsAnswer.findById(params.id)
    .then(notFound(res))
    .then((usersQuestionsAnswer) => usersQuestionsAnswer ? usersQuestionsAnswer.remove() : null)
    .then(success(res, 204))
    .catch(next)
