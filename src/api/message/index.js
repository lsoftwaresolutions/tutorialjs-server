import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Message, { schema } from './model'

const router = new Router()
const { userId, message, recipientId } = schema.tree

/**
 * @api {post} /messages Create message
 * @apiName CreateMessage
 * @apiGroup Message
 * @apiParam userId Message's userId.
 * @apiParam message Message's message.
 * @apiParam recipientId Message's recipientId.
 * @apiSuccess {Object} message Message's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Message not found.
 */
router.post('/',
  body({ userId, message, recipientId }),
  create)

/**
 * @api {get} /messages Retrieve messages
 * @apiName RetrieveMessages
 * @apiGroup Message
 * @apiUse listParams
 * @apiSuccess {Object[]} messages List of messages.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /messages/:id Retrieve message
 * @apiName RetrieveMessage
 * @apiGroup Message
 * @apiSuccess {Object} message Message's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Message not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /messages/:id Update message
 * @apiName UpdateMessage
 * @apiGroup Message
 * @apiParam userId Message's userId.
 * @apiParam message Message's message.
 * @apiParam recipientId Message's recipientId.
 * @apiSuccess {Object} message Message's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Message not found.
 */
router.put('/:id',
  body({ userId, message, recipientId }),
  update)

/**
 * @api {delete} /messages/:id Delete message
 * @apiName DeleteMessage
 * @apiGroup Message
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Message not found.
 */
router.delete('/:id',
  destroy)

export default router
