import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { ItemsTag } from '.'

const app = () => express(routes)

let itemsTag

beforeEach(async () => {
  itemsTag = await ItemsTag.create({})
})

test('POST /items-tags 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ item: 'test', tag: 'test', order: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.item).toEqual('test')
  expect(body.tag).toEqual('test')
  expect(body.order).toEqual('test')
})

test('GET /items-tags 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /items-tags/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${itemsTag.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(itemsTag.id)
})

test('GET /items-tags/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /items-tags/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${itemsTag.id}`)
    .send({ item: 'test', tag: 'test', order: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(itemsTag.id)
  expect(body.item).toEqual('test')
  expect(body.tag).toEqual('test')
  expect(body.order).toEqual('test')
})

test('PUT /items-tags/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ item: 'test', tag: 'test', order: 'test' })
  expect(status).toBe(404)
})

test('DELETE /items-tags/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${itemsTag.id}`)
  expect(status).toBe(204)
})

test('DELETE /items-tags/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
