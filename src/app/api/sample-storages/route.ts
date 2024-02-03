import sampleStorages from 'database/sampleStorages';

// todo replace all 'racks' with 'sample-storage'

export async function GET() {
  return Response.json({ data: sampleStorages })
}
