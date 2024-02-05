import { useMutation } from '@tanstack/react-query';
import type { RestApiResponse } from 'types/response.type';
import type { SampleWithLocationDetails } from 'types/test-sample.type';

const useGetSample = () => {
  return useMutation({
    mutationFn: async (
      sampleId: string
    ): Promise<RestApiResponse<SampleWithLocationDetails>> => {
      const response = await fetch(`api/test-samples/${sampleId}`);

      if (!response.ok) {
        throw new Error('Failed to get sample');
      }

      return response.json();
    },
  });
};

export default useGetSample;
