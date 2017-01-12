import { Playground } from '.'

let playground

beforeEach(async () => {
  playground = await Playground.create({ text: 'test', tries: 'test', loadCPU: 'test', loadMemory: 'test', weight: 'test', createdBy: 'test', updatedBy: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = playground.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(playground.id)
    expect(view.text).toBe(playground.text)
    expect(view.tries).toBe(playground.tries)
    expect(view.loadCPU).toBe(playground.loadCPU)
    expect(view.loadMemory).toBe(playground.loadMemory)
    expect(view.weight).toBe(playground.weight)
    expect(view.createdBy).toBe(playground.createdBy)
    expect(view.updatedBy).toBe(playground.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = playground.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(playground.id)
    expect(view.text).toBe(playground.text)
    expect(view.tries).toBe(playground.tries)
    expect(view.loadCPU).toBe(playground.loadCPU)
    expect(view.loadMemory).toBe(playground.loadMemory)
    expect(view.weight).toBe(playground.weight)
    expect(view.createdBy).toBe(playground.createdBy)
    expect(view.updatedBy).toBe(playground.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
