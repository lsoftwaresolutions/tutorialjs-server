import { Review } from '.'

let review

beforeEach(async () => {
  review = await Review.create({ name: 'test', text: 'test', isAvailable: 'test', createdBy: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = review.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(review.id)
    expect(view.name).toBe(review.name)
    expect(view.text).toBe(review.text)
    expect(view.isAvailable).toBe(review.isAvailable)
    expect(view.createdBy).toBe(review.createdBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = review.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(review.id)
    expect(view.name).toBe(review.name)
    expect(view.text).toBe(review.text)
    expect(view.isAvailable).toBe(review.isAvailable)
    expect(view.createdBy).toBe(review.createdBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
