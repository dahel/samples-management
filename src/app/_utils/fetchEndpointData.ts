import { RestApiResponse } from "types/response.type";
import { Patient } from "types/patient.type";
import { TestSample } from "types/test-sample.type";
import { BaseNextRequestConfig } from "next/dist/server/base-http";
import { NextFetchEvent } from "next/server";

const fetchEndpointData = async <T>(endpoint: string, options?: RequestInit): Promise<RestApiResponse<T>> => {
  // console.log('############################## calling fetchEndpointData', endpoint);
  const response  = await fetch(`${process.env.REST_API_URL}/${endpoint}`, { cache: 'no-store' });

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default fetchEndpointData;


  