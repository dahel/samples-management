import { getTestSamples } from 'database/testSamples';

export async function GET() {
  return Response.json({ data: getTestSamples() });
}
