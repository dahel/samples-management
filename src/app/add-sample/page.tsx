import Image from "next/image";
import { Rack } from "types/rack.type";
import { RestApiResponse } from "types/response.type";
import SampleForm from "app/add-sample/sampleForm/SampleForm";
import { PatientLocation } from "types/patientLocation.type";
import { PatientCompany } from "types/patientCompany.type";
import { VisionDefect } from "types/visionDefect.type";
import { fetchEndpointData } from "app/_utils/apiClient";

async function getLocations(): Promise<RestApiResponse<PatientLocation[]>> {
  const response  = await fetch(`${process.env.REST_API_URL}/locations`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}
// todo remove other Colection from name of the getters
async function getVisionDefects(): Promise<RestApiResponse<PatientLocation[]>> {
  const response  = await fetch(`${process.env.REST_API_URL}/vision-defects`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function AddSample() {
  // todo check trpc
  const { data: companies } = await fetchEndpointData<PatientCompany[]>('companies');
  const { data: locations } = await fetchEndpointData<PatientLocation[]>('locations');
  const { data: visionDefects } = await fetchEndpointData<VisionDefect[]>('companies');

  return (
    <div>
      <SampleForm companies={companies} locations={locations} visionDefects={visionDefects} />
    </div>  
  );
}
