
import Image from "next/image";
import { SampleStorage } from "types/sampleStorage.type";
import { RestApiResponse } from "types/response.type";
import fetchEndpointData from "app/_utils/fetchEndpointData";
import { PatientCompany } from "types/patientCompany.type";
import { PatientLocation } from "types/patientLocation.type";
import { VisionDefect } from "types/visionDefect.type";

export default async function SampleStorages() {
  const { data: sampleStorages } = await fetchEndpointData<SampleStorage[]>('sample-storages');
  const { data: companies } = await fetchEndpointData<PatientCompany[]>('companies');
  const { data: locations } = await fetchEndpointData<PatientLocation[]>('patient-locations');
  const { data: visionDefects } = await fetchEndpointData<VisionDefect[]>('vision-defects');

  const copmaniesMap = new Map(companies.map(({ id, name }) => ([id, name])));
  const districtsMap = new Map(locations.map(({ districts }) => districts).flat().map(({ id, name }) => ([id, name])));
  const visionDefectsMap = new Map(visionDefects.map(({ id, name }) => ([id, name])));
  
  console.log(visionDefectsMap)

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
      </tr>
    </thead>
    <tbody>
    {sampleStorages.map((sampleStorage) => {
      const { name, city, address } = sampleStorage.location.laboratory;
      const { room } = sampleStorage.location;
      const {
        patientCompanyId,
        patientDistrictId,
        visionDefectId
      } = sampleStorage.storageConditions;

      return (
        <tr key={sampleStorage.id}>
          <td>{sampleStorage.id}</td>
          <td>{`${name}, ${room.name}, ${city} - ${address}`}</td>
          <td>{sampleStorage.storageConditions.ageMin} - {sampleStorage.storageConditions.ageMax}</td>
          <td>{copmaniesMap.get(patientCompanyId)}</td>
          <td>{districtsMap.get(patientDistrictId)}</td>
          <td>{visionDefectsMap.get(visionDefectId)}</td>
          {/* todo list amount of samples or better - add samples to storages */}
        </tr>
      )
    })}
    </tbody>
  </table>
    </div>
  );
}
