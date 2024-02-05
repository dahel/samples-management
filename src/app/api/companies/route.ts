import companies from 'database/patientsCompanies';

export async function GET() {
  return Response.json({ status: 200, data: companies });
}
