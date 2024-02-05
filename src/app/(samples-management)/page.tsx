import type { PatientLocation } from 'types/patientLocation.type';
import type { PatientCompany } from 'types/patientCompany.type';
import type { VisionDefect } from 'types/visionDefect.type';
import SampleForm from 'app/_components/newSampleForm/NewSampleForm';
import fetchEndpointData from 'app/_utils/fetchEndpointData';

export default async function AddSample() {
  const [companies, locations, visionDefects] = await Promise.all([
    fetchEndpointData<PatientCompany[]>('companies'),
    fetchEndpointData<PatientLocation[]>('patient-locations'),
    fetchEndpointData<VisionDefect[]>('vision-defects')
  ])

  return (
    <div className='flex justify-center'>
      <SampleForm
        companies={companies.data}
        locations={locations.data}
        visionDefects={visionDefects.data}
      />
    </div>
  );
}
