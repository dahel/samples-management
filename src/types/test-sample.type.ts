import { Patient } from "./patient.type";
import { Laboratory } from "./laboratory.type";
import { Room } from "./room.type";

export interface TestSample extends Patient {
  id: string;
  storageId: string;
}

export type SampleWithLocationDetails = TestSample & { location: {
  laboratory: Laboratory;
  room: Room;
}} ;
