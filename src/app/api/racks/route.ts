import racks from 'databaseFixtures/racks';
import laboratories from 'databaseFixtures/laboratories'; 
import { Rack } from 'types/rack.type';

export async function GET() {
  return Response.json({ status: 200, data: racks.map((rack) => {
    const laboratory = laboratories.find(laboatory => laboatory.id === rack.location.laboratoryId);
    const room = laboratory?.rooms.find(room => room.id === rack.location.roomId);

    return {
      ...rack,
      location: {
        laboratory,
        room,
      }
    };
  }) })
}
