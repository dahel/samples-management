// todo add description that this is backend abstraction so ou didn't pay much attention to typing it
const testSamples = [];

export const addSample = (sample) => {
  testSamples.push(sample);
}

export const getSamples = () => {
  return testSamples;
}
