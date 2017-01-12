import { Question } from '.'

let question

beforeEach(async () => {
  question = await Question.create({ text: 'test', weight: 'test', createdBy: 'test', updatedBy: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = question.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(question.id)
    expect(view.text).toBe(question.text)
    expect(view.weight).toBe(question.weight)
    expect(view.createdBy).toBe(question.createdBy)
    expect(view.updatedBy).toBe(question.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = question.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(question.id)
    expect(view.text).toBe(question.text)
    expect(view.weight).toBe(question.weight)
    expect(view.createdBy).toBe(question.createdBy)
    expect(view.updatedBy).toBe(question.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
