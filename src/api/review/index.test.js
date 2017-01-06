import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Review } from '.'

const app = () => express(routes)

let review

beforeEach(async () => {
  review = await Review.create({})
})

test('POST /reviews 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', text: 'test', isAvailable: 'test', createdBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.text).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
})

test('GET /reviews 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /reviews/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${review.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(review.id)
})

test('GET /reviews/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /reviews/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${review.id}`)
    .send({ name: 'test', text: 'test', isAvailable: 'test', createdBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(review.id)
  expect(body.name).toEqual('test')
  expect(body.text).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
})

test('PUT /reviews/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', text: 'test', isAvailable: 'test', createdBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /reviews/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${review.id}`)
  expect(status).toBe(204)
})

test('DELETE /reviews/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
