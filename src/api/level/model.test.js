import { Level } from '.'

let level

beforeEach(async () => {
  level = await Level.create({ name: 'test', description: 'test', color: 'test', points: 'test', createdBy: 'test', updatedBy: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = level.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(level.id)
    expect(view.name).toBe(level.name)
    expect(view.description).toBe(level.description)
    expect(view.color).toBe(level.color)
    expect(view.points).toBe(level.points)
    expect(view.createdBy).toBe(level.createdBy)
    expect(view.updatedBy).toBe(level.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = level.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(level.id)
    expect(view.name).toBe(level.name)
    expect(view.description).toBe(level.description)
    expect(view.color).toBe(level.color)
    expect(view.points).toBe(level.points)
    expect(view.createdBy).toBe(level.createdBy)
    expect(view.updatedBy).toBe(level.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
