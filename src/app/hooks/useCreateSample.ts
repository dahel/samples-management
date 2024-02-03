import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Patient } from "types/patient.type";
import { RestApiResponse } from "types/response.type";
import { TestSample } from "types/test-sample.type";

const useCreateSample = () => {
  // const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (patient: Patient) => {
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
    },
    onSuccess: () => {
      // todo store keys somewhere
      // queryClient.invalidateQueries({ queryKey: ['cart-items'] })
    }
  });
}

export default useCreateSample;
