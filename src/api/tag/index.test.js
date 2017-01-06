import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Tag } from '.'

const app = () => express(routes)

let tag

beforeEach(async () => {
  tag = await Tag.create({})
})

test('POST /tags 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', description: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('GET /tags 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /tags/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${tag.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tag.id)
})

test('GET /tags/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tags/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${tag.id}`)
    .send({ name: 'test', description: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tag.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('PUT /tags/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', description: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tags/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${tag.id}`)
  expect(status).toBe(204)
})

test('DELETE /tags/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
