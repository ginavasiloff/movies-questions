export const getMovieApi = async (url: string): Promise<JSON> => {
  const headers = new Headers({
    Authorization: `Bearer ${process.env.MOVIE_DB_API_ACCESS_TOKEN}`,
    accept: 'application/json'
  })
  const request = { method: 'GET', headers }
  const response = await fetch(url, request)
  return await response.json()
}
