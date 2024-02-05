'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { SampleWithLocationDetails } from 'types/test-sample.type';
import Input from 'app/_components/input/Input';
import useGetSampleMutation from 'app/hooks/useGetSample';
import SampleAddedModal from 'app/_components/sampleAddedModal/SampleModal';

type Inputs = {
  sampleId: string;
};

const SearchSampleForm = () => {
  const getSampleMutation = useGetSampleMutation();
  const [foundSample, setFoundSample] = useState<SampleWithLocationDetails>();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getSampleMutation.mutate(data.sampleId, {
      onSuccess: (response) => {
        console.log('############################## response', response.data);
        setFoundSample(response.data);
        // @ts-ignore
        document.getElementById('sample-added-modal').showModal();
      },
      onError: () => alert('sample not found'),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='Enter sample id'
          error={!!errors.sampleId}
          aria-label='age'
          {...register('sampleId', { required: true })}
        />
        <button type='submit' className='btn ml-4'>
          {getSampleMutation.isPending ? (
            <span className='loading loading-spinner loading-xs' />
          ) : (
            'Find!'
          )}
        </button>
      </form>
      <SampleAddedModal sample={foundSample} title='Sample found!' />
    </>
  );
};

export default SearchSampleForm;
