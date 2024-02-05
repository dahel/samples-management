import { useMutation } from '@tanstack/react-query';
import type { Patient } from 'types/patient.type';
import type { RestApiResponse } from 'types/response.type';
import type { SampleWithLocationDetails } from 'types/test-sample.type';

interface ResponseData {
  sample: SampleWithLocationDetails;
}

const useCreateSample = () => {
  return useMutation({
    mutationFn: async (
      patient: Patient
    ): Promise<RestApiResponse<ResponseData>> => {
      const response = await fetch('api/create-sample', {
        method: 'POST',
        body: JSON.stringify(patient),
      });

      if (!response.ok) {
        throw new Error('Failed to create sample');
      }

      return response.json();
    },
  });
};

export default useCreateSample;
