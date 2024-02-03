import locations from 'database/patientsLocations';

export async function GET() {
  return Response.json({ status: 200, data: locations });
}
