import { Answer } from '.'

let answer

beforeEach(async () => {
  answer = await Answer.create({ question: 'test', text: 'test', points: 'test', order: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = answer.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(answer.id)
    expect(view.question).toBe(answer.question)
    expect(view.text).toBe(answer.text)
    expect(view.points).toBe(answer.points)
    expect(view.order).toBe(answer.order)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = answer.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(answer.id)
    expect(view.question).toBe(answer.question)
    expect(view.text).toBe(answer.text)
    expect(view.points).toBe(answer.points)
    expect(view.order).toBe(answer.order)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
