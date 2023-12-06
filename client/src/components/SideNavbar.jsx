import BatchForm from "./BatchForm";
import InstructorForm from "./InstructorForm";  
import MemberForm from "./MemberForm";
export default function Navbar() {
  return (
    <div className="w-96 h-full fixed top-16 -left-96 md:left-0  bg-blue-300">
      <div className=" w-full flex flex-col px-3 overflow-scroll">
        <h1 className="">Group Randomizer</h1>
        <BatchForm />
        <InstructorForm />
        <MemberForm />
      </div>
    </div>
  );
}
