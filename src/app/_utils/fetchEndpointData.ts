import { RestApiResponse } from 'types/response.type';

const fetchEndpointData = async <T>(
  endpoint: string
): Promise<RestApiResponse<T>> => {
  const response = await fetch(`${process.env.REST_API_URL}/${endpoint}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export default fetchEndpointData;
