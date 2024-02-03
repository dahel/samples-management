import { Patient } from "./patient.type";

export interface TestSample extends Patient {
  id: string;
  storageId: string;
}
