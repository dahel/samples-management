import SampleForm from 'app/_components/newSampleForm/NewSampleForm';
import fetchEndpointData from 'app/_utils/fetchEndpointData';

export default async function AddSample() {
  const [companies, locations, visionDefects] = await Promise.all([
    fetchEndpointData('companies'),
    fetchEndpointData('patient-locations'),
    fetchEndpointData('vision-defects')
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
