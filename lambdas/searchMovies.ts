import { getMovieApi } from './getMovieApi'

export const handler = async (search: string): Promise<JSON> => {
  const url = `${process.env.MOVIE_DB_API_URL}/search/movie?query=${search}`
  const result = await getMovieApi(url)
  return result
}
