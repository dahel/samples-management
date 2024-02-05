import { http, HttpResponse, StrictResponse } from 'msw';
import { Patient } from 'types/patient.type';
import { SampleWithLocationDetails } from 'types/test-sample.type';
import { RestApiResponse } from 'types/response.type';

export const handlers = [
  http.post('/api/create-sample', async ({ request }): Promise<StrictResponse<RestApiResponse<{ sample: SampleWithLocationDetails }>>> => {
    const sampleData = (await request.json()) as Patient;

    return HttpResponse.json({
      status: 200,
      data: {
        sample: {
          ...sampleData,
        id: 'mock sample id',
        storageId: 'mock storage id',
        location: {
          laboratory: {
            id: 'lab id',
            name: 'mock lab name',
            city: 'mock city',
            address: 'mock address',
            rooms: [
              {
                id: 'mock room id',
                name: 'mock room'
              }
            ]
          },
          room: {
            id: 'mock room id',
            name: 'mock room'
          }
        },
        }
      }
    })
  }),
]
