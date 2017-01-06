import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Course } from '.'

const app = () => express(routes)

let course

beforeEach(async () => {
  course = await Course.create({})
})

test('POST /courses 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', description: 'test', image: 'test', order: 'test', levelId: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.order).toEqual('test')
  expect(body.levelId).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('GET /courses 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /courses/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${course.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(course.id)
})

test('GET /courses/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /courses/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${course.id}`)
    .send({ name: 'test', description: 'test', image: 'test', order: 'test', levelId: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(course.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.order).toEqual('test')
  expect(body.levelId).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('PUT /courses/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', description: 'test', image: 'test', order: 'test', levelId: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /courses/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${course.id}`)
  expect(status).toBe(204)
})

test('DELETE /courses/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
