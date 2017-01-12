import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Question, { schema } from './model'

const router = new Router()
const { text, weight, createdBy, updatedBy } = schema.tree

/**
 * @api {post} /questions Create question
 * @apiName CreateQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam text Question's text.
 * @apiParam weight Question's weight.
 * @apiParam createdBy Question's createdBy.
 * @apiParam updatedBy Question's updatedBy.
 * @apiSuccess {Object} question Question's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Question not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ text, weight, createdBy, updatedBy }),
  create)

/**
 * @api {get} /questions Retrieve questions
 * @apiName RetrieveQuestions
 * @apiGroup Question
 * @apiUse listParams
 * @apiSuccess {Object[]} questions List of questions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /questions/:id Retrieve question
 * @apiName RetrieveQuestion
 * @apiGroup Question
 * @apiSuccess {Object} question Question's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Question not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /questions/:id Update question
 * @apiName UpdateQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam text Question's text.
 * @apiParam weight Question's weight.
 * @apiParam createdBy Question's createdBy.
 * @apiParam updatedBy Question's updatedBy.
 * @apiSuccess {Object} question Question's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Question not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ text, weight, createdBy, updatedBy }),
  update)

/**
 * @api {delete} /questions/:id Delete question
 * @apiName DeleteQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Question not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
