import sampleStorages from "database/sampleStorages";
import { Patient } from "types/patient.type";
import { SampleStorage } from "types/sampleStorage.type";
import { addTestSample } from 'database/testSamples';
import { revalidateTag, revalidatePath } from 'next/cache'

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
    // todo handle that error with message about bad age
    return Response.json({ status: 400, error: 'Cannot resolve storage'}, { status: 422 });
  }

  const sample = {
    ...params,
    storage,
  }

  addTestSample({
    ...params,
    storageId: storage.id
  });

  // revalidateTag('sample-storages');
  revalidatePath('sample-storages');
  // console.log('############################## will call revalidate page');
  revalidatePath('/sample-storages', 'page');
  revalidatePath('sample-storages', 'page');
  revalidatePath('/search', 'page');
  revalidatePath('/search', 'layout');
  revalidatePath('search', 'page');
  revalidatePath('search', 'layout');

  return Response.json({ data: {
    sample: {
      ...params,
      storage
    }
  }});
}
