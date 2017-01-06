import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Section } from '.'

const app = () => express(routes)

let section

beforeEach(async () => {
  section = await Section.create({})
})

test('POST /sections 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ courseId: 'test', name: 'test', description: 'test', order: 'test', levelId: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.courseId).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.order).toEqual('test')
  expect(body.levelId).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('GET /sections 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /sections/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${section.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(section.id)
})

test('GET /sections/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /sections/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${section.id}`)
    .send({ courseId: 'test', name: 'test', description: 'test', order: 'test', levelId: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(section.id)
  expect(body.courseId).toEqual('test')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.order).toEqual('test')
  expect(body.levelId).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('PUT /sections/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ courseId: 'test', name: 'test', description: 'test', order: 'test', levelId: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /sections/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${section.id}`)
  expect(status).toBe(204)
})

test('DELETE /sections/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
