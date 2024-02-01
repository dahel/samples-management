'use client';

import { useForm } from 'react-hook-form';
import { PatientCompany } from 'types/patientCompany.type';
import { PatientLocation } from 'types/patientLocation.type';

interface Props {
  companies: PatientCompany[],
  locations: PatientLocation[],
}

const SampleForm = ({ companies, locations }: Props) => {
  console.log('############################## locations', locations);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const a = useForm({
    defaultValues: {
      patientAge: '',
      locationId: '',
      
    }
  });

  console.log('############################## getValues', getValues('locationId'));

  const selectedLocationId = getValues('locationId');
  const districts = locations.find(location => location.id === selectedLocationId)?.districts || [];

  console.log('############################## districts', districts);

  return (
    <>
      <h3 className="text-2xl pb-5">Add new sample</h3>
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit((data) => console.log(data))}>
      <input className="input input-bordered w-full max-w-xs" placeholder="patient age" type="number" {...register('firstName')} />
      <select className="select select-bordered w-full max-w-xs" {...register('companyId')}>
        {
          companies.map(company => {
            return <option key={company.id} value={company.id}>{company.name}</option>
          })
        }
      </select>
      <select className="select select-bordered w-full max-w-xs" {...register('locationId')}>
        {
          locations.map(location => {
            return <option key={location.id} value={location.id}>{location.name}</option>
          })
        }
      </select>
      <select className="select select-bordered w-full max-w-xs" {...register('districtId')}>
        <option value="placeholder" disabled hidden>Choose a drink</option>
        {
          districts.map(disctrict => {
            return <option key={disctrict.id} value={disctrict.id}>{disctrict.name}</option>
          })
        }
      </select>

      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
    </>
  );
}

export default SampleForm;
