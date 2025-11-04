import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";



export default function EditResume(){


//  const { isOpen, openModal, closeModal } = useModal();
//       const handleSave = () => {
//     // Handle save logic here
//     console.log("Saving changes...");
//     closeModal();
//   };

    return(
       <>
           <button
            // onClick={openModal}
            className="px-[1.2vw] py-[1vh] rounded-2xl text-xs border text-gray hover:bg-gray-200 hover:scale-110"
          >
            Resume
          </button>
          
       </>
    )
}