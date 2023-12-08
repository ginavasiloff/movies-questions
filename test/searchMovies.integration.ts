import { handler } from '../lambdas/searchMovies'

describe('searchMovies handler', () => {
  it('connects to the open movie database', async () => {
    const result = await handler('test')
    expect(result.status).toBe(200)
  })
})
