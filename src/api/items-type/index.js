import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ItemsType, { schema } from './model'

const router = new Router()
const { name, description } = schema.tree

/**
 * @api {post} /items-types Create items type
 * @apiName CreateItemsType
 * @apiGroup ItemsType
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name Items type's name.
 * @apiParam description Items type's description.
 * @apiSuccess {Object} itemsType Items type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items type not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ name, description }),
  create)

/**
 * @api {get} /items-types Retrieve items types
 * @apiName RetrieveItemsTypes
 * @apiGroup ItemsType
 * @apiUse listParams
 * @apiSuccess {Object[]} itemsTypes List of items types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /items-types/:id Retrieve items type
 * @apiName RetrieveItemsType
 * @apiGroup ItemsType
 * @apiSuccess {Object} itemsType Items type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items type not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /items-types/:id Update items type
 * @apiName UpdateItemsType
 * @apiGroup ItemsType
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name Items type's name.
 * @apiParam description Items type's description.
 * @apiSuccess {Object} itemsType Items type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items type not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ name, description }),
  update)

/**
 * @api {delete} /items-types/:id Delete items type
 * @apiName DeleteItemsType
 * @apiGroup ItemsType
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Items type not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
