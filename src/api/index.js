import { Router } from 'express'
import user from './user'
import auth from './auth'
import passwordReset from './password-reset'
import course from './course'
import section from './section'
import level from './level'
import news from './news'
import review from './review'
import tag from './tag'
import itemsTag from './items-tag'
import itemsType from './items-type'
import item from './item'
import chat from './chat'
import message from './message'
import question from './question'
import answer from './answer'
import playground from './playground'
import usersPlayground from './users-playground'
import usersQuestionsAnswer from './users-questions-answer'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */
router.use('/users', user)
router.use('/auth', auth)
router.use('/password-resets', passwordReset)
router.use('/courses', course)
router.use('/courses/:course/sections', section)
router.use('/courses/:course/sections/:section/items', item)
router.use('/levels', level)
router.use('/news', news)
router.use('/reviews', review)
router.use('/tags', tag)
router.use('/items-tags', itemsTag)
router.use('/items/types', itemsType)
router.use('/chat', chat)
router.use('/messages', message)
router.use('/questions', question)
router.use('/answers', answer)
router.use('/playgrounds', playground)
router.use('/users-playgrounds', usersPlayground)
router.use('/users-questions-answers', usersQuestionsAnswer)

export default router
