import sampleStorages from "database/sampleStorages";
import { Patient } from "types/patient.type";
import { addSample } from 'database/testSamples';
import { TestSample } from "types/test-sample.type";
import { SampleStorage } from "types/sampleStorage.type";

// todo rename all sample to testSample

type StorageConditions = SampleStorage['storageConditions'];

type ConditionResolver = (sample: Patient, conditions: StorageConditions) => boolean;

const ageCheck: ConditionResolver = (sample, conditions) => {
  return sample.age >= conditions.ageMin && sample.age <= conditions.ageMax;
}

const matchExactCheck = (sampleKey: keyof Patient, storageKey: keyof StorageConditions): ConditionResolver => (sample, conditions) => {
  return sample[sampleKey] === conditions[storageKey];
}

const resolvers = [
  ageCheck,
  matchExactCheck('districtId', 'patientDistrictId'),
  matchExactCheck('companyId', 'patientCompanyId'),
  matchExactCheck('visionDefectId', 'visionDefectId'),
]

const resolveSampleStorage = (sample: Patient): SampleStorage => {
  return sampleStorages.find(storage => {
    return !resolvers.some(resolver => {
      return !resolver(sample, storage.storageConditions)
    })
  });

}

export async function POST(req: Request) {
  const params = await req.json();
  const storage = resolveSampleStorage(params);

  if (!storage) {
    // todo handle that error
    return Response.json({ status: 400, error: 'Cannot resolve storage'}, { status: 422 });
  }

  return Response.json({ data: {
    ...params,
    storage,
  }});
}