import { useState } from "react";
import { useForm } from "react-hook-form";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function ProjectForm({ projects, setProjects, setDisplayForm }) {
  console.log("rendering ProjectForm");

  // const [projects, setProjects] = useState(() => {
  //   const storedProjects = localStorage.getItem("projects");
  //   return storedProjects && storedProjects !== "undefined"
  //     ? JSON.parse(storedProjects)
  //     : [];
  // });

  console.log(projects.length);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "is the data");
    const updated = [
      {
        index: projects.length + 1,
        title: data.projectName,
        description: data.projectDescription,
        groups: [],
      },
      ...projects,
    ];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    reset();
  };

  const addProject = () => {
    console.log(project);
  };


  const abort = () => { 
    setDisplayForm(false)
  }


  return (
    <div className="flex items-center mt-8">
      <form
        className="w-full  flex flex-col items-end justify-start max-w-md gap-x-4 relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-5">
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
            text-3xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
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
              New Project
            </label>
          </div>

          <div className="relative w-full">
            <input
              type="text"
              {...register("projectDescription")}
              id="projectDescription"
              name="projectDescription"
              required
              className="bg-transparent
            hover:bg-blue-400 focus:bg-blue-400
            peer h-10 w-full 
            placeholder-shown:border-b-2
            placeholder-shown:border-gray-300
            px-3
            text-3xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
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
              Description
            </label>
          </div>
        </div>
        <div className=" w-full flex justify-between">
          <button
            type="submit"
            className="   border rounded-lg border-blue-400 p-3 my-3 hover:bg-blue-300 "
          >
            {" "}
            shuffle Groups and Save
          </button>
          <button
            onClick={abort}
            className="  border rounded-lg border-red-400 p-3 my-3  hover:bg-red-300 "
          >
            {" "}
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
