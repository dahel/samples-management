import { Room } from './room.type';

export interface Laboratory {
  id: string;
  name: string;
  city: string;
  address: string;
  rooms: Room[];
}
