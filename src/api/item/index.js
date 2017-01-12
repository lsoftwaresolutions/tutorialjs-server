import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Item, { schema } from './model'

const router = new Router({ mergeParams: true })
const { section, name, description, order, type, resource, level, minTime } = schema.tree

/**
 * @api {post} /items Create item
 * @apiName CreateItem
 * @apiGroup Item
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam section Item's section.
 * @apiParam name Item's name.
 * @apiParam description Item's description.
 * @apiParam order Item's order.
 * @apiParam type Item's type.
 * @apiParam resource Item's resource.
 * @apiParam level Item's level.
 * @apiParam minTime Item's minTime.
 * @apiSuccess {Object} item Item's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Item not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ section, name, description, order, type, resource, level, minTime }),
  create)

/**
 * @api {get} /items Retrieve items
 * @apiName RetrieveItems
 * @apiGroup Item
 * @apiUse listParams
 * @apiSuccess {Object[]} items List of items.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /items/:id Retrieve item
 * @apiName RetrieveItem
 * @apiGroup Item
 * @apiSuccess {Object} item Item's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Item not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /items/:id Update item
 * @apiName UpdateItem
 * @apiGroup Item
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam section Item's section.
 * @apiParam name Item's name.
 * @apiParam description Item's description.
 * @apiParam order Item's order.
 * @apiParam type Item's type.
 * @apiParam resource Item's resource.
 * @apiParam level Item's level.
 * @apiParam minTime Item's minTime.
 * @apiSuccess {Object} item Item's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Item not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ section, name, description, order, type, resource, level, minTime }),
  update)

/**
 * @api {delete} /items/:id Delete item
 * @apiName DeleteItem
 * @apiGroup Item
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Item not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
