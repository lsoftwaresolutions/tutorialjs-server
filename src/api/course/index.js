import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Course, { schema } from './model'

const router = new Router()
const { name, description, image, order, level, isAvailable } = schema.tree

/**
 * @api {post} /courses Create course
 * @apiName CreateCourse
 * @apiGroup Course
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name Course's name.
 * @apiParam description Course's description.
 * @apiParam image Course's image.
 * @apiParam order Course's order.
 * @apiParam level Course's level.
 * @apiParam isAvailable Course's availability.
 * @apiSuccess {Object} course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ name, description, image, order, level, isAvailable }),
  create)

/**
 * @api {get} /courses Retrieve courses
 * @apiName RetrieveCourses
 * @apiGroup Course
 * @apiUse listParams
 * @apiSuccess {Object[]} courses List of courses.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /courses/:id Retrieve course
 * @apiName RetrieveCourse
 * @apiGroup Course
 * @apiSuccess {Object} course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /courses/:id Update course
 * @apiName UpdateCourse
 * @apiGroup Course
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam name Course's name.
 * @apiParam description Course's description.
 * @apiParam image Course's image.
 * @apiParam order Course's order.
 * @apiParam level Course's level.
 * @apiParam isAvailable Course's availability.
 * @apiSuccess {Object} course Course's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Course not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ name, description, image, order, level, isAvailable }),
  update)

/**
 * @api {delete} /courses/:id Delete course
 * @apiName DeleteCourse
 * @apiGroup Course
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Course not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
