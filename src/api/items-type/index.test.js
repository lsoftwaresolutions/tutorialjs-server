import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { ItemsType } from '.'

const app = () => express(routes)

let itemsType

beforeEach(async () => {
  itemsType = await ItemsType.create({})
})

test('POST /items-types 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('GET /items-types 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /items-types/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${itemsType.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(itemsType.id)
})

test('GET /items-types/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /items-types/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${itemsType.id}`)
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(itemsType.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
})

test('PUT /items-types/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', description: 'test' })
  expect(status).toBe(404)
})

test('DELETE /items-types/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${itemsType.id}`)
  expect(status).toBe(204)
})

test('DELETE /items-types/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
