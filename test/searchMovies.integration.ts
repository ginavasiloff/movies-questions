import { handler } from '../lambdas/searchMovies'

describe('searchMovies handler', () => {
  it('connects to the open movie database', async () => {
    const result = await handler('test')
    expect(JSON.stringify(result)).toContain('total_results')
  })
})
