import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Answer, { schema } from './model'

const router = new Router()
const { question, text, points, order } = schema.tree

/**
 * @api {post} /answers Create answer
 * @apiName CreateAnswer
 * @apiGroup Answer
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam question Answer's question.
 * @apiParam text Answer's text.
 * @apiParam points Answer's points.
 * @apiParam order Answer's order.
 * @apiSuccess {Object} answer Answer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Answer not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ question, text, points, order }),
  create)

/**
 * @api {get} /answers Retrieve answers
 * @apiName RetrieveAnswers
 * @apiGroup Answer
 * @apiUse listParams
 * @apiSuccess {Object[]} answers List of answers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /answers/:id Retrieve answer
 * @apiName RetrieveAnswer
 * @apiGroup Answer
 * @apiSuccess {Object} answer Answer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Answer not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /answers/:id Update answer
 * @apiName UpdateAnswer
 * @apiGroup Answer
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam question Answer's question.
 * @apiParam text Answer's text.
 * @apiParam points Answer's points.
 * @apiParam order Answer's order.
 * @apiSuccess {Object} answer Answer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Answer not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ question, text, points, order }),
  update)

/**
 * @api {delete} /answers/:id Delete answer
 * @apiName DeleteAnswer
 * @apiGroup Answer
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Answer not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
