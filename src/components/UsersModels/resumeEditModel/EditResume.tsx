import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import Input from "../../form/input/InputField";
import Label from "../../form/Label";



export default function EditResume(){


 const { isOpen, openModal, closeModal } = useModal();
      const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

    return(
       <>
           <button
            onClick={openModal}
            className="px-[1.2vw] py-[1vh] rounded-2xl text-xs border text-gray hover:bg-gray-200 hover:scale-110"
          >
             Edit 
          </button>
              <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4 ">
        <div className="no-scrollbar  relative w-full max-w-[700px]   overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit User Information
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[340px] overflow-y-auto px-2 pb-3">
            
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                   Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label> Name</Label>
                    <Input type="text" defaultValue="" />
                  </div>


                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" defaultValue=" " />
                  </div>

                  <div className="col-span-2 lg:col-span-1 ">
                    <Label>Password</Label>
                    <Input type="password" defaultValue="" />
                  </div>

                  <div className="col-span-2 lg:col-span-1  flex flex-col justify-between ">
                    <Label>Role</Label>
                    <select name="role" className=" w-full py-[1.3vh] border-2  rounded-md px-3 outline-gray-200 " >
                            <option value="admin">Admin </option>
                               <option value="hr">Hr </option>
                                  <option value="Client">client</option>
                          
                          </select>
                    {/* <Input type="text" defaultValue="Team Manager" /> */}
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3  px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
               Save Changes
              </Button>
            </div>
          </form>
        </div>
          </Modal>
       
       </>
    )
}