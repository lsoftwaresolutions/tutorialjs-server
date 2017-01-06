import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { News } from '.'

const app = () => express(routes)

let news

beforeEach(async () => {
  news = await News.create({})
})

test('POST /news 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', text: 'test', image: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.text).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('GET /news 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /news/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${news.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(news.id)
})

test('GET /news/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /news/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${news.id}`)
    .send({ name: 'test', text: 'test', image: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(news.id)
  expect(body.name).toEqual('test')
  expect(body.text).toEqual('test')
  expect(body.image).toEqual('test')
  expect(body.isAvailable).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('PUT /news/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', text: 'test', image: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /news/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${news.id}`)
  expect(status).toBe(204)
})

test('DELETE /news/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
