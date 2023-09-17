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
    <div className="p-4 bg-white border border-black opacity-100 border-1 rounded-xl">
      <div>
        <h2 className="mb-4 text-2xl font-bold">{modalTitle}</h2>
        <p>{modalContent}</p>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="px-4 py-2 mr-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
            onClick={onConfirmClick}
          >
            Confirm
          </button>
          <button
            type="button"
            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
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
