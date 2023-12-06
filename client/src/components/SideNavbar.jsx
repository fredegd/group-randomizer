import BatchForm from "./BatchForm";
import InstructorForm from "./InstructorForm";
import MemberForm from "./MemberForm";
export default function SideNavbar() {
  return (
    <div className="w-96  fixed top-16 -left-96 md:left-0  bg-blue-300">
      <div className=" w-full h-screen flex flex-col px-3 overflow-scroll">
        <h1 className="">Group Randomizer</h1>
        <BatchForm  />
        <InstructorForm  />
        <MemberForm  />
      </div>
    </div>
  );
}
