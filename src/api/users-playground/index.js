import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export UsersPlayground, { schema } from './model'

const router = new Router()
const { userId, playgroundId, text } = schema.tree

/**
 * @api {post} /users-playgrounds Create users playground
 * @apiName CreateUsersPlayground
 * @apiGroup UsersPlayground
 * @apiParam userId Users playground's userId.
 * @apiParam playgroundId Users playground's playgroundId.
 * @apiParam text Users playground's text.
 * @apiSuccess {Object} usersPlayground Users playground's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users playground not found.
 */
router.post('/',
  body({ userId, playgroundId, text }),
  create)

/**
 * @api {get} /users-playgrounds Retrieve users playgrounds
 * @apiName RetrieveUsersPlaygrounds
 * @apiGroup UsersPlayground
 * @apiUse listParams
 * @apiSuccess {Object[]} usersPlaygrounds List of users playgrounds.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /users-playgrounds/:id Retrieve users playground
 * @apiName RetrieveUsersPlayground
 * @apiGroup UsersPlayground
 * @apiSuccess {Object} usersPlayground Users playground's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users playground not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /users-playgrounds/:id Update users playground
 * @apiName UpdateUsersPlayground
 * @apiGroup UsersPlayground
 * @apiParam userId Users playground's userId.
 * @apiParam playgroundId Users playground's playgroundId.
 * @apiParam text Users playground's text.
 * @apiSuccess {Object} usersPlayground Users playground's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users playground not found.
 */
router.put('/:id',
  body({ userId, playgroundId, text }),
  update)

/**
 * @api {delete} /users-playgrounds/:id Delete users playground
 * @apiName DeleteUsersPlayground
 * @apiGroup UsersPlayground
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Users playground not found.
 */
router.delete('/:id',
  destroy)

export default router
