import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Message } from '.'

const app = () => express(routes)

let message

beforeEach(async () => {
  message = await Message.create({})
})

test('POST /messages 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ userId: 'test', message: 'test', recipientId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.userId).toEqual('test')
  expect(body.message).toEqual('test')
  expect(body.recipientId).toEqual('test')
})

test('GET /messages 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /messages/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${message.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(message.id)
})

test('GET /messages/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /messages/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${message.id}`)
    .send({ userId: 'test', message: 'test', recipientId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(message.id)
  expect(body.userId).toEqual('test')
  expect(body.message).toEqual('test')
  expect(body.recipientId).toEqual('test')
})

test('PUT /messages/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ userId: 'test', message: 'test', recipientId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /messages/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${message.id}`)
  expect(status).toBe(204)
})

test('DELETE /messages/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
