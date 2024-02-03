// todo convert to json
// align to ts
import laboratories from './laboratories';

const conditions =  [ 
  { key: 'age', values: [ {ageMin: 0, ageMax: 12}, {ageMin: 13, ageMax: 17}, {ageMin: 18, ageMax: 120} ] },
  { key: 'districId', values: [ 'winogrady', 'wilda', 'praga', 'tarchomin' ] },
  { key: 'companyId', values: [ 'company-a', 'company-b' ] },
  { key: 'visionDefectId', values: [ 'vision-defect-1', 'vision-defect-2' ] },
]

const generateConditionsCombinations = (conditions) => {
  if (conditions.length === 0) {
    return [[]]
  }
  let [current, ...rest] = conditions;
  let combinations = generateConditionsCombinations(rest);

  return current.values.reduce((a, string) => {
    return [ ...a, ...combinations.map(combination => [string, ...combination])];
  }, []);
}

const combinations = generateConditionsCombinations(conditions);

const sampleStorages = combinations.map(([age, patientDistrictId, patientCompanyId, visionDefectId ], index) => {
  const laboratory = laboratories.find(lab => {
    return lab.rooms.find(room => {
      return room.patientDistrictId === patientDistrictId;
    })
  });
  const room = laboratory.rooms.find(room => {
    return room.patientDistrictId === patientDistrictId;
  })

  return {
      storageConditions: {
        ageMin: age.ageMin,
        ageMax: age.ageMax,
        patientDistrictId,
        patientCompanyId,
        visionDefectId,
      },
      location: {
        laboratory,
        room,
      },
  }
});

const sortedStorages = [
  ...sampleStorages.filter(storage => {
    return storage.location.laboratory.id === laboratories[0].id
  }),
  ...sampleStorages.filter(storage => {
    return storage.location.laboratory.id === laboratories[1].id
  })
].map((storage, index) => {
  return {
    id: `${index + 1}`,
    ...storage,
  }
});

export default sortedStorages;
