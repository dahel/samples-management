import Image from "next/image";
import { fetchRacks } from "app/_utils/apiClient/apiClient";
import { Rack } from "types/rack.type";
import { RestApiResponse } from "types/response.type";
import SampleForm from "app/_components/sampleForm/SampleForm";
import { PatientLocation } from "types/patientLocation.type";
import { PatientCompany } from "types/patientCompany.type";

async function getCompanies(): Promise<RestApiResponse<PatientCompany[]>> {
  const response  = await fetch(`${process.env.REST_API_URL}/companies`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

// todo remove other Colection from name of the getters
async function getLocations(): Promise<RestApiResponse<PatientCompany[]>> {
  const response  = await fetch(`${process.env.REST_API_URL}/locations`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function AddSample() {
  const { data: companies } = await getCompanies();
  const { data: locations } = await getLocations();

  return (
    <div>
      <SampleForm companies={companies} locations={locations} />
    </div>  
  );
}
