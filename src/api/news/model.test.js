import { News } from '.'

let news

beforeEach(async () => {
  news = await News.create({ name: 'test', text: 'test', image: 'test', isAvailable: 'test', createdBy: 'test', updatedBy: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = news.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(news.id)
    expect(view.name).toBe(news.name)
    expect(view.text).toBe(news.text)
    expect(view.image).toBe(news.image)
    expect(view.isAvailable).toBe(news.isAvailable)
    expect(view.createdBy).toBe(news.createdBy)
    expect(view.updatedBy).toBe(news.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = news.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(news.id)
    expect(view.name).toBe(news.name)
    expect(view.text).toBe(news.text)
    expect(view.image).toBe(news.image)
    expect(view.isAvailable).toBe(news.isAvailable)
    expect(view.createdBy).toBe(news.createdBy)
    expect(view.updatedBy).toBe(news.updatedBy)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
