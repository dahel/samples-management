import SampleForm from "app/add-sample/sampleForm/SampleForm";
import { PatientLocation } from "types/patientLocation.type";
import { PatientCompany } from "types/patientCompany.type";
import { VisionDefect } from "types/visionDefect.type";
import fetchEndpointData from "app/_utils/fetchEndpointData";

export default async function AddSample() {
  // todo check trpc
  // todo fetch in parralell
  // todo handle errors
  const { data: companies } = await fetchEndpointData<PatientCompany[]>('companies');
  const { data: locations } = await fetchEndpointData<PatientLocation[]>('patient-locations');
  const { data: visionDefects } = await fetchEndpointData<VisionDefect[]>('vision-defects');

  return (
    <div className="flex justify-center">
      <SampleForm companies={companies} locations={locations} visionDefects={visionDefects} />
    </div>  
  );
}
