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
  let combinations = generateConditionsCombinations(rest)
  return current.values.reduce((a, string) => {
    return [ ...a, ...combinations.map(combination => [string, ...combination])];
  }, [])
}

const combinations = generateConditionsCombinations(conditions);

const sampleStorages = combinations.map(([age, patientDistrictId, patientCompanyId, vistionDefectId ], index) => {
  const laboratory = laboratories.find(lab => {
    return lab.rooms.find(room => {
      return room.patientDistrictId === patientDistrictId;
    })
  });
  const room = laboratory.rooms.find(room => {
    return room.patientDistrictId === patientDistrictId;
  })

  return {
      id: `${index + 1}`,
      storageConditions: {
        ageMin: age.ageMin,
        ageMax: age.ageMax,
        patientDistrictId,
        patientCompanyId,
        vistionDefectId,
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
]

// const sampleStorages = [
//   {
//     id: '1',
//     location: {
//       laboratoryId: 'lab-a',
//       roomId: 'room-a',
//     },
//     storageConditions: {
//       ageMin: 0,
//       ageMax: 12,
//       patientDistrictId: 'winogrady',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-1'
//     },
//     testSamplesIds: []
//   },
//   {
//     id: '2',
//     location: {
//       laboratoryId: 'lab-a',
//       roomId: 'room-a',
//     },
//     storageConditions: {
//       ageMin: 13,
//       ageMax: 17,
//       patientDistrictId: 'winogrady',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-1'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '3',
//     location: {
//       laboratoryId: 'lab-a',
//       roomId: 'room-a',
//     },
//     storageConditions: {
//       ageMin: 18,
//       ageMax: 100,
//       patientCityId: 'poznan',
//       patientDistrictId: 'winogrady',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-1'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '4',
//     location: {
//       laboratoryId: 'lab-a',
//       roomId: 'room-b',
//     },
//     storageConditions: {
//       ageMin: 18,
//       ageMax: 100,
//       patientDistrictId: 'winogrady',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-2'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '5',
//     location: {
//       laboratoryId: 'lab-a',
//       roomId: 'room-b',
//     },
//     storageConditions: {
//       ageMin: 18,
//       ageMax: 100,
//       patientDistrictId: 'winogrady',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-3'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '6',
//     location: {
//       laboratoryId: 'lab-b',
//       roomId: 'room-a',
//     },
//     storageConditions: {
//       ageMin: 0,
//       ageMax: 12,
//       patientDistrictId: 'praga',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-1'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '7',
//     location: {
//       laboratoryId: 'lab-b',
//       roomId: 'room-a',
//     },
//     storageConditions: {
//       ageMin: 13,
//       ageMax: 17,
//       patientDistrictId: 'praga',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-1'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '8',
//     location: {
//       laboratoryId: 'lab-b',
//       roomId: 'room-a',
//     },
//     storageConditions: {
//       ageMin: 18,
//       ageMax: 100,
//       patientCityId: 'warsaw',
//       patientDistrictId: 'praga',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-1'
//     },
//     testSamplesIds: [],
//   },
//   {
//     id: '9',
//     location: {
//       laboratoryId: 'lab-b',
//       roomId: 'room-b',
//     },
//     storageConditions: {
//       ageMin: 18,
//       ageMax: 100,
//       patientDistrictId: 'praga',
//       patientCompanyId: 'company-a',
//       vistionDefectId: 'vision-defect-2'
//     },
//     testSamplesIds: [],
//   },
// ];

export default sortedStorages;
