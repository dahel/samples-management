// todo convert to json
// align to ts
const citiesId = ['poznan', 'warsaw']

const sampleStorages = [
  // lab-a, room-a
  {
    id: '1',
    location: {
      laboratoryId: 'lab-a',
      roomId: 'room-a',
    },
    storageConditions: {
      ageMin: 0,
      ageMax: 12,
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-1'
    },
    testSamplesIds: []
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
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-1'
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
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-1'
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
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-2'
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
      patientDistrictId: 'winogrady',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-3'
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
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-1'
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
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-1'
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
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-1'
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
      patientDistrictId: 'praga',
      patientCompanyId: 'company-a',
      visionDefectId: 'vision-defect-2'
    },
    testSamplesIds: [],
  },
];

export default sampleStorages;
