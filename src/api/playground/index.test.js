import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Playground } from '.'

const app = () => express(routes)

let playground

beforeEach(async () => {
  playground = await Playground.create({})
})

test('POST /playgrounds 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ text: 'test', tries: 'test', loadCPU: 'test', loadMemory: 'test', weight: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.text).toEqual('test')
  expect(body.tries).toEqual('test')
  expect(body.loadCPU).toEqual('test')
  expect(body.loadMemory).toEqual('test')
  expect(body.weight).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('GET /playgrounds 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /playgrounds/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${playground.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(playground.id)
})

test('GET /playgrounds/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /playgrounds/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${playground.id}`)
    .send({ text: 'test', tries: 'test', loadCPU: 'test', loadMemory: 'test', weight: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(playground.id)
  expect(body.text).toEqual('test')
  expect(body.tries).toEqual('test')
  expect(body.loadCPU).toEqual('test')
  expect(body.loadMemory).toEqual('test')
  expect(body.weight).toEqual('test')
  expect(body.createdBy).toEqual('test')
  expect(body.updatedBy).toEqual('test')
})

test('PUT /playgrounds/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ text: 'test', tries: 'test', loadCPU: 'test', loadMemory: 'test', weight: 'test', createdBy: 'test', updatedBy: 'test' })
  expect(status).toBe(404)
})

test('DELETE /playgrounds/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${playground.id}`)
  expect(status).toBe(204)
})

test('DELETE /playgrounds/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
