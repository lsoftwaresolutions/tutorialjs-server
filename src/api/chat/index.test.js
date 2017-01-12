import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Chat } from '.'

const app = () => express(routes)

let chat

beforeEach(async () => {
  chat = await Chat.create({})
})

test('POST /chat 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ user: 'test', message: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.user).toEqual('test')
  expect(body.message).toEqual('test')
})

test('GET /chat 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /chat/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${chat.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(chat.id)
})

test('GET /chat/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /chat/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${chat.id}`)
    .send({ user: 'test', message: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(chat.id)
  expect(body.user).toEqual('test')
  expect(body.message).toEqual('test')
})

test('PUT /chat/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ user: 'test', message: 'test' })
  expect(status).toBe(404)
})

test('DELETE /chat/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${chat.id}`)
  expect(status).toBe(204)
})

test('DELETE /chat/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
