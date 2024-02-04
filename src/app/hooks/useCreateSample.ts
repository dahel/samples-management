import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Patient } from "types/patient.type";
import { RestApiResponse } from "types/response.type";
import { SampleWithLocationDetails } from "types/test-sample.type";

interface ResponseData {
  sample: SampleWithLocationDetails
}

const useCreateSample = () => {
  return useMutation({
    mutationFn: async (patient: Patient): Promise<RestApiResponse<ResponseData>> => {
      const response  = await fetch('api/create-sample', {
        method: 'POST',
        body: JSON.stringify(patient),
      });
    
      if (!response.ok) {
        // todo handle error
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to create sample')
      }
    
      return response.json();
    }
  });
}

export default useCreateSample;
