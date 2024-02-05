import type { Patient } from 'types/patient.type';
import type { SampleStorage } from 'types/sampleStorage.type';
import sampleStorages from 'database/sampleStorages';
import { saveSample } from 'app/_utils/mongoClient';

type StorageConditions = SampleStorage['storageConditions'];

type ConditionResolver = (
  sample: Patient,
  conditions: StorageConditions
) => boolean;

const ageCheck: ConditionResolver = (sample, conditions) => {
  return sample.age >= conditions.ageMin && sample.age <= conditions.ageMax;
};

const matchExactCheck =
  (
    sampleKey: keyof Patient,
    storageKey: keyof StorageConditions
  ): ConditionResolver =>
  (sample, conditions) => {
    return sample[sampleKey] === conditions[storageKey];
  };

const resolvers = [
  ageCheck,
  matchExactCheck('districtId', 'patientDistrictId'),
  matchExactCheck('companyId', 'patientCompanyId'),
  matchExactCheck('visionDefectId', 'visionDefectId'),
];

const resolveSampleStorage = (sample: Patient): SampleStorage => {
  return sampleStorages.find((storage) => {
    return !resolvers.some((resolver) => {
      return !resolver(sample, storage.storageConditions);
    });
  });
};

export async function POST(req: Request) {
  const params = await req.json();
  const storage = resolveSampleStorage(params);

  if (!storage) {
    return Response.json({ error: 'Cannot resolve storage' }, { status: 422 });
  }

  const sampleId = await saveSample({
    ...params,
    storageId: storage.id,
  });

  return Response.json({
    data: {
      sample: {
        ...params,
        id: sampleId,
        location: storage.location,
      },
    },
  });
}
