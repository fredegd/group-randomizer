import { useForm } from "react-hook-form";
import { useState } from "react";

import GroupsAmountSelect from "./GroupsAmountSelect";

export default function ProjectForm({
  projects,
  batch,
  setBatch,
  setDisplayForm,
}) {
  const [groupsAmount, setGroupsAmount] = useState(0);

  console.log("rendering ProjectForm");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "is the data");
    const projectsUpdate = [
      {
        index: projects.length + 1,
        title: data.projectName,
        description: data.projectDescription,
        groups: [], ///TODO: add the group randomizer function here
      },
      ...projects,
    ];
    setBatch((batch) => {
      const updatedBatch = { ...batch, projects: projectsUpdate };
      return updatedBatch;
    });
    localStorage.setItem("batch", JSON.stringify(batch));
    reset();
  };

  const addProject = () => {
    console.log(project);
  };

  const abort = () => {
    setDisplayForm(false);
  };

  return (
    <div className="flex items-center border border-slate-500 rounded-xl p-4 pt-5">
      <form
        className="w-full  flex flex-col items-end justify-start max-w-md gap-x-4 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-96 flex flex-col gap-5">
          <div className="relative w-full">
            <input
              type="text"
              {...register("projectName")}
              id="projectName"
              name="projectName"
              required
              className="bg-transparent
            hover:bg-blue-400 focus:bg-blue-400
           
            peer h-10 w-full 
            placeholder-shown:border-b-2
            placeholder-shown:border-gray-300
            px-3
            text-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
              placeholder="New Project"
            />
            <label
              htmlFor="projectName"
              className="px-3 absolute left-0 -top-4 text-gray-600 text-sm transition-all 

            peer-placeholder-shown:text-lg
            peer-placeholder-shown:text-gray-600 
            peer-placeholder-shown:top-1.5 
            peer-focus:-top-4
            peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Project Name:
            </label>
          </div>

          <div className="relative w-full">
            <textarea
              {...register("projectDescription")}
              rows="5"
              id="projectDescription"
              name="projectDescription"
              required
              className="
             bg-transparent
            hover:bg-blue-400 focus:bg-blue-400
            peer w-full 
            placeholder-shown:border-b-2
            placeholder-shown:border-gray-300
            px-3
            text-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
              placeholder="Description"
            />
            <label
              htmlFor="projectDescription"
              className="px-3 absolute left-0 -top-4 text-gray-600 text-sm transition-all 
            peer-placeholder-shown:text-lg
            peer-placeholder-shown:text-gray-600 
            peer-placeholder-shown:top-1.5 
            peer-focus:-top-4
            peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Description:
            </label>
          </div>
        </div>
        <div>
          <GroupsAmountSelect
            groupsAmount={groupsAmount}
            setGroupsAmount={setGroupsAmount}
          />
        </div>
        <div className=" w-full flex justify-between">
          <button
            type="submit"
            className="   border rounded-lg border-blue-400 p-3 mt-3 hover:bg-blue-300 "
          >
            {" "}
            shuffle Groups and Save
          </button>
          <button
            onClick={abort}
            className="  border rounded-lg border-red-400 p-3 mt-3  hover:bg-red-300 "
          >
            {" "}
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
