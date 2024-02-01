import Image from "next/image";
import { fetchRacks } from "app/_utils/apiClient/apiClient";
import { Rack } from "types/rack.type";
import { RestApiResponse } from "types/response.type";

// share it with apiClient for client side calls
//  todo move data: Rack[] to generic
async function getRacksCollection(): Promise<RestApiResponse<Rack[]>> {
  const response  = await fetch(`${process.env.REST_API_URL}/racks`);

  if (!response.ok) {
    // todo handle error
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json();
}

export default async function Racks() {
  const { data: racksCollection } = await getRacksCollection();

  return (
    <div>
      <table className="table w-[500px] text-center">
    <thead>
      <tr>
        <th>Id</th>
        <th>Laboratory</th>
        <th>Room</th>
        <th>Samples amount</th>
      </tr>
    </thead>
    <tbody>
    {racksCollection.map((rackItem) => {
      return (
        <tr key={rackItem.id}>
          <td>{rackItem.id}</td>
          <td>{rackItem.location.laboratory.name}</td>
          <td>{rackItem.location.room.name}</td>
          <td>{rackItem.testSamplesIds.length}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
    </div>
  );
}
