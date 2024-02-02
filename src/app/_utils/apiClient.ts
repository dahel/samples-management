import { RestApiResponse } from "types/response.type";

export const fetchEndpointData = async <T>(endpoint: string): Promise<RestApiResponse<T>> => {
  const response  = await fetch(`${process.env.REST_API_URL}/${endpoint}`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}
