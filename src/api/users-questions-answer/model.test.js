import { UsersQuestionsAnswer } from '.'

let usersQuestionsAnswer

beforeEach(async () => {
  usersQuestionsAnswer = await UsersQuestionsAnswer.create({ userId: 'test', questionId: 'test', answerId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = usersQuestionsAnswer.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(usersQuestionsAnswer.id)
    expect(view.userId).toBe(usersQuestionsAnswer.userId)
    expect(view.questionId).toBe(usersQuestionsAnswer.questionId)
    expect(view.answerId).toBe(usersQuestionsAnswer.answerId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = usersQuestionsAnswer.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(usersQuestionsAnswer.id)
    expect(view.userId).toBe(usersQuestionsAnswer.userId)
    expect(view.questionId).toBe(usersQuestionsAnswer.questionId)
    expect(view.answerId).toBe(usersQuestionsAnswer.answerId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
