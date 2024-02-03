import sampleStorages from 'database/sampleStorages';
import locations from 'database/patientsLocations';
import companies from 'database/patientsCompanies';
import visionDefects from 'database/visionDefects';
import { getTestSamples } from 'database/testSamples';
import { TestSample } from 'types/test-sample.type';

const companiesMap = new Map(companies.map(({ id, name }) => ([id, name])));
const districtsMap = new Map(locations.map(({ districts }) => districts).flat().map(({ id, name }) => ([id, name])));
const visionDefectsMap = new Map(visionDefects.map(({ id, name }) => ([id, name])));

export async function GET() {
  console.log('############################## fetching sample storages');
  const testSamples: TestSample[] = getTestSamples();
  const samplesAmountMap = testSamples.reduce((samplesMap, { storageId }) => {
    const currentAmount = samplesMap.get(storageId) || 0;
  
    samplesMap.set(storageId, currentAmount + 1);
  
    return samplesMap;
  
  }, new Map<string, number>())

  console.log('############################## testSamples amount is', testSamples.length);
  


  const storages = sampleStorages.map(storage => {
    const {
      patientCompanyId,
      patientDistrictId,
      visionDefectId
    } = storage.storageConditions;

    return {
      ...storage,
      patientCompanyName: companiesMap.get(patientCompanyId),
      patientDisctrictName: districtsMap.get(patientDistrictId),
      visionDefectName: visionDefectsMap.get(visionDefectId),
      samplesAmount: samplesAmountMap.get(storage.id) || 0
    }
  })
  return Response.json({ data: storages })
}
