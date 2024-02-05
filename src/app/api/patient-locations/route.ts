import locations from 'database/patientsLocations';

export async function GET() {
  return Response.json({ data: locations });
}
