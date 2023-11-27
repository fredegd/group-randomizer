import BatchForm from "./BatchForm";
import InputMask from "./InputMask";
import InstructorForm from "./InstructorForm";  
export default function Navbar() {
  return (
    <div className="w-96 h-screen bg-blue-300">
      <div className=" w-full flex flex-col items-center justify-center">
        <h1 className="">Group Randomizer</h1>
        <BatchForm />
        <InstructorForm />
        <InputMask />
      </div>
    </div>
  );
}
