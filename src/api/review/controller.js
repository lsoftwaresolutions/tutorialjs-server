import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Review } from '.'

export const create = ({ bodymen: { body }, user }, res, next) => {
  body.createdBy = user._id
  return Review.create(body)
    .then((review) => review.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Review.find(query, select, cursor)
    .populate('createdBy', 'login firstname lastname')
    .populate('updatedBy', 'login firstname lastname')
    .then((reviews) => reviews.map((review) => review.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Review.findById(params.id)
    .populate('createdBy', 'login firstname lastname')
    .populate('updatedBy', 'login firstname lastname')
    .then(notFound(res))
    .then((review) => review ? review.view(true) : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params, user }, res, next) => {
  res.updatedBy = user._id
  return Review.findById(params.id)
    .then(notFound(res))
    .then((result) => {
      if (!result) return null
      const isSelfUpdate = user._id === result.createdBy
      if (!isSelfUpdate) {
        res.status(401).json({
          valid: false,
          message: 'You can\'t change other user\'s data'
        })
        return null
      }
      return result
    })
    .then((review) => review ? _.merge(review, body).save() : null)
    .then((review) => review ? review.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Review.findById(params.id)
    .then(notFound(res))
    .then((review) => review ? review.remove() : null)
    .then(success(res, 204))
    .catch(next)
