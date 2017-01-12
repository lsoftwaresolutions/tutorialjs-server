import { Message } from '.'

let message

beforeEach(async () => {
  message = await Message.create({ userId: 'test', message: 'test', recipientId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = message.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(message.id)
    expect(view.userId).toBe(message.userId)
    expect(view.message).toBe(message.message)
    expect(view.recipientId).toBe(message.recipientId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = message.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(message.id)
    expect(view.userId).toBe(message.userId)
    expect(view.message).toBe(message.message)
    expect(view.recipientId).toBe(message.recipientId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
