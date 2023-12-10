import { after } from 'node:test'
import { handler } from '../lambdas/getMovieApi'

const originalEnv = process.env

describe('getMovieApi', () => {
  beforeAll(() => {
    process.env = {
      ...originalEnv,
      MOVIE_DB_API_ACCESS_TOKEN: 'your-access-token'
    }
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })
  after(() => {
    process.env = originalEnv
  })
  it('It creates a get request with a bearer token', async () => {
    const mockResponse = { some: 'data' }
    const testUrl = 'test-url'
    const mockRequest = {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer your-access-token',
        accept: 'application/json'
      })
    }

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      } as Response)
    ) as jest.MockedFunction<typeof fetch>

    await handler(testUrl)

    expect(global.fetch).toHaveBeenCalledWith(testUrl, mockRequest)
  })
})
