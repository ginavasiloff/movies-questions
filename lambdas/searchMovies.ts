export const handler = async (search: string): Promise<Response> => {
  const url = `${process.env.MOVIE_DB_API_URL}/search/movie?query=${search}`
  const headers = new Headers({
    Authorization: `Bearer ${process.env.MOVIE_DB_API_ACCESS_TOKEN}`,
    accept: 'application/json'
  })
  const request = {method: 'GET', headers}
  return await fetch(url, request)
}
