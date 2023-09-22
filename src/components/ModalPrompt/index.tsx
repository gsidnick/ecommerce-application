import { ReactElement } from 'react';

interface IModalProps {
  modalTitle: string;
  modalContent: string;
  isOpen: boolean;
  onConfirmClick: () => void;
  onCancelClick: () => void;
}

const ModalPrompt = ({
  modalTitle,
  modalContent,
  isOpen,
  onConfirmClick,
  onCancelClick,
}: IModalProps): ReactElement => (
  <div
    className={`fixed inset-0 ${
      isOpen ? 'flex' : 'hidden'
    } z-50 items-center justify-center bg-white bg-opacity-80`}
  >
    <div className="mx-4 rounded-lg border border-gray-100 bg-white p-8 opacity-100 shadow-lg">
      <div>
        <h2 className="mb-4 text-2xl font-bold">{modalTitle}</h2>
        <p>{modalContent}</p>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="mr-2 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            onClick={onConfirmClick}
          >
            Confirm
          </button>
          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={onCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ModalPrompt;
