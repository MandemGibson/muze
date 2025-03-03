type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  return (
    <form className="fixed top-0 left-0 w-full h-screen backdrop-blur-md flex items-center justify-center z-20 bg-[#3D3F44]/50">
      <div className="absolute flex items-center justify-center top-0 w-full h-full">
        <div className="w-[85%] space-y-4 max-w-[23rem] rounded-xl bg-white p-8 pb-14">
          <h1 className="font-manrope font-semibold text-xl mt-5 text-blue-600">
            Important Notice
          </h1>
          <p className="font-manrope font-medium text-xs leading-[160%] text-black">
            Feature has not been implemented yet. Please check back later.
          </p>

          <p
            onClick={onClose}
            className="text-xs font-inter hover:cursor-pointer font-medium text-[#0369F0] underline"
          >
            Return to main screen
          </p>
        </div>
      </div>
    </form>
  );
};

export default Modal;
