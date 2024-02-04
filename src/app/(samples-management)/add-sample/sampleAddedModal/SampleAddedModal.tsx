import { SampleWithLocationDetails } from "types/test-sample.type";

interface Props {
  sample?: SampleWithLocationDetails
}

const SampleAddedModal = ({ sample }: Props) => {
  return (
    <dialog id="sample-added-modal" className="modal">
      {sample && (
    <div className="modal-box">
    <h3 className="font-bold text-lg">Sample added</h3>
    <p className="py-4">
      <p>Your sample id is: <span className="text-lg">{sample?.id}</span></p>
      Location of your sample is:
      <br />
      {sample?.location.laboratory.name} - {sample?.location.room.name}
      <br />
      {sample?.location.laboratory.city}, {sample?.location.laboratory.address}
    </p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
      )}

  </dialog>
  )
}

export default SampleAddedModal;
