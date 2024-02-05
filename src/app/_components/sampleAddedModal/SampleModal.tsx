import type { SampleWithLocationDetails } from 'types/test-sample.type';

interface Props {
  sample?: SampleWithLocationDetails;
  title: string;
}

const SampleModal = ({ sample, title }: Props) => {
  return (
    <dialog id='sample-added-modal' className='modal'>
      {sample && (
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='py-4'>
            Your sample id is: <span className='text-lg'>{sample?.id}</span>
            <br />
            Location of your sample is:
            <br />
            {sample?.location.laboratory.name} - {sample?.location.room.name}
            <br />
            {sample?.location.laboratory.city},{' '}
            {sample?.location.laboratory.address}
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default SampleModal;
