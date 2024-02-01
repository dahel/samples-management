import racks from 'databaseFixtures/racks';
import laboratories from 'databaseFixtures/laboratories'; 
import { Rack } from 'types/rack.type';
import companies from 'databaseFixtures/patientsCompanies';

export async function GET() {
  return Response.json({ status: 200, data: companies });
}
