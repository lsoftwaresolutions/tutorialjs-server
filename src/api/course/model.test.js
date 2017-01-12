import { Course } from '.'

let course

beforeEach(async () => {
  course = await Course.create({ name: 'test', description: 'test', image: 'test', order: 'test', level: 'test', isAvailable: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = course.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(course.id)
    expect(view.name).toBe(course.name)
    expect(view.description).toBe(course.description)
    expect(view.image).toBe(course.image)
    expect(view.order).toBe(course.order)
    expect(view.level).toBe(course.level)
    expect(view.isAvailable).toBe(course.isAvailable)
    expect(view.createdBy).toBeTruthy()
    expect(view.updatedBy).toBeTruthy()
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = course.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(course.id)
    expect(view.name).toBe(course.name)
    expect(view.description).toBe(course.description)
    expect(view.image).toBe(course.image)
    expect(view.order).toBe(course.order)
    expect(view.level).toBe(course.level)
    expect(view.isAvailable).toBe(course.isAvailable)
    expect(view.createdBy).toBeTruthy()
    expect(view.updatedBy).toBeTruthy()
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
