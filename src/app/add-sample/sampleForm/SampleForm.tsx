'use client';

import { useForm, useWatch } from 'react-hook-form';
import { PatientCompany } from 'types/patientCompany.type';
import { PatientLocation } from 'types/patientLocation.type';
import Input from 'app/_components/input/Input';
import Select from 'app/_components/select/select';
import { Option, optionClasses } from '@mui/base/Option';
import { VisionDefect } from 'types/visionDefect.type';

interface Props {
  companies: PatientCompany[],
  locations: PatientLocation[],
  visionDefects: VisionDefect[],
}

const FormField = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className="form-control w-full max-w-xs relative pb-5">
      {children}
    </label>
  )
}
const ValidationError= ({ children }: { children: React.ReactNode }) => {
  return <span className="absolute bottom-0 right-1 label-text-alt text-error">{children}</span>
}

const SampleForm = ({ companies, locations, visionDefects }: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      patientFirstName: null,
      patientLastName: null,
      patientAge: null,
      locationId: '',
      districtId: '',
      companyId: '',
      visionDefectId: '',
    }
  });

  useWatch({ control, name: "locationId" }) 

  const locationId = getValues('locationId');
  const districts = locations.find(location => location.id === locationId)?.districts || [];

  return (
    <div>
      <h1 className="text-2xl pb-5">Add New Sample</h1>
      <div className="card w-96 shadow-xl p-10">
      <h5 className="text-xl pb-5">Patient information</h5>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit((data) => console.log(data))}>
      <FormField>
        <Input placeholder="Firstname" error={!!errors.patientFirstName} {...register('patientFirstName', { required: true })} />
        {errors.patientFirstName && <ValidationError>firstname is required</ValidationError> }
      </FormField>
      <FormField>
        <Input placeholder="Lastname" error={!!errors.patientLastName} {...register('patientLastName', { required: true })} />
        {errors.patientLastName && <ValidationError>lastname is required</ValidationError> }
      </FormField>
      <FormField>
        <Input type="number" placeholder="Age" error={!!errors.patientAge} {...register('patientAge', { required: true })} />
        {errors.patientAge && <ValidationError>age is required</ValidationError> }
      </FormField>
      <FormField>
        <Select value={locationId} error={!!errors.locationId} {...register('locationId', { required: true })}>
          <option value="">City</option>
          {
            locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)
          }
        </Select>
        {errors.locationId && <ValidationError>city is required</ValidationError> }
      </FormField>
      <FormField>
      <Select disabled={!locationId} error={!!locationId && !!errors.districtId} {...register('districtId', { required: true })}>
        <option value="">District</option>
        {
          districts.map(district => <option key={district.id} value={district.id}>{district.name}</option>)
        }
      </Select>
        {locationId && errors.districtId && <ValidationError>district is required</ValidationError> }
      </FormField>
      <FormField>
      <Select error={!!errors.companyId} {...register('companyId', { required: true })}>
        <option value="">Company</option>
        {
          companies.map(company => <option key={company.id} value={company.id}>{company.name}</option>)
        }
      </Select>
        {errors.companyId && <ValidationError>company is required</ValidationError> }
      </FormField>
      <FormField>
      <Select error={!!errors.visionDefectId} {...register('visionDefectId', { required: true })}>
        <option value="">Vision defect</option>
        {
          visionDefects.map(visionDefect => <option key={visionDefect.id} value={visionDefect.id}>{visionDefect.name}</option>)
        }
      </Select>
        {errors.visionDefectId && <ValidationError>vision defect is required</ValidationError> }
      </FormField>
      <button type="submit" className="btn">Add</button>
    </form>
    </div>
    </div>
  );
}

export default SampleForm;
