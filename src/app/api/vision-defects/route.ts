import visionDefects from 'database/visionDefects';

export async function GET() {
  return Response.json({ status: 200, data: visionDefects });
}
