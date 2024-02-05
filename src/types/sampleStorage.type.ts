import { Room } from './room.type';
import { Laboratory } from './laboratory.type';

export interface SampleStorage {
  id: string;
  location: {
    laboratory: Laboratory;
    room: Room;
  };
  storageConditions: {
    ageMin: number;
    ageMax: number;
    patientDistrictId: string;
    patientCompanyId: string;
    visionDefectId: string;
  };
  patientDisctrictName: string;
  visionDefectName: string;
  patientCompanyName: string;
  samplesAmount: number;
}
