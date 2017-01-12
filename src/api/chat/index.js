import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Chat, { schema } from './model'

const router = new Router()
const { user, message } = schema.tree

/**
 * @api {post} /chat Create chat
 * @apiName CreateChat
 * @apiGroup Chat
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam user Chat's user.
 * @apiParam message Chat's message.
 * @apiSuccess {Object} chat Chat's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Chat not found.
 */
router.post('/',
  token({ required: true }),
  body({ user, message }),
  create)

/**
 * @api {get} /chat Retrieve chats
 * @apiName RetrieveChats
 * @apiGroup Chat
 * @apiUse listParams
 * @apiSuccess {Object[]} chats List of chats.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /chat/:id Retrieve chat
 * @apiName RetrieveChat
 * @apiGroup Chat
 * @apiSuccess {Object} chat Chat's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Chat not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /chat/:id Update chat
 * @apiName UpdateChat
 * @apiGroup Chat
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam user Chat's user.
 * @apiParam message Chat's message.
 * @apiSuccess {Object} chat Chat's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Chat not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ user, message }),
  update)

/**
 * @api {delete} /chat/:id Delete chat
 * @apiName DeleteChat
 * @apiGroup Chat
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Chat not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
