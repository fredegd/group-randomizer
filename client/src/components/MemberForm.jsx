

import { useForm } from "react-hook-form";
import { useAppState } from "../context/AppStateContext";

import { UserPlusIcon, UserMinusIcon } from "@heroicons/react/24/solid";


export default function InputMask() {
  const { batch, setBatch } = useAppState();
  console.log("rendering member form");
  const classMembers = batch.members;
  console.log("members are : ", classMembers);


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "is the data");
    const updatedMembers = [...classMembers, { name: data.memberName }];
    setBatch((batch) => {
      const updatedBatch = { ...batch, members: updatedMembers };
      localStorage.setItem("batch", JSON.stringify(updatedBatch));
      return updatedBatch;
    });

    reset();
  };

  const removeMember = (mem) => {
    console.log(mem);
    const newArrayData = classMembers.filter(
      (member) => member.name !== mem.name
    );

    setBatch((batch) => {
      const updatedBatch = { ...batch, members: newArrayData };
      localStorage.setItem("batch", JSON.stringify(updatedBatch));

      return updatedBatch;
    });
    console.log(mem, " was removed");
  };

  return (
    <div className="w-full mt-6  ">
      <h3 className="pl-11  text-gray-600 text-sm transition-all">Students:</h3>
      <ul className="list-disc pl-10 ">
        {classMembers.map((mem, index) => {
          return (
            <li
              key={index}
              className="flex justify-between  mr-5 p-1 text-lg
            hover:bg-gradient-to-r from-blue-300 from-30% to-blue-400
            "
            >
              <div>{mem.name}</div>
              <div
                className="  text-red-500/20 hover:text-red-500 cursor-pointer "
                onClick={() => removeMember(mem)}
              >
                <UserMinusIcon className="h-8 w-8 " />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex ">
        <UserPlusIcon className="h-8 w-8 text-blue-500" />
        <form
          className="w-10/12 flex max-w-md gap-x-4 relative"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            {...register("memberName")}
            id="memberName"
            name="memberName"
            required
            className="bg-transparent
            peer h-10 w-full 
            placeholder-shown:border-b-2
            placeholder-shown:border-gray-300
            px-3
            text-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
            placeholder="Student"
          />
          <label
            htmlFor="memberName"
            className="px-3 absolute left-0 -top-4 text-gray-600  transition-all 
            peer-placeholder-shown:text-md
            peer-placeholder-shown:text-gray-600 
            peer-placeholder-shown:top-1.5 
            peer-focus:-top-4
           peer-focus:text-gray-600 peer-focus:text-sm"
          >
            new Member:
          </label>
        </form>
      </div>
    </div>
  );
}
