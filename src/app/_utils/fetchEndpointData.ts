import { RestApiResponse } from 'types/response.type';
import type { PatientLocation } from 'types/patientLocation.type';
import type { PatientCompany } from 'types/patientCompany.type';
import type { VisionDefect } from 'types/visionDefect.type';
import type { SampleStorage } from 'types/sampleStorage.type';

type EndpointReturnDataType = {
  'companies': PatientCompany[],
  'patient-locations': PatientLocation[],
  'vision-defects': VisionDefect[],
  'sample-storages': SampleStorage[]
}

const fetchEndpointData = async <EndpointPath extends keyof EndpointReturnDataType>(
  endpoint: EndpointPath
): Promise<RestApiResponse<EndpointReturnDataType[EndpointPath]>> => {
  const response = await fetch(`${process.env.REST_API_URL}/${endpoint}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export default fetchEndpointData;
