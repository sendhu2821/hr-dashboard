const ConfirmModal = ({
  title = "Confirm",
  message,
  approve,
  decline,
  onCancel,
  onConfirm,
}: {
  title?: string;
  message: string;
  approve: string;
  decline: string;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-3 rounded-md shadow-md w-[90%] max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Remove Bookmark</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className=" px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100 transition"
          >
            {decline}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            {approve}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmModal;
