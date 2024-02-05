import mongoose from 'mongoose';
import type { TestSample } from 'types/test-sample.type';

export const disconnect = async () => {
  mongoose.disconnect();
};

const Schema = mongoose.Schema;

const TestSampleSchema = new Schema<TestSample>({
  firstname: String,
  lastname: String,
  age: Number,
  cityId: String,
  districtId: String,
  companyId: String,
  visionDefectId: String,
  storageId: String,
});

export const TestSampleModel =
  mongoose.models.TestSample || mongoose.model('TestSample', TestSampleSchema);

export const saveSample = async (params: TestSample) => {
  await mongoose.connect(process.env.MONGODB_URL);

  const sample = new TestSampleModel(params);

  await sample.save();

  await mongoose.disconnect();

  return sample._id;
};

export const getSamples = async () => {
  await mongoose.connect(process.env.MONGODB_URL);

  const testSamples = (await TestSampleModel.find({})).flat();

  await mongoose.disconnect();

  return testSamples as TestSample[];
};

export const getSample = async (id: string) => {
  await mongoose.connect(process.env.MONGODB_URL);

  if (!mongoose.isValidObjectId(id)) {
    return null;
  }

  const testSampleResult = (await TestSampleModel.find({ _id: id })).flat();

  if (!testSampleResult || testSampleResult.length === 0) {
    return null;
  }

  await mongoose.disconnect();

  return {
    ...testSampleResult[0]._doc,
    id: testSampleResult[0]._doc._id,
  } as TestSample;
};
