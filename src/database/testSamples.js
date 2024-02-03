// todo add description that this is backend abstraction so ou didn't pay much attention to typing it
const testSamples = [];

export const addTestSample = (sample) => {
  console.log('############################## adding sample');
  testSamples.push(sample);
  console.log('############################## current sample amount', testSamples.length);
}

export const getTestSamples = () => {
  return testSamples;
}
