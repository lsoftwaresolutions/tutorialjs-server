import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { UsersPlayground } from '.'

const app = () => express(routes)

let usersPlayground

beforeEach(async () => {
  usersPlayground = await UsersPlayground.create({})
})

test('POST /users-playgrounds 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ userId: 'test', playgroundId: 'test', text: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.playgroundId).toEqual('test')
  expect(body.text).toEqual('test')
})

test('GET /users-playgrounds 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /users-playgrounds/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${usersPlayground.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(usersPlayground.id)
})

test('GET /users-playgrounds/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /users-playgrounds/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${usersPlayground.id}`)
    .send({ userId: 'test', playgroundId: 'test', text: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(usersPlayground.id)
  expect(body.userId).toEqual('test')
  expect(body.playgroundId).toEqual('test')
  expect(body.text).toEqual('test')
})

test('PUT /users-playgrounds/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ userId: 'test', playgroundId: 'test', text: 'test' })
  expect(status).toBe(404)
})

test('DELETE /users-playgrounds/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${usersPlayground.id}`)
  expect(status).toBe(204)
})

test('DELETE /users-playgrounds/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
