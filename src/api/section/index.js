import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Section, { schema } from './model'

const router = new Router({ mergeParams: true })
const { courseId, name, description, order, levelId, isAvailable } = schema.tree

/**
 * @api {post} /sections Create section
 * @apiName CreateSection
 * @apiGroup Section
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam courseId Section's courseId.
 * @apiParam name Section's name.
 * @apiParam description Section's description.
 * @apiParam order Section's order.
 * @apiParam levelId Section's levelId.
 * @apiParam isAvailable Section's isAvailable.
 * @apiSuccess {Object} section Section's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Section not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ courseId, name, description, order, levelId, isAvailable }),
  create)

/**
 * @api {get} /sections Retrieve sections
 * @apiName RetrieveSections
 * @apiGroup Section
 * @apiUse listParams
 * @apiSuccess {Object[]} sections List of sections.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /sections/:id Retrieve section
 * @apiName RetrieveSection
 * @apiGroup Section
 * @apiSuccess {Object} section Section's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Section not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /sections/:id Update section
 * @apiName UpdateSection
 * @apiGroup Section
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam courseId Section's courseId.
 * @apiParam name Section's name.
 * @apiParam description Section's description.
 * @apiParam order Section's order.
 * @apiParam levelId Section's levelId.
 * @apiParam isAvailable Section's isAvailable.
 * @apiSuccess {Object} section Section's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Section not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ courseId, name, description, order, levelId, isAvailable }),
  update)

/**
 * @api {delete} /sections/:id Delete section
 * @apiName DeleteSection
 * @apiGroup Section
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Section not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
