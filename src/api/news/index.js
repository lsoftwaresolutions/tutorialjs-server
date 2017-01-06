import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export News, { schema } from './model'

const router = new Router()
const { name, text, image, isAvailable } = schema.tree

/**
 * @api {post} /news Create news
 * @apiName CreateNews
 * @apiGroup News
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name News's name.
 * @apiParam text News's text.
 * @apiParam image News's image.
 * @apiParam isAvailable News's isAvailable.
 * @apiSuccess {Object} news News's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 News not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ name, text, image, isAvailable }),
  create)

/**
 * @api {get} /news Retrieve news
 * @apiName RetrieveNews
 * @apiGroup News
 * @apiUse listParams
 * @apiSuccess {Object[]} news List of news.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /news/:id Retrieve news
 * @apiName RetrieveNews
 * @apiGroup News
 * @apiSuccess {Object} news News's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 News not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /news/:id Update news
 * @apiName UpdateNews
 * @apiGroup News
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name News's name.
 * @apiParam text News's text.
 * @apiParam image News's image.
 * @apiParam isAvailable News's isAvailable.
 * @apiSuccess {Object} news News's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 News not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ name, text, image, isAvailable }),
  update)

/**
 * @api {delete} /news/:id Delete news
 * @apiName DeleteNews
 * @apiGroup News
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 News not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
