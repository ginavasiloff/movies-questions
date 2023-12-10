import { handler } from '../lambdas/getMovieApi'

describe('getMovieApi handler', () => {
  it('connects to the open movie database', async () => {
    const url = `${process.env.MOVIE_DB_API_URL}/search/movie?query=test`
    const result = await handler(url)
    expect(JSON.stringify(result)).toContain('total_results')
  })
})
