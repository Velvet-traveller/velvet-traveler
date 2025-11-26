interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function ErrorModal({ isOpen, onClose, message }: ErrorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Error</h3>
          <p className="text-gray-600 text-center mb-6">
            {message || "Something went wrong. Please try again later."}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-[#8B6914] hover:bg-[#A67C1A] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

