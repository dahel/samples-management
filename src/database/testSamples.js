// todo add description that this is backend abstraction so ou didn't pay much attention to typing it
const testSamples = [
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    patientAge: 18,
    patientCompanyId: 'company-a',
    patientCityId: 'poznan',
    patientCityDistrictId: 'winogrady',
    vistionDefectId: 'vision-defect-1',
  }
]

export const addSample = (sample) => {
  testSamples.push(sample);
}

export const getSamples = () => {
  return testSamples;
}
