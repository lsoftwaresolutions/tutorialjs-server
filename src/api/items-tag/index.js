import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export ItemsTag, { schema } from './model'

const router = new Router()
const { item, tag, order } = schema.tree

/**
 * @api {post} /items-tags Create items tag
 * @apiName CreateItemsTag
 * @apiGroup ItemsTag
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam item Items tag's item.
 * @apiParam tag Items tag's tag.
 * @apiParam order Items tag's order.
 * @apiSuccess {Object} itemsTag Items tag's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items tag not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ item, tag, order }),
  create)

/**
 * @api {get} /items-tags Retrieve items tags
 * @apiName RetrieveItemsTags
 * @apiGroup ItemsTag
 * @apiUse listParams
 * @apiSuccess {Object[]} itemsTags List of items tags.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /items-tags/:id Retrieve items tag
 * @apiName RetrieveItemsTag
 * @apiGroup ItemsTag
 * @apiSuccess {Object} itemsTag Items tag's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items tag not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /items-tags/:id Update items tag
 * @apiName UpdateItemsTag
 * @apiGroup ItemsTag
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam item Items tag's item.
 * @apiParam tag Items tag's tag.
 * @apiParam order Items tag's order.
 * @apiSuccess {Object} itemsTag Items tag's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Items tag not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ item, tag, order }),
  update)

/**
 * @api {delete} /items-tags/:id Delete items tag
 * @apiName DeleteItemsTag
 * @apiGroup ItemsTag
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Items tag not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
