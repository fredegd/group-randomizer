import { useState } from "react";
import { useForm } from "react-hook-form";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function ProjectForm() {
  console.log("rendering ProjectForm");

  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects && storedProjects !== "undefined"
      ? JSON.parse(storedProjects)
      : [];
  });

  console.log(projects);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "is the data");
    const updated = [...projects, { name: data.projectName, groups: [] }];
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
    reset();
  };

  const addProject = () => {
    console.log(project);
  };

  return (
    <div className="flex items-center mt-8">
      <WrenchScrewdriverIcon className="h-8 w-8 text-blue-500" />
      <form
        className="w-10/12  flex max-w-md gap-x-4 relative"
        onSubmit={handleSubmit(onSubmit)}
      >

        <input
          type="text"
          {...register("projectName")}
          id="projectName"
          name="projectName"
          required
          className="bg-transparent
        peer h-10 w-full 
         placeholder-shown:border-b-2
          placeholder-shown:border-gray-300
          px-3
           text-xl text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
          placeholder="New Project"
        />
        <label
          for="projectName"
          class="px-3 absolute left-0 -top-4 text-gray-600  transition-all 
        peer-placeholder-shown:text-md
         peer-placeholder-shown:text-gray-600 
         peer-placeholder-shown:top-1.5 
         peer-focus:-top-4
         peer-focus:text-gray-600 peer-focus:text-sm"
        >
          new Project:
        </label>
      </form>
    </div>
  );
}
