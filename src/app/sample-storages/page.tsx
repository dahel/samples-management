import Image from "next/image";
import { SampleStorage } from "types/sampleStorage.type";
import { RestApiResponse } from "types/response.type";
import fetchEndpointData from "app/_utils/fetchEndpointData";

// share it with apiClient for client side calls
//  todo move data: Rack[] to generic
async function getRacksCollection(): Promise<RestApiResponse<SampleStorage[]>> {
  const response  = await fetch(`${process.env.REST_API_URL}/sample=storages`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function Racks() {
  const { data: sampleStorages } = await fetchEndpointData<SampleStorage[]>('sample-storages');

  console.log(sampleStorages);
  

  return (
    <div>
      <table className="table w-full text-center">
    <thead>
      <tr>
        <th>storage id</th>
        <th>laboratory</th>
        <th>patient age</th>
        <th>patient company</th>
      </tr>
    </thead>
    <tbody>
    {sampleStorages.map((sampleStorage) => {
      const { name, city, address } = sampleStorage.location.laboratory;
      const { room } = sampleStorage.location;
      return (
        <tr key={sampleStorage.id}>
          <td>{sampleStorage.id}</td>
          <td>{`${name}, ${room.name}, ${city} - ${address}`}</td>
          <td>{sampleStorage.location.laboratory.city}</td>
          <td>{sampleStorage.location.room.name}</td>
          <td>{sampleStorage.storageConditions.ageMin} - {sampleStorage.storageConditions.ageMax}</td>
          <td>{sampleStorage.storageConditions.companyId}</td>
          {/* todo list amount of samples or better - add samples to storages */}
        </tr>
      )
    })}
    </tbody>
  </table>
    </div>
  );
}
