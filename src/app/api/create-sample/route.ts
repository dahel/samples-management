import sampleStorages from "database/sampleStorages";
import { Patient } from "types/patient.type";

type StorageConditions = {
  ageMin: number,
  ageMax: number,
  patientCityId: string,
  patientDistrictId: string,
  patientCompanyId: string,
  vistionDefectId: string
}

type ConditionResolver = (sample: Patient, conditions: StorageConditions) => boolean;

const ageCheck: ConditionResolver = (sample, conditions) => {
  return sample.age <= conditions.ageMin && sample.age <= conditions.ageMax;
}

const matchExactCheck = (sampleKey: keyof Patient, storageKey: keyof StorageConditions): ConditionResolver => (sample, conditions) => {
  return sample[sampleKey] === conditions[storageKey];
}

const resolvers = [
  ageCheck,
  matchExactCheck('districtId', 'patientDistrictId'),
  matchExactCheck('companyId', 'patientCompanyId'),
  matchExactCheck('visionDefectId', 'vistionDefectId'),
]

const sampleStorageResolver = (sample: Patient) => {
  return sampleStorages.find(storage => {
    return !resolvers.some(resolver => {
      return !resolver(sample, storage.storageConditions)
    })
  });

}

export async function POST(req: Request) {
  const params = await req.json();

  console.log('############################## params');
  console.log(params);

  const storage = sampleStorageResolver(params);

  console.log('############################## storage');
  console.log(storage);

  return Response.json({ status: 200, data: {} });
}
