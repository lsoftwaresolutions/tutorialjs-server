import { Chat } from '.'

let chat

beforeEach(async () => {
  chat = await Chat.create({ user: 'test', message: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = chat.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(chat.id)
    expect(view.user).toBe(chat.user)
    expect(view.message).toBe(chat.message)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = chat.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(chat.id)
    expect(view.user).toBe(chat.user)
    expect(view.message).toBe(chat.message)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
