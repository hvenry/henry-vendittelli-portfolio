import { FaGithub } from "react-icons/fa";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({
  isOpen,
  onClose
}: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-primary p-8 border border-primary basic-glow">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
          <FaGithub className="size-6" />
          Authentication Required
        </h2>
        <p className="mb-4 text-sm sm:text-lg">Please authenticate via GitHub to leave a signature ヽ(`Д´)ﾉ </p>
        <div className="flex justify-center gap-4 text-md sm:text-lg">
          <button
            className="px-4 py-2 border border-primary transition-transform duration-100 ease-in-out hover:scale-105"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
