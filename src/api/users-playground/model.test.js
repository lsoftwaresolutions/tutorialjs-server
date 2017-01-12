import { UsersPlayground } from '.'

let usersPlayground

beforeEach(async () => {
  usersPlayground = await UsersPlayground.create({ userId: 'test', playgroundId: 'test', text: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = usersPlayground.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(usersPlayground.id)
    expect(view.userId).toBe(usersPlayground.userId)
    expect(view.playgroundId).toBe(usersPlayground.playgroundId)
    expect(view.text).toBe(usersPlayground.text)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = usersPlayground.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(usersPlayground.id)
    expect(view.userId).toBe(usersPlayground.userId)
    expect(view.playgroundId).toBe(usersPlayground.playgroundId)
    expect(view.text).toBe(usersPlayground.text)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
