import { Room } from './room.type';
import { Laboratory } from './laboratory.type';

export interface Rack {
  id: string;
  location: {
    laboratory: Laboratory;
    room: Room;
  },
  storageConditions: {
    ageMin: number;
    ageMax: number;
    cityId: string;
    cityDistrictId: string;
    companyId: string;
    vistionDefectId: string;
  },
  testSamplesIds: string[];
}
