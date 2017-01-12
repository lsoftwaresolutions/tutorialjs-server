import { ItemsType } from '.'

let itemsType

beforeEach(async () => {
  itemsType = await ItemsType.create({ name: 'test', description: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = itemsType.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(itemsType.id)
    expect(view.name).toBe(itemsType.name)
    expect(view.description).toBe(itemsType.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = itemsType.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(itemsType.id)
    expect(view.name).toBe(itemsType.name)
    expect(view.description).toBe(itemsType.description)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
