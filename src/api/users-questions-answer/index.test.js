import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { UsersQuestionsAnswer } from '.'

const app = () => express(routes)

let usersQuestionsAnswer

beforeEach(async () => {
  usersQuestionsAnswer = await UsersQuestionsAnswer.create({})
})

test('POST /users-questions-answers 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ userId: 'test', questionId: 'test', answerId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.questionId).toEqual('test')
  expect(body.answerId).toEqual('test')
})

test('GET /users-questions-answers 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /users-questions-answers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${usersQuestionsAnswer.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(usersQuestionsAnswer.id)
})

test('GET /users-questions-answers/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /users-questions-answers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${usersQuestionsAnswer.id}`)
    .send({ userId: 'test', questionId: 'test', answerId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(usersQuestionsAnswer.id)
  expect(body.userId).toEqual('test')
  expect(body.questionId).toEqual('test')
  expect(body.answerId).toEqual('test')
})

test('PUT /users-questions-answers/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ userId: 'test', questionId: 'test', answerId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /users-questions-answers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${usersQuestionsAnswer.id}`)
  expect(status).toBe(204)
})

test('DELETE /users-questions-answers/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
