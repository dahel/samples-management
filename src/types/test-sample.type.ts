import { Patient } from "./patient.type";

export interface TestSample {
  id: string;
  locationId: string;
  patient: Patient;
}
