import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Level, { schema } from './model'

const router = new Router()
const { name, description, color, points } = schema.tree

/**
 * @api {post} /levels Create level
 * @apiName CreateLevel
 * @apiGroup Level
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name Level's name.
 * @apiParam description Level's description.
 * @apiParam color Level's color.
 * @apiParam points Level's points.
 * @apiSuccess {Object} level Level's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Level not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ name, description, color, points }),
  create)

/**
 * @api {get} /levels Retrieve levels
 * @apiName RetrieveLevels
 * @apiGroup Level
 * @apiUse listParams
 * @apiSuccess {Object[]} levels List of levels.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /levels/:id Retrieve level
 * @apiName RetrieveLevel
 * @apiGroup Level
 * @apiSuccess {Object} level Level's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Level not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /levels/:id Update level
 * @apiName UpdateLevel
 * @apiGroup Level
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name Level's name.
 * @apiParam description Level's description.
 * @apiParam color Level's color.
 * @apiParam points Level's points.
 * @apiSuccess {Object} level Level's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Level not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ name, description, color, points }),
  update)

/**
 * @api {delete} /levels/:id Delete level
 * @apiName DeleteLevel
 * @apiGroup Level
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Level not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
