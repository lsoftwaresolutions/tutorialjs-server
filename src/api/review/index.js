import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Review, { schema } from './model'

const router = new Router()
const { name, text, isAvailable } = schema.tree

/**
 * @api {post} /reviews Create review
 * @apiName CreateReview
 * @apiGroup Review
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam name Review's name.
 * @apiParam text Review's text.
 * @apiParam isAvailable Review's isAvailable.
 * @apiSuccess {Object} review Review's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Review not found.
 */
router.post('/',
  token({ required: true }),
  body({ name, text, isAvailable }),
  create)

/**
 * @api {get} /reviews Retrieve reviews
 * @apiName RetrieveReviews
 * @apiGroup Review
 * @apiUse listParams
 * @apiSuccess {Object[]} reviews List of reviews.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /reviews/:id Retrieve review
 * @apiName RetrieveReview
 * @apiGroup Review
 * @apiSuccess {Object} review Review's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Review not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /reviews/:id Update review
 * @apiName UpdateReview
 * @apiGroup Review
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam name Review's name.
 * @apiParam text Review's text.
 * @apiParam isAvailable Review's isAvailable.
 * @apiSuccess {Object} review Review's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Review not found.
 */
router.put('/:id',
  token({ required: true }),
  body({ name, text, isAvailable }),
  update)

/**
 * @api {delete} /reviews/:id Delete review
 * @apiName DeleteReview
 * @apiGroup Review
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Review not found.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
