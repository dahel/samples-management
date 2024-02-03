import racks from 'databaseFixtures/racks';
import laboratories from 'backend/laboratories'; 
import { Rack } from 'types/sampleStorage.type';
import companies from 'database/patientsCompanies';

export async function GET() {
  return Response.json({ status: 200, data: companies });
}
