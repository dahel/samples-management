import Image from "next/image";
import { fetchRacks } from "@/app/_utils/apiClient/apiClient";
import { Rack } from "@/types/rack";
import { RestApiResponse } from "@/types/response.type";

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

  console.log('############################## racksCollection', racksCollection);

  return (
    <div>
      <div>Available racks</div>
      <ul>
        {racksCollection.map((rackItem) => {
          return <li key={rackItem.id}>{rackItem.id}</li>
        })}
      </ul>
    </div>
  );
}
