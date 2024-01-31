import racks from '@/databaseFixtures/racks'

export async function GET() {
  console.log('############################## calling route');
  return Response.json({ status: 200, data: racks })
}
