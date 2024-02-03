import { getSamples } from "app/_utils/mongoClient";

export async function GET() {
  const testSamples = await getSamples();

  return Response.json({ data: testSamples });
}
