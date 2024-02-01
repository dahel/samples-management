import locations from 'databaseFixtures/patientsLocations';

export async function GET() {
  return Response.json({ status: 200, data: locations });
}
