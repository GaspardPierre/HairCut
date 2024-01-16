

interface ModalProps {
  selectedTime: { day: string, hour: string } | null;
  onConfirm: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedTime, onConfirm, onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
    <div className="bg-custom p-4 rounded">
    <p>
    Souhaitez-vous prendre un rendez-vous {selectedTime?.day} à {selectedTime?.hour} ?
    </p>
    <div className="flex justify-around mt-4">
    <button
             className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer"
             onClick={onConfirm}
           >
    Oui
    </button>
    <button
             className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer"
             onClick={onClose}
           >
    Non
    </button>
    </div>
    </div>
    </div>
    );
    };
    
    export default Modal;
    
    
