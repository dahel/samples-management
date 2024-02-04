'use client';

import { useForm, useWatch, SubmitHandler } from 'react-hook-form';
import { PatientCompany } from 'types/patientCompany.type';
import { PatientLocation } from 'types/patientLocation.type';
import Input from 'app/_components/input/Input';
import Select from 'app/_components/select/select';
import { VisionDefect } from 'types/visionDefect.type';
import { Patient } from 'types/patient.type';
import useCreateSample from 'app/hooks/useCreateSample';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import Modal from 'react-modal';
// todo remove unused packages from package.json



interface Props {
  companies: PatientCompany[],
  locations: PatientLocation[],
  visionDefects: VisionDefect[],
}

const Msg = ({ closeToast, toastProps }: any) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

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
  } = useForm<Patient>({
    defaultValues: {
      firstname: 'asdf',
      lastname: 'asdfsadf',
      age: 11,
      cityId: 'poznan',
      districtId: 'winogrady',
      companyId: 'company-a',
      visionDefectId: 'vision-defect-1'
    }
  });
  let [isOpen, setIsOpen] = useState(true)
  const router = useRouter();
  const mutation = useCreateSample();
  const cityId = getValues('cityId');
  const districts = locations.find(location => location.id === cityId)?.districts || [];
  const onSubmit: SubmitHandler<Patient> = patientData => {
    mutation.mutate(patientData, {
      onSuccess: ({ data }) => {
        const { laboratory, room } = data.sample.storage.location
        // @ts-ignore
        document.getElementById('my_modal_1').showModal()
        // https://headlessui.com/react/dialog
      },
      onSettled: () => {
      },
    });
    router.refresh();
  };
  // todo prettier fo single quotes
  useWatch({ control, name: "cityId" });

  // todo check nextjs actions

  return (
    <div>
      <h1 className="text-2xl pb-5">Add New Sample</h1>
      <div className="card w-96 shadow-xl p-10">
      <h5 className="text-xl pb-5">Patient information</h5>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Input placeholder="Firstname" error={!!errors.firstname} {...register('firstname', { required: true })} />
        {errors.firstname && <ValidationError>firstname is required</ValidationError> }
      </FormField>
      <FormField>
        <Input placeholder="Lastname" error={!!errors.lastname} {...register('lastname', { required: true })} />
        {errors.lastname && <ValidationError>lastname is required</ValidationError> }
      </FormField>
      <FormField>
        <Input type="number" placeholder="Age" error={!!errors.age} {...register('age', { required: true })} />
        {errors.age && <ValidationError>age is required</ValidationError> }
      </FormField>
      <FormField>
        <Select value={cityId} error={!!errors.cityId} {...register('cityId', { required: true })}>
          <option value="">City</option>
          {
            locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)
          }
        </Select>
        {errors.cityId && <ValidationError>city is required</ValidationError> }
      </FormField>
      <FormField>
      <Select disabled={!cityId} error={!!cityId && !!errors.districtId} {...register('districtId', { required: true })}>
        <option value="">District</option>
        {
          districts.map(district => <option key={district.id} value={district.id}>{district.name}</option>)
        }
      </Select>
        {cityId && errors.districtId && <ValidationError>district is required</ValidationError> }
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

    <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  );
}

export default SampleForm;
