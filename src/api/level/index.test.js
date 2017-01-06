import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Level } from '.'

const app = () => express(routes)

let level

beforeEach(async () => {
  level = await Level.create({})
})

test('POST /levels 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', description: 'test', color: 'test', points: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.color).toEqual('test')
  expect(body.points).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('GET /levels 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /levels/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${level.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(level.id)
})

test('GET /levels/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /levels/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${level.id}`)
    .send({ name: 'test', description: 'test', color: 'test', points: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(level.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.color).toEqual('test')
  expect(body.points).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('PUT /levels/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', description: 'test', color: 'test', points: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /levels/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${level.id}`)
  expect(status).toBe(204)
})

test('DELETE /levels/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
