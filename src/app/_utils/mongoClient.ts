import mongoose from 'mongoose';
import { TestSample } from 'types/test-sample.type';

export const disconnect = async () => {
  mongoose.disconnect();
}


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

export const TestSampleModel = mongoose.models.TestSample || mongoose.model("TestSample", TestSampleSchema);

export const saveSample = async (params: TestSample) => {
  await mongoose.connect(process.env.MONGODB_URL)

  const sample = new TestSampleModel(params);

  await sample.save();

  await mongoose.disconnect();
}

export const getSamples = async () => {
  await mongoose.connect(process.env.MONGODB_URL)

  const testSamples = (await TestSampleModel.find({})).flat();

  await mongoose.disconnect();

  return testSamples as TestSample[];

}
