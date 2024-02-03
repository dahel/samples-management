import { Patient } from "./patient.type";

export interface TestSample {
  id: string;
  storageId: string;
  patient: Patient;
}
