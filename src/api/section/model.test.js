import { Section } from '.'

let section

beforeEach(async () => {
  section = await Section.create({ courseId: 'test', name: 'test', description: 'test', order: 'test', levelId: 'test', isAvailable: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = section.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(section.id)
    expect(view.courseId).toBe(section.courseId)
    expect(view.name).toBe(section.name)
    expect(view.description).toBe(section.description)
    expect(view.order).toBe(section.order)
    expect(view.levelId).toBe(section.levelId)
    expect(view.isAvailable).toBe(section.isAvailable)
    expect(view.createdBy).toBeTruthy()
    expect(view.updatedBy).toBeTruthy()
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = section.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(section.id)
    expect(view.courseId).toBe(section.courseId)
    expect(view.name).toBe(section.name)
    expect(view.description).toBe(section.description)
    expect(view.order).toBe(section.order)
    expect(view.levelId).toBe(section.levelId)
    expect(view.isAvailable).toBe(section.isAvailable)
    expect(view.createdBy).toBeTruthy()
    expect(view.updatedBy).toBeTruthy()
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
