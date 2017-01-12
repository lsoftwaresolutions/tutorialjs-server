import { Item } from '.'

let item

beforeEach(async () => {
  item = await Item.create({ section: 'test', name: 'test', description: 'test', order: 'test', type: 'test', resource: 'test', level: 'test', minTime: 'test', createdBy: 'test', updatedBy: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = item.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(item.id)
    expect(view.section).toBe(item.section)
    expect(view.name).toBe(item.name)
    expect(view.description).toBe(item.description)
    expect(view.order).toBe(item.order)
    expect(view.type).toBe(item.type)
    expect(view.resource).toBe(item.resource)
    expect(view.level).toBe(item.level)
    expect(view.minTime).toBe(item.minTime)
    expect(view.createdBy).toBe(item.createdBy)
    expect(view.updatedBy).toBe(item.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = item.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(item.id)
    expect(view.section).toBe(item.section)
    expect(view.name).toBe(item.name)
    expect(view.description).toBe(item.description)
    expect(view.order).toBe(item.order)
    expect(view.type).toBe(item.type)
    expect(view.resource).toBe(item.resource)
    expect(view.level).toBe(item.level)
    expect(view.minTime).toBe(item.minTime)
    expect(view.createdBy).toBe(item.createdBy)
    expect(view.updatedBy).toBe(item.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
