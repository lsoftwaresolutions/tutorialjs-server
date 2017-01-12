import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export UsersQuestionsAnswer, { schema } from './model'

const router = new Router()
const { userId, questionId, answerId } = schema.tree

/**
 * @api {post} /users-questions-answers Create users questions answer
 * @apiName CreateUsersQuestionsAnswer
 * @apiGroup UsersQuestionsAnswer
 * @apiParam userId Users questions answer's userId.
 * @apiParam questionId Users questions answer's questionId.
 * @apiParam answerId Users questions answer's answerId.
 * @apiSuccess {Object} usersQuestionsAnswer Users questions answer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users questions answer not found.
 */
router.post('/',
  body({ userId, questionId, answerId }),
  create)

/**
 * @api {get} /users-questions-answers Retrieve users questions answers
 * @apiName RetrieveUsersQuestionsAnswers
 * @apiGroup UsersQuestionsAnswer
 * @apiUse listParams
 * @apiSuccess {Object[]} usersQuestionsAnswers List of users questions answers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /users-questions-answers/:id Retrieve users questions answer
 * @apiName RetrieveUsersQuestionsAnswer
 * @apiGroup UsersQuestionsAnswer
 * @apiSuccess {Object} usersQuestionsAnswer Users questions answer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users questions answer not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /users-questions-answers/:id Update users questions answer
 * @apiName UpdateUsersQuestionsAnswer
 * @apiGroup UsersQuestionsAnswer
 * @apiParam userId Users questions answer's userId.
 * @apiParam questionId Users questions answer's questionId.
 * @apiParam answerId Users questions answer's answerId.
 * @apiSuccess {Object} usersQuestionsAnswer Users questions answer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Users questions answer not found.
 */
router.put('/:id',
  body({ userId, questionId, answerId }),
  update)

/**
 * @api {delete} /users-questions-answers/:id Delete users questions answer
 * @apiName DeleteUsersQuestionsAnswer
 * @apiGroup UsersQuestionsAnswer
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Users questions answer not found.
 */
router.delete('/:id',
  destroy)

export default router
