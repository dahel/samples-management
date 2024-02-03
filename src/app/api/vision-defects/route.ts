import visionDefects from 'database/visionDefects';

export async function GET() {
  return Response.json({ data: visionDefects });
}
