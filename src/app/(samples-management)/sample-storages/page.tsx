
import Image from "next/image";
import { SampleStorage } from "types/sampleStorage.type";
import { RestApiResponse } from "types/response.type";
import fetchEndpointData from "app/_utils/fetchEndpointData";
import { PatientCompany } from "types/patientCompany.type";
import { PatientLocation } from "types/patientLocation.type";
import { VisionDefect } from "types/visionDefect.type";

export default async function SampleStorages() {
  console.log('############################## rendering SampleStorages');
  const { data: sampleStorages } = await fetchEndpointData<SampleStorage[]>('sample-storages');

  return (
    <div>
      <table className="table w-full text-center">
    <thead>
      <tr className="text-base">
        <th>Storage id</th>
        <th>Laboratory</th>
        <th>Patient&apos;s age range</th>
        <th>Patient&apos;s company</th>
        <th>Patient&apos;s district</th>
        <th>Patient&apos;s vision defect</th>
        <th>Samples amount</th>
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
          <td>{sampleStorage.storageConditions.ageMin} - {sampleStorage.storageConditions.ageMax}</td>
          <td>{sampleStorage.patientCompanyName}</td>
          <td>{sampleStorage.patientDisctrictName}</td>
          <td>{sampleStorage.visionDefectName}</td>
          <td>{sampleStorage.samplesAmount}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
    </div>
  );
}

export const revalidate = 0;
