import { ItemsTag } from '.'

let itemsTag

beforeEach(async () => {
  itemsTag = await ItemsTag.create({ item: 'test', tag: 'test', order: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = itemsTag.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(itemsTag.id)
    expect(view.item).toBe(itemsTag.item)
    expect(view.tag).toBe(itemsTag.tag)
    expect(view.order).toBe(itemsTag.order)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = itemsTag.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(itemsTag.id)
    expect(view.item).toBe(itemsTag.item)
    expect(view.tag).toBe(itemsTag.tag)
    expect(view.order).toBe(itemsTag.order)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
