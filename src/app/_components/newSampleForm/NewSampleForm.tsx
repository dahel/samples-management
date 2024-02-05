'use client';

import { useForm, useWatch, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { PatientCompany } from 'types/patientCompany.type';
import type { PatientLocation } from 'types/patientLocation.type';
import type { SampleWithLocationDetails } from 'types/test-sample.type';
import type { VisionDefect } from 'types/visionDefect.type';
import type { Patient } from 'types/patient.type';
import Input from 'app/_components/input/Input';
import Select from 'app/_components/select/Select';
import useCreateSample from 'app/hooks/useCreateSample';
import SampleAddedModal from '../sampleAddedModal/SampleModal';

interface Props {
  companies: PatientCompany[];
  locations: PatientLocation[];
  visionDefects: VisionDefect[];
}

const FormField = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className='form-control relative w-full max-w-xs pb-5'>
      {children}
    </label>
  );
};
const ValidationError = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className='label-text-alt absolute bottom-0 right-1 text-error'>
      {children}
    </span>
  );
};

const NewSampleForm = ({ companies, locations, visionDefects }: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<Patient>();
  const [createdSample, setCreatedSample] =
    useState<SampleWithLocationDetails>();
  const router = useRouter();
  const mutation = useCreateSample();
  const cityId = getValues('cityId');
  const districts =
    locations.find((location) => location.id === cityId)?.districts || [];
  const onSubmit: SubmitHandler<Patient> = (patientData) => {
    mutation.mutate(patientData, {
      onSuccess: ({ data }) => {
        setCreatedSample(data.sample);

        // @ts-ignore
        document.getElementById('sample-added-modal').showModal();
      },
    });
    router.refresh();
  };

  useWatch({ control, name: 'cityId' });

  return (
    <div>
      <div className='card w-[600px] p-10 shadow-xl'>
        <h5 className='pb-5 text-xl'>Patient information</h5>
        <form
          className='flex flex-col space-y-3'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex gap-5'>
            <div className='flex flex-1 flex-col gap-2'>
              <FormField>
                <Input
                  placeholder='Firstname'
                  error={!!errors.firstname}
                  aria-label='firstname'
                  {...register('firstname', { required: true })}
                />
                {errors.firstname && (
                  <ValidationError>firstname is required</ValidationError>
                )}
              </FormField>
              <FormField>
                <Input
                  placeholder='Lastname'
                  error={!!errors.lastname}
                  aria-label='lastname'
                  {...register('lastname', { required: true })}
                />
                {errors.lastname && (
                  <ValidationError>lastname is required</ValidationError>
                )}
              </FormField>
              <FormField>
                <Input
                  type='number'
                  placeholder='Age'
                  error={!!errors.age}
                  aria-label='age'
                  max="120"
                  {...register('age', { required: true })}
                />
                {errors.age && (
                  <ValidationError>age is required</ValidationError>
                )}
              </FormField>
            </div>
            <div className='flex flex-1 flex-col gap-2'>
              <FormField>
                <Select
                  value={cityId}
                  error={!!errors.cityId}
                  aria-label='cityId'
                  {...register('cityId', { required: true })}
                >
                  <option value=''>City</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </Select>
                {errors.cityId && (
                  <ValidationError>city is required</ValidationError>
                )}
              </FormField>
              <FormField>
                <Select
                  disabled={!cityId}
                  error={!!cityId && !!errors.districtId}
                  aria-label='districtId'
                  {...register('districtId', { required: true })}
                >
                  <option value=''>District</option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </Select>
                {cityId && errors.districtId && (
                  <ValidationError>district is required</ValidationError>
                )}
              </FormField>
              <FormField>
                <Select
                  error={!!errors.companyId}
                  aria-label='companyId'
                  {...register('companyId', { required: true })}
                >
                  <option value=''>Company</option>
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </Select>
                {errors.companyId && (
                  <ValidationError>company is required</ValidationError>
                )}
              </FormField>
              <FormField>
                <Select
                  error={!!errors.visionDefectId}
                  aria-label='visionDefectId'
                  {...register('visionDefectId', { required: true })}
                >
                  <option value=''>Vision defect</option>
                  {visionDefects.map((visionDefect) => (
                    <option key={visionDefect.id} value={visionDefect.id}>
                      {visionDefect.name}
                    </option>
                  ))}
                </Select>
                {errors.visionDefectId && (
                  <ValidationError>vision defect is required</ValidationError>
                )}
              </FormField>
            </div>
          </div>
          <button type='submit' className='btn'>
            {mutation.isPending ? (
              <span className='loading loading-spinner loading-xs' />
            ) : (
              'Add'
            )}
          </button>
        </form>
      </div>
      <SampleAddedModal sample={createdSample} title='Sample created!' />
    </div>
  );
};

export default NewSampleForm;
