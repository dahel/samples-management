import { getSample } from 'app/_utils/mongoClient';
import locations from 'database/patientsLocations';
import companies from 'database/patientsCompanies';
import visionDefects from 'database/visionDefects';
import sampleStorages from 'database/sampleStorages';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const testSample = await getSample(id);

  if (!testSample) {
    return Response.json(
      { data: null, error: 'Test sample not found' },
      { status: 404 }
    );
  }

  const sampleStorage = sampleStorages.find((storage) => {
    return storage.id === testSample.storageId;
  });

  const testSampleWithDetails = {
    ...testSample,
    location: sampleStorage.location,
  };

  return Response.json({ data: testSampleWithDetails });
}
