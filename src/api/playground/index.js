import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Playground, { schema } from './model'

const router = new Router()
const { text, tries, loadCPU, loadMemory, weight, createdBy, updatedBy } = schema.tree

/**
 * @api {post} /playgrounds Create playground
 * @apiName CreatePlayground
 * @apiGroup Playground
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam text Playground's text.
 * @apiParam tries Playground's tries.
 * @apiParam loadCPU Playground's loadCPU.
 * @apiParam loadMemory Playground's loadMemory.
 * @apiParam weight Playground's weight.
 * @apiParam createdBy Playground's createdBy.
 * @apiParam updatedBy Playground's updatedBy.
 * @apiSuccess {Object} playground Playground's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playground not found.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ text, tries, loadCPU, loadMemory, weight, createdBy, updatedBy }),
  create)

/**
 * @api {get} /playgrounds Retrieve playgrounds
 * @apiName RetrievePlaygrounds
 * @apiGroup Playground
 * @apiUse listParams
 * @apiSuccess {Object[]} playgrounds List of playgrounds.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /playgrounds/:id Retrieve playground
 * @apiName RetrievePlayground
 * @apiGroup Playground
 * @apiSuccess {Object} playground Playground's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playground not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /playgrounds/:id Update playground
 * @apiName UpdatePlayground
 * @apiGroup Playground
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiParam text Playground's text.
 * @apiParam tries Playground's tries.
 * @apiParam loadCPU Playground's loadCPU.
 * @apiParam loadMemory Playground's loadMemory.
 * @apiParam weight Playground's weight.
 * @apiParam createdBy Playground's createdBy.
 * @apiParam updatedBy Playground's updatedBy.
 * @apiSuccess {Object} playground Playground's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Playground not found.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ text, tries, loadCPU, loadMemory, weight, createdBy, updatedBy }),
  update)

/**
 * @api {delete} /playgrounds/:id Delete playground
 * @apiName DeletePlayground
 * @apiGroup Playground
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Playground not found.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
