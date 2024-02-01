// todo convert to json
// align to ts
const racks = [
  {
    id: '1',
    location: {
      laboratoryId: 'lab-a',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 0,
      ageMax: 12,
      patientCityId: 'poznan',
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-1'
    },
    testSamplesIds: [
      '1'
    ]
  },
  {
    id: '2',
    location: {
      laboratoryId: 'lab-a',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 13,
      ageMax: 17,
      patientCityId: 'poznan',
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-1'
    },
    testSamplesIds: [],
  },
  {
    id: '3',
    location: {
      laboratoryId: 'lab-a',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 18,
      ageMax: 100,
      patientCityId: 'poznan',
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-1'
    },
    testSamplesIds: [],
  },
  {
    id: '4',
    location: {
      laboratoryId: 'lab-a',
      roomId: 'room-b',
    },
    storageConditions: {
      ageMin: 18,
      ageMax: 100,
      patientCityId: 'poznan',
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-2'
    },
    testSamplesIds: [],
  },
  {
    id: '5',
    location: {
      laboratoryId: 'lab-a',
      roomId: 'room-b',
    },
    storageConditions: {
      ageMin: 18,
      ageMax: 100,
      patientCityId: 'poznan',
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-3'
    },
    testSamplesIds: [],
  },
  {
    id: '6',
    location: {
      laboratoryId: 'lab-b',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 0,
      ageMax: 12,
      patientCityId: 'warsaw',
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-1'
    },
    testSamplesIds: [],
  },
  {
    id: '7',
    location: {
      laboratoryId: 'lab-b',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 13,
      ageMax: 17,
      patientCityId: 'warsaw',
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-1'
    },
    testSamplesIds: [],
  },
  {
    id: '8',
    location: {
      laboratoryId: 'lab-b',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 18,
      ageMax: 100,
      patientCityId: 'warsaw',
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-1'
    },
    testSamplesIds: [],
  },
  {
    id: '9',
    location: {
      laboratoryId: 'lab-b',
      roomId: 'room-b',
    },
    storageConditions: {
      ageMin: 18,
      ageMax: 100,
      patientCityId: 'warsaw',
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      vistionDefectId: 'vision-defect-2'
    },
    testSamplesIds: [],
  },
];

export default racks;
